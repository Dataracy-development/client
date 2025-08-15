"use client";

import { usePathname } from "next/navigation";

const pageHeaderList = [
    {
        path: "/project/list",
        title: "프로젝트 탐색",
        description: "데이터 분석 전문가들의 실제 프로젝트를 살펴보고, 피드백을 통해 함께 성장하세요",
    },
    {
        path: "/project/[projectId]",
        title: "프로젝트 탐색",
        description: "데이터 분석 전문가들의 실제 프로젝트를 살펴보고, 피드백을 통해 함께 성장하세요",
    },
    {
        path: "/project/create",
        title: "프로젝트 작성",
        description: "여러분의 프로젝트를 공유하고, 피드백을 통해 함께 성장하세요!",
    },
    {
        path: "/dataset/list",
        title: "데이터셋 탐색",
        description: "다양한 분석 주제의 데이터를 살펴보고 직접 프로젝트에 활용해보세요!",
    },
    {
        path: "/dataset/[datasetId]",
        title: "데이터셋 탐색",
        description: "데이터셋 상세 페이지입니다. 뭐라 적어야할까요?",
    },
    {
        path: "/dataset/create",
        title: "데이터셋 작성",
        description: "데이터셋을 작성하고 공유하세요!",
    },
];

export default function PageHeader() {
    const pathname = usePathname();

    // 동적 경로 매칭을 위한 함수
    const findMatchingPage = (pathname: string) => {
        return pageHeaderList.find((item) => {
            if (item.path === pathname) {
                return true;
            }
            // 동적 경로 매칭: /project/[projectId] 패턴
            if (item.path === "/project/[projectId]") {
                const projectIdPattern = /^\/project\/\d+$/;
                return projectIdPattern.test(pathname);
            }
            if (item.path === "/dataset/[datasetId]") {
                const datasetIdPattern = /^\/dataset\/\d+$/;
                return datasetIdPattern.test(pathname);
            }
            return false;
        });
    };

    const currentPage = findMatchingPage(pathname);

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
