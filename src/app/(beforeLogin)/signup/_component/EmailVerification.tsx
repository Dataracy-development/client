import { onCheckEmailVerificationCodeApi, onSendEmailVerificationCodeApi } from "@/apis/authApis";
import Input from "@/components/Input";
import { validateEmail } from "@/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useSignupStore } from "../store/store";

export default function EmailVerification() {
    const { formData, setField, setError, setIsEmailVerified } = useSignupStore();

    const [isClickEmailVerification, setIsClickEmailVerification] = useState(false);
    const [isTimerFinish, setIsTimerFinish] = useState(false);
    const [timerResetKey, setTimerResetKey] = useState(0);

    const finishTimer = () => {
        setIsTimerFinish(true);
    };

    const handleEmailVerificationMutation = useMutation({
        mutationFn: onSendEmailVerificationCodeApi,
        onMutate: () => {},
        onSuccess: (data) => {
            console.log("success data:::", data);
            setIsTimerFinish(false);
            setIsClickEmailVerification(true);
            setTimerResetKey((prev) => prev + 1);
        },
        onError: (error: AxiosError) => {
            console.log(error.response?.data);
        },
        onSettled: () => {},
    });

    const handleEmailVerificationCheckMutation = useMutation({
        mutationFn: onCheckEmailVerificationCodeApi,
        onMutate: () => {},
        onSuccess: (data) => {
            console.log("success data:::", data);
            setIsEmailVerified(true);
        },
        onError: (error) => {
            console.log(error);
            window.alert("인증번호를 확인해주세요.");
        },
        onSettled: () => {},
    });

    const handleEmailVerification = () => {
        setIsEmailVerified(true); // 임시
        setField("verificationCode", "123");
        // handleEmailVerificationMutation.mutate(formData.email);
    };

    const handleEmailVerificationCheck = () => {
        if (isTimerFinish) {
            return;
        }

        // handleEmailVerificationCheckMutation.mutate({
        //     email: formData.email,
        //     code: formData.verificationCode,
        // });
    };

    const handleInputChange = (field: "email" | "verificationCode", value: string) => {
        setField(field, value);
        // 에러가 있으면 클리어
        if (formData.errors[field]) {
            setError(field, "");
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-3">
                <Input
                    label="이메일"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="이메일을 입력해주세요"
                    type="email"
                    isRequired={true}
                    isErr={!!formData.errors.email}
                    errMsg={formData.errors.email}
                    isConfirm={isClickEmailVerification || formData.isEmailVerified}
                    confirmMsg={formData.isEmailVerified ? "본인 인증이 완료되었습니다" : isClickEmailVerification ? "인증번호가 전송되었습니다" : undefined}
                >
                    {formData.isEmailVerified ? <CheckIcon /> : undefined}
                </Input>

                {!formData.isEmailVerified && (
                    <button
                        type="button"
                        onClick={handleEmailVerification}
                        className={`h-[46px] mt-7 text-white w-24 rounded-lg focus:outline-none text-sm font-medium transition-all duration-200 ${
                            validateEmail(formData.email) ? "bg-gradient-to-r from-[#636ae8] to-[#7c82f0] hover:shadow-lg transform hover:scale-105" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!validateEmail(formData.email)}
                    >
                        {isClickEmailVerification ? "재전송" : "인증요청"}
                    </button>
                )}
            </div>

            {!formData.isEmailVerified && isClickEmailVerification && (
                <div className="flex gap-3">
                    <Input
                        label="인증번호 입력"
                        value={formData.verificationCode}
                        onChange={(e) => handleInputChange("verificationCode", e.target.value)}
                        placeholder="인증번호를 입력해 주세요"
                        type="text"
                        isErr={!!formData.errors.verificationCode}
                        errMsg={formData.errors.verificationCode}
                    >
                        {isTimerFinish ? undefined : <Timer isTimerFinish={finishTimer} resetKey={timerResetKey} />}
                    </Input>

                    <button
                        type="button"
                        className="h-[46px] mt-7 text-sm text-white w-24 rounded-lg bg-gradient-to-r from-[#636ae8] to-[#7c82f0] hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none"
                        onClick={handleEmailVerificationCheck}
                        disabled={formData.verificationCode.length !== 6 || isTimerFinish}
                    >
                        {isTimerFinish ? "인증 실패" : "인증 완료"}
                    </button>
                </div>
            )}
        </div>
    );
}

const CheckIcon = () => (
    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white" />
        </svg>
    </div>
);

const Timer = ({ isTimerFinish, resetKey }: { isTimerFinish: () => void; resetKey: number }) => {
    const [time, setTime] = useState(180);

    useEffect(() => {
        setTime(180);
    }, [resetKey]);

    useEffect(() => {
        if (time === 0) {
            isTimerFinish();
            return;
        }

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time, isTimerFinish]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    return (
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-red-500 font-medium">{formattedTime}</span>
        </div>
    );
};
