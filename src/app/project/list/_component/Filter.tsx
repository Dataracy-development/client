"use client";

import Radio from "@/components/Radio";
import { useState } from "react";

interface FilterItem {
    category: string;
    items: {
        value: string;
        label: string;
    }[];
}

const filterItems: FilterItem[] = [
    {
        category: "도메인",
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
        category: "분석 목적",
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
        category: "데이터 출처",
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
        category: "작성자 유형",
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
    const onChange = (category: string, value: string, checked: boolean) => {
        console.log(category, value, checked);
    };

    return (
        <div className="w-[200px] shadow-filter p-4 rounded-[10px]">
            {filterItems.map((item, idx) => {
                return (
                    <div key={item.category}>
                        <FilterItems items={item} onChange={onChange} />
                        {idx !== filterItems.length - 1 && <div className="w-full h-[1px] bg-n200 mt-[30px] mb-5"></div>}
                    </div>
                );
            })}
        </div>
    );
}

const FilterItems = ({ items, onChange: onChangeProps }: { items: FilterItem; onChange: (category: string, value: string, checked: boolean) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemList, setItemList] = useState(items.items);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.checked);
        // setItemList(itemList.map((item) => (item.value === e.target.value ? { ...item, checked: true } : item)));
        onChangeProps(items.category, e.target.value, e.target.checked);
    };

    return (
        <div>
            <div className="flex items-center justify-between cursor-pointer text-sub1 mb-5" onClick={() => setIsOpen(!isOpen)}>
                {items.category}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${isOpen ? 0 : -180}deg)`, transition: "transform 0.2s" }}>
                    <path d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z" fill="#1D1B20" />
                </svg>
            </div>
            {isOpen && (
                <div className="flex flex-col gap-2">
                    {itemList.map((item) => (
                        <Radio key={item.value} value={item.value} name={items.category} label={item.label} onChange={onChange} />
                    ))}
                </div>
            )}
        </div>
    );
};
