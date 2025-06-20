"use client";

import { useState } from "react";

export default function ListHeader() {
    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center mb-2.5">
                <SearchInput />
                <div className="text-sm leading-[22px] font-normal text-[#171A1F]">총 1,234개</div>
            </div>

            <Sort />
        </div>
    );
}

const SearchInput = () => {
    return (
        <div className="w-[517px] h-9 px-3 bg-[#F3F4F6] rounded-md flex items-center gap-1.5">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7097 13.8844L11.4297 11.6044" stroke="#171A1F" strokeWidth="1.368" strokeMiterlimit="10" strokeLinecap="square" />
                <path
                    d="M6.8598 11.5944C9.37822 11.5944 11.4198 9.55278 11.4198 7.03437C11.4198 4.51595 9.37822 2.47437 6.8598 2.47437C4.34139 2.47437 2.2998 4.51595 2.2998 7.03437C2.2998 9.55278 4.34139 11.5944 6.8598 11.5944Z"
                    stroke="#171A1F"
                    strokeWidth="1.368"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                />
                <path d="M4.56934 7.02438C4.56934 5.76518 5.59013 4.74438 6.84934 4.74438" stroke="#171A1F" strokeWidth="1.368" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>

            <input type="text" className="flex-1 focus:outline-none h-full text-sm leading-9 font-normal bg-[#F3F4F6]" placeholder="Search" />
        </div>
    );
};

const Sort = () => {
    const [sortItems, setSortItems] = useState([
        {
            label: "최신순",
            value: "latest",
            isActive: true,
        },
        {
            label: "추천순",
            value: "recommend",
            isActive: false,
        },
        {
            label: "조회순",
            value: "view",
            isActive: false,
        },
        {
            label: "피드백 많은 순",
            value: "feedback",
            isActive: false,
        },
        {
            label: "피드백 적은 순",
            value: "feedback-less",
            isActive: false,
        },
    ]);

    const onClick = (value: string) => {
        setSortItems(sortItems.map((item) => ({ ...item, isActive: item.value === value })));
    };

    return (
        <div className="w-full flex flex-wrap gap-2.5 items-center">
            {sortItems.map((item) => (
                <div
                    key={item.value}
                    className={`w-fit h-7 px-2 bg-[#F3F4F6] text-sm leading-7 font-normal rounded-[14px] cursor-pointer ${item.isActive ? "bg-[#565D6D] text-white" : "text-[#323743] bg-[#F3F4F6]"}`}
                    onClick={() => {
                        onClick(item.value);
                    }}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};
