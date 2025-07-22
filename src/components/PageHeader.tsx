"use client";

import { usePathname } from "next/navigation";

const pageHeaderList = [
    {
        path: "/project/list",
        title: "프로젝트 탐색",
        description: "데이터 분석 전문가들의 실제 프로젝트를 살펴보고, 피드백을 통해 함께 성장하세요",
    },
    {
        path: "/project/1",
        title: "프로젝트 탐색",
        description: "데이터 분석 전문가들의 실제 프로젝트를 살펴보고, 피드백을 통해 함께 성장하세요",
    },
];

export default function PageHeader() {
    const pathname = usePathname();
    const currentPage = pageHeaderList.find((item) => item.path === pathname);

    return (
        <div className="w-full h-[240px] bg-primary flex justify-center items-center">
            {currentPage && (
                <div className="w-full text-white text-center">
                    <div className="text-h4 mb-1">{currentPage.title}</div>
                    <div className="text-sub1">{currentPage.description}</div>
                </div>
            )}
        </div>
    );
}
