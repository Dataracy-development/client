"use client";

import { onLoginApi } from "@/apis/authApis";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/hooks";
import { Apis } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
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
        onSuccess: async () => {
            // 쿠키에서 refreshToken 가져오기
            const getCookie = (name: string) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop()?.split(";").shift();
                return null;
            };

            let refreshToken = getCookie("refreshToken");
            if (!refreshToken) {
                refreshToken = process.env.NEXT_PUBLIC_TEMP_REFRESH_TOKEN;
            }

            try {
                const response = await Apis.post(
                    "/auth/dev/token/re-issue",
                    { refreshToken },
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    }
                );

                document.cookie = `token=${response.data.accessToken}; path=/; SameSite=Lax; Secure`;
                document.cookie = `refreshToken=${refreshToken}; path=/; SameSite=Lax; Secure`;
                await new Promise((resolve) => setTimeout(resolve, 0));
                queryClient.invalidateQueries({ queryKey: ["isLoggedIn"] });
                queryClient.refetchQueries({ queryKey: ["isLoggedIn"] });

                router.push("/");
            } catch (error) {
                console.error("Refresh API Error:", error);
            }
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
            <Input label="이메일" name="email" {...email} placeholder="이메일을 입력해주세요." type="email" isErr={!!isErrors.email} errMsg={errorMessages.email} />
            <Input label="비밀번호" name="password" {...password} placeholder="비밀번호를 입력해주세요." type="password" isErr={!!isErrors.password} errMsg={errorMessages.password} />

            <Link href="/find-pw" className="text-body2 font-inter text-primary my-[26px]">
                비밀번호를 잊으셨나요?
            </Link>

            <Button label="로그인" type="submit" />
        </form>
    );
}
