"use client";

import { onLoginApi } from "@/apis/authApis";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/hooks";
import { useCreateMutation } from "@/hooks/mutations/hooks";
import { Apis } from "@/utils/api";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function EmailLoginForm() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const email = useInput("");
    const password = useInput("");

    const spinnerRef = useRef<HTMLButtonElement>(null);

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

    const loginMutation = useCreateMutation(
        onLoginApi,
        "login",
        {
            onSuccess: async (data) => {
                if (process.env.NODE_ENV === "development") {
                    const { refreshToken } = data.data;

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

                    window.location.href = "/";

                    return;
                }

                const response = await fetch("/api/auth/refresh-token", {
                    credentials: "include", // 쿠키를 포함하여 요청
                });

                if (response.ok) {
                    const { refreshToken } = await response.json();
                    console.log("refreshToken:::", refreshToken);

                    try {
                        const response = await Apis.post("/auth/token/re-issue", {
                            withCredentials: true,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            cookies: {
                                refreshToken,
                            },
                        });

                        console.log("login response:::", response);

                        document.cookie = `token=${response.data.accessToken}; path=/; SameSite=Lax; Secure`;
                        document.cookie = `refreshToken=${refreshToken}; path=/; SameSite=Lax; Secure`;
                        await new Promise((resolve) => setTimeout(resolve, 0));
                        queryClient.invalidateQueries({ queryKey: ["isLoggedIn"] });
                        queryClient.refetchQueries({ queryKey: ["isLoggedIn"] });

                        router.push("/");
                    } catch (error) {
                        console.error("Refresh API Error:", error);
                    }
                } else {
                    alert("로그인에 실패했습니다.");
                    return;
                }
            },
            onError: () => {
                setShowToast(true);
            },
        },
        spinnerRef.current
    );

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
            <Input
                label="이메일"
                name="email"
                {...email}
                placeholder="이메일을 입력해주세요."
                type="email"
                isErr={!!isErrors.email}
                errMsg={errorMessages.email}
            />
            <Input
                label="비밀번호"
                name="password"
                {...password}
                placeholder="비밀번호를 입력해주세요."
                type="password"
                isErr={!!isErrors.password}
                errMsg={errorMessages.password}
            />

            <Link href="/find-pw" className="text-body2 font-inter text-primary my-[26px]">
                비밀번호를 잊으셨나요?
            </Link>

            <Button label="로그인" type="submit" ref={spinnerRef} />
        </form>
    );
}
