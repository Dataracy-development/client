"use client";

import PageHeader from "@/components/PageHeader";
import Spinner from "@/components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getProjectApi } from "./_apis/apis";
import Info from "./_components/Info/Info";
import Sidebar from "./_components/SideBar/Sidebar";

export default function ProjectPage() {
    const { projectId } = useParams();
    const projectIdNumber = projectId ? parseInt(projectId as string, 10) : undefined;

    const { data, isPending, isError } = useQuery({
        queryKey: ["project", projectIdNumber],
        queryFn: getProjectApi,
        enabled: !!projectIdNumber,
    });

    console.log(data);

    if (isPending) return <Spinner />;
    if (isError) return <div>Error</div>;
    if (!data) return null;
    return (
        <div className="pb-[130px]">
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-[10px] pt-[55px] flex gap-10">
                <Info data={data} />
                <Sidebar data={data} />
            </section>
        </div>
    );
}
