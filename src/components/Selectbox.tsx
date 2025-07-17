"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * label: 라벨
 * isRequired: 필수 여부
 * placeholder: placeholder
 * options: 옵션 배열
 * initialValue: 초기 값
 * onChange: onChange 이벤트
 * isErr: 에러 여부
 * errMsg: 에러 메시지
 */
interface SelectboxProps {
    label?: string;
    isRequired?: boolean;
    placeholder?: string;
    options: { value: string; label: string }[];
    className?: string;
    initialValue?: string;
    onChange?: (value: string) => void;
    isErr?: boolean;
    errMsg?: string;
}

const Selectbox: React.FC<SelectboxProps> = ({ label = "", isRequired = false, placeholder, options, className, initialValue, onChange, isErr = false, errMsg }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const selectboxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (initialValue) {
            const option = options.filter((v) => v.value === initialValue)[0];
            if (option) setSelectedOption(option.label);
        }
    }, [initialValue, options]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectboxRef.current && !selectboxRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (option: string) => {
        setSelectedOption(options.filter((v) => v.value === option)[0].label);
        setIsOpen(false);
        onChange?.(option);
    };

    return (
        <div className="relative w-full" ref={selectboxRef}>
            {label !== "" && (
                <div className="mb-2 text-sm font-semibold text-gray-700">
                    {label}
                    {isRequired && <span className="text-red-500 ml-1">*</span>}
                </div>
            )}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-[46px] px-4 bg-white border rounded-xl flex justify-between items-center cursor-pointer focus:outline-none transition-all duration-200 ${
                    isErr
                        ? "border-red-500 bg-red-50"
                        : selectedOption
                        ? "border-[#636ae8] bg-white shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300 focus:border-[#636ae8] focus:shadow-sm"
                } ${className}`}
            >
                <span className={`text-sm font-normal ${selectedOption ? "text-gray-800" : "text-gray-400"}`}>{selectedOption || placeholder}</span>
                <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.3535 1.35378L6.35354 6.35378C6.3071 6.40027 6.25196 6.43715 6.19126 6.46231C6.13056 6.48748 6.0655 6.50043 5.99979 6.50043C5.93408 6.50043 5.86902 6.48748 5.80832 6.46231C5.74762 6.43715 5.69248 6.40027 5.64604 6.35378L0.64604 1.35378C0.552219 1.25996 0.499512 1.13272 0.499512 1.00003C0.499512 0.867352 0.552219 0.740104 0.64604 0.646284C0.73986 0.552463 0.867108 0.499756 0.99979 0.499756C1.13247 0.499756 1.25972 0.552463 1.35354 0.646284L5.99979 5.29316L10.646 0.646284C10.6925 0.599829 10.7476 0.562978 10.8083 0.537837C10.869 0.512696 10.9341 0.499756 10.9998 0.499756C11.0655 0.499756 11.1305 0.512696 11.1912 0.537837C11.2519 0.562978 11.3071 0.599829 11.3535 0.646284C11.4 0.692739 11.4368 0.747889 11.462 0.808586C11.4871 0.869282 11.5001 0.934336 11.5001 1.00003C11.5001 1.06573 11.4871 1.13079 11.462 1.19148C11.4368 1.25218 11.4 1.30733 11.3535 1.35378Z"
                            fill="#636ae8"
                        />
                    </svg>
                </span>
            </button>
            {isErr && (
                <div className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"
                            fill="currentColor"
                        />
                    </svg>
                    {errMsg}
                </div>
            )}

            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option.value)}
                            className={`px-4 py-3 text-sm font-normal hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                                selectedOption === option.label ? "bg-[#636ae8]/10 text-[#636ae8] font-medium" : "text-gray-700"
                            }`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Selectbox;
