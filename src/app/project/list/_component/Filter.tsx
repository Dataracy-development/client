"use client";

import Checkbox from "@/components/Checkbox";
import { useState } from "react";

interface FilterItem {
    title: string;
    items: {
        value: string;
        label: string;
    }[];
}

const filterItems: FilterItem[] = [
    {
        title: "도메인",
        items: [
            {
                value: "commerce",
                label: "커머스",
            },
            {
                value: "food",
                label: "식품",
            },
            {
                value: "it",
                label: "IT",
            },
            {
                value: "tourism",
                label: "관광",
            },
            {
                value: "education",
                label: "교육",
            },
            {
                value: "healthcare",
                label: "헬스케어",
            },
            {
                value: "local",
                label: "지역",
            },
            {
                value: "marketing",
                label: "마케팅",
            },
        ],
    },
    {
        title: "분석 목적",
        items: [
            {
                value: "planning",
                label: "기획",
            },
            {
                value: "sales",
                label: "영업",
            },
            {
                value: "business",
                label: "비즈니스",
            },
            {
                value: "performance_marketing",
                label: "퍼포먼스 마케팅",
            },
            {
                value: "crm_marketing",
                label: "CRM 마케팅",
            },
            {
                value: "rd",
                label: "R&D",
            },
            {
                value: "ml_dl",
                label: "ML&DL",
            },
        ],
    },
    {
        title: "데이터 출처",
        items: [
            {
                value: "public_data",
                label: "공공데이터",
            },
            {
                value: "company_data",
                label: "자사 데이터",
            },
            {
                value: "log_data",
                label: "로그 데이터",
            },
            {
                value: "lifestyle_data",
                label: "생활형 데이터",
            },
            {
                value: "web_collection_data",
                label: "웹수집 데이터",
            },
        ],
    },
    {
        title: "작성자 유형",
        items: [
            {
                value: "beginner",
                label: "초심자",
            },
            {
                value: "practitioner",
                label: "실무자",
            },
            {
                value: "expert",
                label: "전문가",
            },
            {
                value: "gpt_analysis",
                label: "GPT 기반 분석글",
            },
        ],
    },
];

export default function Filter() {
    const onChange = (value: string, checked: boolean) => {
        console.log(value, checked);
    };

    return (
        <div className="w-[200px] shadow-filter p-4 rounded-[10px]">
            {filterItems.map((item, idx) => {
                return (
                    <div key={item.title}>
                        <FilterItems items={item} onChange={onChange} />
                        {idx !== filterItems.length - 1 && <div className="w-full h-[1px] bg-n200 mt-[30px] mb-5"></div>}
                    </div>
                );
            })}
        </div>
    );
}

const FilterItems = ({ items, onChange: onChangeProps }: { items: FilterItem; onChange: (value: string, checked: boolean) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemList, setItemList] = useState(
        items.items.map((item) => {
            return {
                ...item,
                checked: false,
            };
        })
    );

    const onChange = (value: string, checked: boolean) => {
        setItemList(itemList.map((item) => (item.value === value ? { ...item, checked } : item)));
        onChangeProps(value, checked);
    };

    return (
        <div>
            <div className="flex items-center justify-between cursor-pointer  text-base leading-[26px] font-bold mb-4" onClick={() => setIsOpen(!isOpen)}>
                {items.title}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${isOpen ? 0 : -180}deg)`, transition: "transform 0.2s" }}>
                    <path
                        d="M13.3538 6.35378L8.35378 11.3538C8.30735 11.4003 8.2522 11.4372 8.1915 11.4623C8.13081 11.4875 8.06574 11.5004 8.00003 11.5004C7.93433 11.5004 7.86926 11.4875 7.80856 11.4623C7.74786 11.4372 7.69272 11.4003 7.64628 11.3538L2.64628 6.35378C2.55246 6.25996 2.49976 6.13272 2.49976 6.00003C2.49976 5.86735 2.55246 5.7401 2.64628 5.64628C2.7401 5.55246 2.86735 5.49976 3.00003 5.49976C3.13272 5.49976 3.25996 5.55246 3.35378 5.64628L8.00003 10.2932L12.6463 5.64628C12.6927 5.59983 12.7479 5.56298 12.8086 5.53784C12.8693 5.5127 12.9343 5.49976 13 5.49976C13.0657 5.49976 13.1308 5.5127 13.1915 5.53784C13.2522 5.56298 13.3073 5.59983 13.3538 5.64628C13.4002 5.69274 13.4371 5.74789 13.4622 5.80859C13.4874 5.86928 13.5003 5.93434 13.5003 6.00003C13.5003 6.06573 13.4874 6.13079 13.4622 6.19148C13.4371 6.25218 13.4002 6.30733 13.3538 6.35378Z"
                        fill="#8F95B2"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="flex flex-col gap-2">
                    {itemList.map((item) => (
                        <Checkbox key={item.value} value={item.value} label={item.label} checked={item.checked} onClick={onChange} />
                    ))}
                </div>
            )}
        </div>
    );
};
