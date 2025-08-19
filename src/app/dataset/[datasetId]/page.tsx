"use client";

import PageHeader from "@/components/PageHeader";
import Spinner from "@/components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getDatasetApi } from "./_apis/apis";
import Info from "./_components/Info/Info";
import Sidebar from "./_components/SideBar/Sidebar";

export default function DatasetPage() {
    const { datasetId } = useParams();
    const datasetIdNumber = datasetId ? parseInt(datasetId as string, 10) : undefined;

    const { data, isPending, isError } = useQuery({
        queryKey: ["dataset", datasetIdNumber],
        queryFn: getDatasetApi,
        enabled: !!datasetIdNumber,
    });

    if (isPending) return <Spinner />;
    if (isError) return <div>Error</div>;
    if (!data) return null;

    return (
        <div className="pb-[130px]">
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-[10px] pt-[35px] flex gap-10">
                <Info data={data} />
                <Sidebar data={data} />
            </section>
        </div>
    );
}
