"use client";

import PageHeader from "@/components/PageHeader";
import Spinner from "@/components/Spinner";
import { useParams } from "next/navigation";
import Info from "./_components/Info/Info";
import Sidebar from "./_components/SideBar/Sidebar";

// 임시 데이터 (실제로는 API에서 가져올 예정)
const mockDatasetData = {
    id: 1,
    title: "한국 이커머스 고객 거래 데이터 (2023-2024)",
    description: "온라인 쇼핑몰의 24개월간 고객 거래 이력 데이터",
    uploadDate: "2025.05.15",
    fileSize: "150만 행 × 18 컬럼",
    actualFileSize: "345MB",
    uploader: "데이터팀",
    category: "이커머스",
    subcategory: "고객 거래 데이터",
};

export default function DatasetPage() {
    const { datasetId } = useParams();
    const datasetIdNumber = datasetId ? parseInt(datasetId as string, 10) : undefined;

    // 실제 API 연동 시 사용할 쿼리
    // const { data, isPending, isError } = useQuery({
    //     queryKey: ["dataset", datasetIdNumber],
    //     queryFn: getDatasetApi,
    //     enabled: !!datasetIdNumber,
    // });

    // 임시로 mock 데이터 사용
    const data = mockDatasetData;
    const isPending = false;
    const isError = false;

    if (isPending) return <Spinner />;
    if (isError) return <div>Error</div>;
    if (!data) return null;

    return (
        <div className="pb-[130px]">
            <PageHeader />

            {/* Breadcrumb */}
            <div className="w-full max-w-[1200px] mx-auto px-[10px] pt-[20px]">
                <nav className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="hover:text-gray-700 cursor-pointer">데이터</span>
                    <span className="text-gray-400">/</span>
                    <span className="hover:text-gray-700 cursor-pointer">{data.category}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900 font-medium">{data.subcategory}</span>
                </nav>
            </div>

            <section className="w-full max-w-[1200px] mx-auto px-[10px] pt-[35px] flex gap-10">
                <Info data={data} />
                <Sidebar data={data} />
            </section>
        </div>
    );
}
