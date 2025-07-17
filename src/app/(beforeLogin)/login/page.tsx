"use client";

import Link from "next/link";
import EmailLoginForm from "./_components/EmailLoginForm";
import SocialLoginForm from "./_components/SocialLoginForm";

export default function Signup() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#636ae8] via-[#7c82f0] to-[#636ae8] flex items-center justify-center p-4 py-10">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">로그인</h1>
                    <p className="text-white/80 text-sm">Dataracy에 오신 것을 환영합니다</p>
                </div>

                {/* Form Container */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                    <EmailLoginForm />
                    <LinkBtns />
                    <SocialLoginForm />
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-white/70 text-sm">
                        아직 계정이 없으신가요?{" "}
                        <Link href="/signup" className="text-white font-medium hover:underline transition-colors">
                            회원가입하기
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

const LinkBtns = () => {
    return (
        <div className="flex gap-2 justify-center my-6">
            <Link
                href="/"
                className="text-sm text-gray-600 hover:text-[#636ae8] transition-colors"
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                비밀번호 찾기
            </Link>
            <div className="text-gray-400 font-bold text-sm">|</div>
            <Link href="/signup" className="text-sm text-gray-600 hover:text-[#636ae8] transition-colors">
                회원가입
            </Link>
        </div>
    );
};
