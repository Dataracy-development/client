"use client";

import { useState } from "react";

export default function Sort() {
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
            label: "댓글 많은 순",
            value: "feedback",
            isActive: false,
        },
    ]);

    const onClick = (value: string) => {
        setSortItems(sortItems.map((item) => ({ ...item, isActive: item.value === value })));
    };

    return (
        <div className="w-full flex flex-wrap gap-1 items-center">
            {sortItems.map((item) => (
                <div
                    key={item.value}
                    className={`w-fit h-[26px] px-2 text-caption leading-[26px] rounded-2xl cursor-pointer bg-n300 text-primary`}
                    onClick={() => {
                        onClick(item.value);
                    }}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
}
