import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/hooks";
import { useEmailVerificationCheckMutation, useEmailVerificationMutation } from "@/hooks/mutations/useSignupMutation";
import { AxiosError, AxiosResponse } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSignupStore } from "../store/store";

export default function SecondFunnel() {
    const { formData, setCurrentStep } = useSignupStore();

    const verificationCode = useInput("");
    const [errMsg, setErrMsg] = useState("");

    const hasSentEmail = useRef(false); // 이메일 인증번호 발송 여부
    // 이메일 인증번호 발송 mutation
    const { mutate: sendEmailVerificationCode } = useEmailVerificationMutation();
    // 컴포넌트 마운트 시, 이메일 인증번호 발송
    useEffect(() => {
        if (formData.email && !hasSentEmail.current) {
            hasSentEmail.current = true;
            sendEmailVerificationCode({
                email: formData.email,
                purpose: "SIGN_UP",
            });
        }
    }, [formData.email, sendEmailVerificationCode]);

    // 이메일 인증번호 확인 mutation
    const { mutate: checkEmailVerificationCode } = useEmailVerificationCheckMutation({
        onSuccess: () => {
            setCurrentStep(3);
        },
        onError: (error: AxiosError) => {
            const { data } = error.response as AxiosResponse<{ message: string }>;
            setErrMsg(data.message);
        },
    });
    // 인증번호 확인
    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const { value } = verificationCode;
            if (value.length !== 6) {
                setErrMsg("6자리 인증번호를 입력해주세요.");
                return;
            }
            setErrMsg("");
            checkEmailVerificationCode({
                email: formData.email,
                code: value,
                purpose: "SIGN_UP",
            });

            setCurrentStep(3);
        },
        [verificationCode, formData.email, checkEmailVerificationCode, setCurrentStep]
    );

    return (
        <div>
            <div className="text-button text-info text-center mb-5">입력하신 이메일로 인증번호를 발송하였습니다</div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input {...verificationCode} placeholder="인증번호를 입력하세요" type="text" isErr={!!errMsg} errMsg={errMsg} />
                <Button label="인증하기" type="submit" />
            </form>
        </div>
    );
}
