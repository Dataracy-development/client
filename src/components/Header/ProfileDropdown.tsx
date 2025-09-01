"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";

interface ProfileDropdownProps {
    user: {
        id: number;
        nickname: string;
        email?: string;
    };
}

export default function ProfileDropdown({ user }: ProfileDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        // TODO: 실제 로그아웃 로직 구현
        router.push("/login");
        setIsOpen(false);
    };

    const handleMyPage = () => {
        router.push("/mypage");
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* 프로필 아이콘 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[45px] h-[45px] bg-primary rounded-full flex items-center justify-center text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
                {user.nickname.charAt(0).toUpperCase()}
            </button>

            {/* 드롭다운 메뉴 */}
            {isOpen && (
                <div className="absolute right-0 top-[55px] w-[280px] bg-white rounded-xl shadow-lg border border-n200 py-4 z-50">
                    {/* 사용자 정보 섹션 */}
                    <div className="px-4 py-3 border-b border-n200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center text-white font-semibold">{user.nickname.charAt(0).toUpperCase()}</div>
                            <div>
                                <div className="text-body1 font-medium text-n900">{user.nickname}</div>
                                {user.email && <div className="text-body3 text-n500">{user.email}</div>}
                            </div>
                        </div>
                    </div>

                    {/* 마이페이지 버튼 */}
                    <div className="px-4 pt-2">
                        <Button label="마이페이지" className="w-full !h-[40px] !bg-primary !hover:bg-primary/90 text-white" onClick={handleMyPage} />
                    </div>

                    {/* 로그아웃 버튼 */}
                    <div className="px-4 pt-2 border-t border-n200">
                        <Button label="로그아웃" className="w-full !h-[40px] bg-red-500 hover:bg-red-600 text-white" onClick={handleLogout} />
                    </div>
                </div>
            )}
        </div>
    );
}
