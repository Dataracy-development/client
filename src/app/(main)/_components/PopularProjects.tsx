"use client";

import Button from "@/components/Button";
import { Project } from "@/types/commonTypes";
import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

export default function PopularProjects({ data }: { data: Project[] }) {
    const router = useRouter();

    return (
        <div className="max-w-[1200px] w-full mx-auto">
            <div className="text-h3 mb-2.5 text-center">인기 프로젝트</div>
            <div className="text-sub1 text-center">데이터러시의 인기 프로젝트를 살펴보고 직접 참여하세요</div>
            {data && data.length > 0 ? (
                <div className="grid grid-cols-3 gap-5 gap-y-[21.5px] mt-10">
                    {data.map((v) => {
                        return <ProjectCard key={v.id} data={v} />;
                    })}
                </div>
            ) : (
                <div className="mt-10 text-center text-sub2 text-n600">프로젝트가 없습니다.</div>
            )}

            <div className="flex justify-center mt-10">
                <Button label="더 살펴보기" className="w-[140px] h-[60px] rounded-2xl" onClick={() => router.push("/project/list")} />
            </div>
        </div>
    );
}
