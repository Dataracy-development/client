"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    if (pathname === "/signup" || pathname === "/login") return null;

    return (
        <div className="w-full h-[105px]">
            <div className="max-w-[1200px] w-full px-2.5 mx-auto h-full flex items-center justify-between">
                <div className="flex items-center gap-[25px]">
                    <Link href="/" className="text-logo2 text-primary font-montserrat">
                        Dataracy
                    </Link>
                    <div className="w-fit flex items-center">
                        <div className="px-4 text-n500 text-button ">
                            <Link href="/project/list">프로젝트</Link>
                        </div>
                        <div className="px-4 text-n500 text-button ">
                            <Link href="/">데이터</Link>
                        </div>
                        <div className="px-4 text-n500 text-button ">
                            <Link href="/">스토어</Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-[60px]">
                    <div className="w-[380px] h-[45px] px-3 bg-n200 rounded-xl flex items-center gap-[15px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                                fill="#9095A1"
                            />
                        </svg>

                        <input type="text" className="flex-1 focus:outline-none h-full text-body2 bg-n200  leading-[45px]" placeholder="프로젝트, 데이터셋 검색" />
                    </div>

                    <button className="w-[140px] h-[45px] rounded-xl bg-secondary text-name  text-white" onClick={() => router.push("/login")}>
                        시작하기
                    </button>
                </div>
            </div>
        </div>
    );
}
