import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-[85px]">
            <div className="max-w-[1200px] w-full px-3 mx-auto h-full flex items-center justify-between">
                <div className="flex items-center gap-[26px]">
                    <Link href="/" className="text-[32px] leading-12 font-bold text-[#636ae8ff] font-montserrat">
                        Dataracy
                    </Link>
                    <div className="w-fit flex items-center">
                        <div className="px-4 text-[#565d6dff] text-base leading-[26px] font-normal">
                            <Link href="/project/list">프로젝트</Link>
                        </div>
                        <div className="px-4 text-[#565d6dff] text-base leading-[26px] font-normal">
                            <span className="cursor-pointer">데이터</span>
                        </div>
                        <div className="px-4 text-[#565d6dff] text-base leading-[26px] font-normal">
                            <span className="cursor-pointer">스토어</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-[21px]">
                    <div className="w-[448px] h-9 px-3 border border-[#bdc1caff] rounded-[18px] flex items-center gap-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7097 13.8844L11.4297 11.6044" stroke="#BDC1CA" strokeWidth="1.368" strokeMiterlimit="10" strokeLinecap="square" />
                            <path
                                d="M6.8598 11.5944C9.37822 11.5944 11.4198 9.55278 11.4198 7.03437C11.4198 4.51595 9.37822 2.47437 6.8598 2.47437C4.34139 2.47437 2.2998 4.51595 2.2998 7.03437C2.2998 9.55278 4.34139 11.5944 6.8598 11.5944Z"
                                stroke="#BDC1CA"
                                strokeWidth="1.368"
                                strokeMiterlimit="10"
                                strokeLinecap="square"
                            />
                            <path d="M4.56934 7.02438C4.56934 5.76518 5.59013 4.74438 6.84934 4.74438" stroke="#BDC1CA" strokeWidth="1.368" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>

                        <input type="text" className="flex-1 focus:outline-none h-full text-sm leading-9 font-normal" placeholder="프로젝트, 데이터셋 검색" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="h-9 rounded-md text-sm font-normal text-[#636ae8ff] border border-[#636ae8ff] cursor-pointer px-3">로그인</button>
                        <button className="h-9 rounded-md text-sm font-normal text-white border border-white bg-[#636ae8ff] cursor-pointer px-3">회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
