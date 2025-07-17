"use client";

import { useState } from "react";

/**
 * checked: 체크박스 체크 여부
 * value: 체크박스 값
 * label: 체크박스 라벨
 * onClick: 체크박스 클릭 이벤트
 */
interface CheckboxProps {
    checked: boolean;
    value: string;
    label?: string;
    onClick: (value: string, checked: boolean) => void;
}
export default function Checkbox({ checked = false, value, label, onClick }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <div
            className="w-fit cursor-pointer"
            onClick={() => {
                onClick(value, !isChecked);
                setIsChecked(!isChecked);
            }}
        >
            <div className="w-fit flex gap-3 items-center">
                <div className="w-5 h-5 flex justify-center items-center">
                    <div
                        className={`w-5 h-5 flex items-center justify-center bg-white border-2 rounded-md transition-all duration-200 ${
                            isChecked ? "bg-[#636ae8] border-[#636ae8] shadow-sm" : "border-gray-300 hover:border-[#636ae8]"
                        }`}
                    >
                        {isChecked && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="white" />
                            </svg>
                        )}
                    </div>
                </div>
                {label && <div className="text-sm font-medium text-gray-700">{label}</div>}
            </div>
        </div>
    );
}
