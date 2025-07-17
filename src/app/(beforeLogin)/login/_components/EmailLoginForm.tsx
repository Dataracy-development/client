"use client";

import { onLoginApi } from "@/apis/authApis";
import Input from "@/components/Input";
import { useInput } from "@/hooks/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmailLoginForm() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const email = useInput("");
    const password = useInput("");

    const [isErrors, setIsErrors] = useState({
        email: false,
        password: false,
        common: false,
    });
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
        common: "",
    });

    const validate = (email: string, password: string) => {
        const newIsErrors = {
            common: false,
            email: email === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email),
            password: password === "",
        };

        const newErrorMessages = {
            common: "",
            email: email === "" ? "이메일을 입력해주세요." : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ? "이메일 형식이 올바르지 않습니다." : "",
            password: password === "" ? "비밀번호를 입력해주세요." : "",
        };

        setIsErrors(newIsErrors);
        setErrorMessages(newErrorMessages);

        const isValid = Object.values(newIsErrors).filter((value) => value === true).length === 0;

        return isValid;
    };

    const [showToast, setShowToast] = useState(false);

    const loginMutation = useMutation({
        mutationFn: onLoginApi,
        onSuccess: async (data) => {
            document.cookie = `token=${data.accessToken}; path=/; SameSite=Lax; Secure`;
            await new Promise((resolve) => setTimeout(resolve, 0));
            console.log("캐시 무효화 직전");
            queryClient.invalidateQueries({ queryKey: ["isLoggedIn"] });
            queryClient.refetchQueries({ queryKey: ["isLoggedIn"] });

            router.push("/");
        },
        onError: (error) => {
            console.error("loginError:::", error);
            setShowToast(true);
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validate(email.value, password.value);
        if (!isValid) return;

        // 로그인 요청
        loginMutation.mutate({
            email: email.value,
            password: password.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <Input
                    label="이메일"
                    value={email.value}
                    onChange={(e) => {
                        email.onChange(e);
                        setIsErrors({ ...isErrors, email: false });
                        setErrorMessages({ ...errorMessages, email: "" });
                    }}
                    placeholder="이메일을 입력해주세요."
                    type="email"
                    isErr={isErrors.email}
                    errMsg={errorMessages.email}
                />

                <Input
                    label="비밀번호"
                    value={password.value}
                    onChange={(e) => {
                        password.onChange(e);
                        setIsErrors({ ...isErrors, password: false });
                        setErrorMessages({ ...errorMessages, password: "" });
                    }}
                    placeholder="비밀번호를 입력해주세요."
                    type="password"
                    isErr={isErrors.password}
                    errMsg={errorMessages.password}
                />
            </div>

            <button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-[#636ae8] to-[#7c82f0] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={loginMutation.isPending}
            >
                {loginMutation.isPending ? (
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>로그인 중...</span>
                    </div>
                ) : (
                    "로그인"
                )}
            </button>
        </form>
    );
}
