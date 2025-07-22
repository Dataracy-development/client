export default function SocialButtons() {
    const handleSocialLogin = (provider: string) => {
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/${provider}`;
    };

    return (
        <div>
            <div className="text-center text-body2 font-inter text-[#9ca3af] my-[35px] relative">
                <span className="relative z-10 bg-white px-4">또는</span>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#e2e8f0] -translate-y-1/2"></div>
            </div>
            <div className="flex flex-col gap-3 justify-center">
                <button
                    className="w-full h-[50px] text-button text-[#3c4043] bg-white border border-[#dadce0] rounded-lg flex items-center gap-2.5 justify-center shadow-socialButton"
                    onClick={() => handleSocialLogin("google")}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="16" height="16" fill="url(#pattern0_274_1814)" />
                        <defs>
                            <pattern id="pattern0_274_1814" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_274_1814" transform="scale(0.0625)" />
                            </pattern>
                            <image
                                id="image0_274_1814"
                                width="16"
                                height="16"
                                preserveAspectRatio="none"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAddJREFUOE+lk71LG3EYx7+P6ZmaRDjFRKGlpLgoBRswFtyiCSgYaCBUGkFH/wdzg4PELk6uHTuopK0VFCzkZZEO9TIVGugukjRpEBJi3u6RO7zz8oZDn+2el899n5cfoY+VfB6xbhmcBjNZ69aseHFR6pVKnc784hsJxDsAOmNMwLYzeanGDDOSGKC8f65AwGg/Vff+K1fy8rmeYwBy/rliR3EVwDkYDMIyABsDddeo20bxeKsNUHjriSplIaY7FeLQREI+MSvJBbxh18jLb+ZiNa4paCQEpZp8Rrc/nWDmjfGU/OmRNh5mwGmIzZagTbh5bVOG1m8s5uKFD5XZfrD0lj1DjcSTeYB+3Cf9EgKNGXPBYqzM/QApyUH/B4jaB8jcwu+mqLxe/tvWgj9W3jUrYGBL/9YU6EPcr7yig+okwLwhR772HOJCrLJC4FMNQMinoo5xDbB0tBIt8lNjjQCF5Pef29bo25OnBmpTWf3vDAqmJfuZcUjew3AR7VeoHtJ3EDXBHAAgWv+9g7UUVBnFlOQYM+5AozLIexQudEC6FmCpuasvhvaG46ukXWPXY/IehiUAvR4TmPExE/myaaZ2AfSg5zgkDjaEaW4xKSz8yawdqOq67A45A60QBuSBmQAAAABJRU5ErkJggg=="
                            />
                        </defs>
                    </svg>
                    Google로 가입하기
                </button>
                <button
                    className="w-full h-[50px] text-button text-black bg-[#fee500] border border-[#fee500] rounded-lg flex items-center gap-2.5 justify-center shadow-socialButton"
                    onClick={() => handleSocialLogin("kakao")}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_274_1822)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.00005 0.533447C3.5815 0.533447 0 3.30052 0 6.71325C0 8.83569 1.38525 10.7068 3.4947 11.8196L2.60715 15.0619C2.52873 15.3484 2.85638 15.5767 3.10798 15.4107L6.99856 12.843C7.32688 12.8746 7.66054 12.8931 8.00005 12.8931C12.4182 12.8931 16 10.1262 16 6.71325C16 3.30052 12.4182 0.533447 8.00005 0.533447Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_274_1822">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    카카오로 가입하기
                </button>
            </div>
        </div>
    );
}
