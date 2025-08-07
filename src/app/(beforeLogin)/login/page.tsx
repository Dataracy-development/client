"use client";

import AuthPageLeftSection from "@/components/Auth/AuthPageLeftSection";
import SocialButtons from "@/components/Auth/SocialButtons";
import Link from "next/link";
import EmailLoginForm from "./_components/EmailLoginForm";

export default function Signup() {
    return (
        <div className="py-[72px] flex justify-center">
            <div className="flex w-[1000px] h-[921px] shadow-signup rounded-2xl">
                <AuthPageLeftSection />

                <div className="flex-1 flex flex-col justify-center p-12">
                    <div className="text-center mb-[35px]">
                        <div className="mb-1 text-logo2 font-montserrat text-primary">Dataracy</div>
                        <div className="text-body1 text-[#666666] font-inter">계정에 로그인하여 데이터러시를 시작하세요</div>
                    </div>

                    <EmailLoginForm />
                    <SocialButtons />

                    <div className="text-center border-t border-[#e2e8f0] pt-[26px] mt-8">
                        <div className="text-body2 font-inter text-[#666666] mb-3">아직 계정이 없으신가요?</div>
                        <Link href="/signup" className="text-body1 font-semibold text-primary font-inter">
                            회원가입
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
