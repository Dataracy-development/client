"use client";

import { onSignupApi } from "@/apis/authApis";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import OptionalInfoSection from "./_component/OptionalInfoSection";
import RequiredInfoSection from "./_component/RequiredInfoSection";
import { useSignupStore } from "./store/store";

export default function EmailSignup({ setStep }: { setStep: (step: number) => void }) {
    const { formData, validate, getRequestData, setLoading } = useSignupStore();
    const router = useRouter();

    const signupMutation = useMutation({
        mutationFn: onSignupApi,
        onMutate: (variable) => {
            console.log("onMutate", variable);
            setLoading(true);
        },
        onError: (error: AxiosError) => {
            console.log("signupError", error.response?.data);
            setLoading(false);
        },
        onSuccess: (data, variables, context) => {
            console.log("signupSuccess", data, variables, context);
            setLoading(false);
            // 회원가입 성공 로직 추가
            router.push("/");
        },
        onSettled: () => {
            console.log("signupEnd");
        },
    });

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            console.log("formData:::", formData);
            if (validate()) {
                // 회원가입 API 호출
                const request = getRequestData();
                console.log("signup request:::", request);
                signupMutation.mutate(request);
            }
        },
        [validate, getRequestData, signupMutation]
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#636ae8] via-[#7c82f0] to-[#636ae8] flex items-center justify-center p-4 py-10">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">회원가입</h1>
                    <p className="text-white/80 text-sm">Dataracy와 함께 시작해보세요</p>
                </div>

                {/* Form Container */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <RequiredInfoSection />
                            <OptionalInfoSection />
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full h-14 bg-gradient-to-r from-[#636ae8] to-[#7c82f0] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                disabled={formData.isLoading}
                            >
                                {formData.isLoading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>가입 중...</span>
                                    </div>
                                ) : (
                                    "회원가입 완료"
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-white/70 text-sm">
                        이미 계정이 있으신가요?{" "}
                        <button onClick={() => setStep(0)} className="text-white font-medium hover:underline transition-colors">
                            로그인하기
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
