"use client";

import AuthPageLeftSection from "@/components/Auth/AuthPageLeftSection";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import FirstFunnel from "./_component/FirstFunnel/FirstFunnel";
import SecondFunnel from "./_component/SecondFunnel";
import ThirdFunnel from "./_component/ThirdFunnel/ThirdFunnel";
import { useSignupStore } from "./store/store";

interface Funnel {
    step: number;
    title: string;
    component: React.ReactNode;
}

const funnels: Funnel[] = [
    {
        step: 1,
        title: "회원가입",
        component: <FirstFunnel />,
    },
    {
        step: 2,
        title: "인증하기",
        component: <SecondFunnel />,
    },
    {
        step: 3,
        title: "기본정보 입력",
        component: <ThirdFunnel />,
    },
];

function SignupContent() {
    const searchParams = useSearchParams();
    const social = searchParams.get("social");
    const { currentStep, setCurrentStep } = useSignupStore();

    const currentFunnel = funnels.find((funnel) => funnel.step === currentStep);

    useEffect(() => {
        if (social) {
            setCurrentStep(3);
        }
    }, [social, setCurrentStep]);

    return (
        <div className="py-[72px] flex justify-center">
            <div className="flex w-[1000px] h-[921px] shadow-signup rounded-2xl">
                <AuthPageLeftSection />

                <div className="flex-1 flex flex-col justify-center gap-[35px] p-12">
                    <div className="text-center">
                        <div className="mb-[14px] text-[28px] font-inter font-bold text-[#222222] leading-[34px]">{currentFunnel?.title}</div>
                        <div className="text-body1 text-[#666666]">회원으로 가입하여 데이터러시를 시작하세요</div>
                    </div>

                    {currentFunnel?.component}

                    <div className="text-center border-t border-[#e2e8f0] pt-[26px]">
                        <div className="text-body2 font-inter text-[#666666] mb-3">이미 계정이 있으신가요?</div>
                        <Link href="/login" className="text-body1 font-semibold text-primary font-inter">
                            로그인
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function EmailSignup() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignupContent />
        </Suspense>
    );
}
