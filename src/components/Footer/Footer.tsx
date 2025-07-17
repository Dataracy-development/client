export default function Footer() {
    return (
        <footer className="w-full h-[400px] bg-primary flex items-center justify-center text-white">
            <div className="max-w-[1200px] w-full px-2.5 max-h-[283px] h-full py-2.5 flex flex-col justify-between">
                <div className="w-full flex justify-between items-start">
                    <div>
                        <div className="mb-[77px] text-logo2 font-montserrat">Dataracy</div>
                        <div className="text-button">
                            02&#41;0000-0000
                            <br />
                            hello@dataracy.zzz
                            <br />
                            서울특별시 강남구 OO대로 OO
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="mr-5 flex flex-col gap-6 text-button">
                            <div>소개</div>
                            <div>특징</div>
                            <div>플랜 및 구독</div>
                        </div>
                        <div className="mr-20 flex flex-col gap-6 text-button">
                            <div>FAQ</div>
                            <div>유저 가이드</div>
                            <div>블로그</div>
                        </div>
                        <div>
                            <div className="text-h6 mb-[26px]">
                                지금 바로
                                <br />
                                데이터러시 뉴스레터를 구독하세요!
                            </div>

                            <div className="flex items-center gap-5">
                                <input type="text" className="w-[310px] h-[45px] bg-n300 border-none focus:outline-none rounded-xl" />
                                <button className="w-[90px] h-[45px] text-button text-n300 bg-secondary rounded-xl">구독하기</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between items-end">
                    <div className="text-caption">Copyright ⓒ Dataracy 2025. All rights reserved.</div>

                    <div className="flex items-center gap-5">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                            <path
                                d="M27 3H22.5C20.5109 3 18.6032 3.79018 17.1967 5.1967C15.7902 6.60322 15 8.51088 15 10.5V15H10.5V21H15V33H21V21H25.5L27 15H21V10.5C21 10.1022 21.158 9.72064 21.4393 9.43934C21.7206 9.15804 22.1022 9 22.5 9H27V3Z"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                            <path
                                d="M26.25 9.75H26.265M10.5 3H25.5C29.6421 3 33 6.35786 33 10.5V25.5C33 29.6421 29.6421 33 25.5 33H10.5C6.35786 33 3 29.6421 3 25.5V10.5C3 6.35786 6.35786 3 10.5 3ZM24 17.055C24.1851 18.3034 23.9719 19.5783 23.3906 20.6985C22.8094 21.8187 21.8897 22.7271 20.7624 23.2945C19.6352 23.8619 18.3577 24.0594 17.1117 23.8589C15.8657 23.6584 14.7146 23.0701 13.8223 22.1777C12.9299 21.2854 12.3416 20.1343 12.1411 18.8883C11.9406 17.6423 12.1381 16.3648 12.7055 15.2376C13.2729 14.1103 14.1813 13.1906 15.3015 12.6094C16.4217 12.0281 17.6966 11.8149 18.945 12C20.2184 12.1888 21.3973 12.7822 22.3075 13.6925C23.2178 14.6027 23.8112 15.7816 24 17.055Z"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                            <path
                                d="M12.885 20.265L23.13 26.235M23.115 9.765L12.885 15.735M31.5 7.5C31.5 9.98528 29.4853 12 27 12C24.5147 12 22.5 9.98528 22.5 7.5C22.5 5.01472 24.5147 3 27 3C29.4853 3 31.5 5.01472 31.5 7.5ZM13.5 18C13.5 20.4853 11.4853 22.5 9 22.5C6.51472 22.5 4.5 20.4853 4.5 18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM31.5 28.5C31.5 30.9853 29.4853 33 27 33C24.5147 33 22.5 30.9853 22.5 28.5C22.5 26.0147 24.5147 24 27 24C29.4853 24 31.5 26.0147 31.5 28.5Z"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}
