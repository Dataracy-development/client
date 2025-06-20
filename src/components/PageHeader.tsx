"use client";

import { usePathname } from "next/navigation";

const pageHeaderList = [
    {
        path: "/project/list",
        title: "프로젝트 탐색",
        description: "데이터 분석 전문가들의 실제 프로젝트를 살펴보고, 피드백을 통해 함께 성장하세요",
    },
];

export default function PageHeader() {
    const pathname = usePathname();
    const currentPage = pageHeaderList.find((item) => item.path === pathname);

    return (
        <div className="w-full h-[190px] banner flex justify-center items-center">
            {currentPage && (
                <div className="w-full text-white text-center">
                    <div className="font-nsKR font-bold text-[32px] leading-[48px] mb-[1px]">{currentPage.title}</div>
                    <div className="font-normal text-base leading-[26px]">{currentPage.description}</div>
                </div>
            )}
        </div>
    );
}
