"use client";

import AuthPageLeftSection from "@/components/Auth/AuthPageLeftSection";
import Link from "next/link";
import ChangePw from "./_components/ChangePw";
import SendAuthCode from "./_components/SendAuthCode";
import { useFindPwStore } from "./store/store";

export default function FindPw() {
    const { isSent } = useFindPwStore();

    return (
        <div className="py-[72px] flex justify-center">
            <div className="flex w-[1000px] h-[921px] shadow-signup rounded-2xl">
                <AuthPageLeftSection />

                <div className="flex-1 flex flex-col justify-center p-12">
                    <div className="text-[28px] leading-[34px] font-inter font-bold text-[#222] mb-[14px] text-center">비밀번호 재설정</div>
                    <div className="text-body1 text-[#666] mb-[26px] text-center">데이터러시에 가입한 이메일을 입력해주세요</div>

                    {!isSent ? <SendAuthCode /> : <ChangePw />}

                    <div className="flex flex-col gap-3 mt-[35px] border-t border-[#e2e8f0] pt-[26px] text-center">
                        <div className="text-body2 text-[#666]">이미 계정이 있으신가요?</div>
                        <Link href="/login" className="text-body1 font-semibold text-primary font-inter">
                            로그인
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
