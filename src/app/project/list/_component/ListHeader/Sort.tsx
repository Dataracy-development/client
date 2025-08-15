"use client";

import { useState } from "react";
import useProjectListStore, { SortType } from "../../store/projectListStore";

export default function Sort() {
    const { setSortType, setPage } = useProjectListStore();

    const [sortItems, setSortItems] = useState<{ label: string; value: SortType; isActive: boolean }[]>([
        {
            label: "최신순",
            value: "LATEST",
            isActive: true,
        },
        {
            label: "추천순",
            value: "MOST_LIKED",
            isActive: false,
        },
        {
            label: "조회순",
            value: "MOST_VIEWED",
            isActive: false,
        },
        {
            label: "피드백 많은 순",
            value: "MOST_COMMENTED",
            isActive: false,
        },
        {
            label: "피드백 적은 순",
            value: "LEAST_COMMENTED",
            isActive: false,
        },
        {
            label: "오래된 순",
            value: "OLDEST",
            isActive: false,
        },
    ]);

    const onClick = (value: SortType) => {
        setSortItems(sortItems.map((item) => ({ ...item, isActive: item.value === value })));
        setPage(1);
        setSortType(value);
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
