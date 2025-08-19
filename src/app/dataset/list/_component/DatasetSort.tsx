"use client";

import { useState } from "react";
import useDatasetListStore, { DatasetSortType } from "../store/datasetListStore";

export default function Sort() {
    const { setSortType, setPage } = useDatasetListStore();

    const [sortItems, setSortItems] = useState<{ label: string; value: DatasetSortType; isActive: boolean }[]>([
        {
            label: "최신순",
            value: "LATEST",
            isActive: true,
        },
        {
            label: "오래된 순",
            value: "OLDEST",
            isActive: false,
        },
        {
            label: "다운로드 수",
            value: "DOWNLOAD",
            isActive: false,
        },
        {
            label: "활용 수",
            value: "UTILIZE",
            isActive: false,
        },
    ]);

    const onClick = (value: DatasetSortType) => {
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
