"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/hooks";
import { useCreateMutation } from "@/hooks/mutations/hooks";
import { validateEmail } from "@/utils/utils";
import { useState } from "react";
import { onSendEmailVerificationCodeApi } from "../_apis/apis";
import { useFindPwStore } from "../store/store";

export default function SendAuthCode() {
    const { setEmail, setIsSent } = useFindPwStore();

    const email = useInput("");
    const [error, setError] = useState("");

    const validate = (email: string) => {
        if (!email) return "이메일을 입력해주세요.";
        if (!validateEmail(email)) return "이메일 형식이 올바르지 않습니다.";
        return "";
    };

    const sendAuthCodeMutation = useCreateMutation(onSendEmailVerificationCodeApi, "sendAuthCode", {
        onSuccess: () => {
            setEmail(email.value);
            setIsSent(true);
        },
        onError: () => {
            alert("이메일 전송에 실패했습니다.");
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validate(email.value);

        if (error) {
            setError(error);
            return;
        }

        sendAuthCodeMutation.mutate({ email: email.value, purpose: "PASSWORD_RESET" });
    };

    return (
        <form action="" className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>
            <Input {...email} placeholder="이메일을 입력해주세요." type="email" isErr={!!error} errMsg={error} />
            <Button label="비밀번호 재설정하기" type="submit" />
        </form>
    );
}
