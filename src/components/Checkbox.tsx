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
            className="w-fit bg-white cursor-pointer"
            onClick={() => {
                onClick(value, !isChecked);
                setIsChecked(!isChecked);
            }}
        >
            <div className="w-fit flex gap-1.5 items-center">
                <div className="w-4 flex justify-center flex-col">
                    <div className={`w-full h-4 flex items-center justify-center bg-white border border-[#9095A1] rounded-[2px] ${isChecked && "bg-[#636AE8] border-[#636AE8]"}`}></div>
                </div>
                {label && <div className="font-inter text-sm leading-[22px] font-normal text-[#171A1F]">{label}</div>}
            </div>
        </div>
    );
}
