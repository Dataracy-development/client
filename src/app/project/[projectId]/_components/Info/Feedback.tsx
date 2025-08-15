"use client";

import { ContainerSpinner } from "@/components/Spinner";
import { Comment } from "@/types/commonTypes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getProjectCommentsApi } from "../../_apis/apis";

export default function Feedback() {
    const { projectId } = useParams();
    const projectIdNumber = projectId ? parseInt(projectId as string, 10) : undefined;

    const [page, setPage] = useState(1);

    const { data, isPending, isError } = useQuery({
        queryKey: ["projectComments", projectIdNumber, page],
        queryFn: getProjectCommentsApi,
    });

    console.log("comments:::", data);

    return (
        <div className="mt-12 pt-12 border-t border-n300">
            <div className="text-h6 mb-4">피드백</div>
            <textarea className="w-full h-[100px] border border-n400 rounded-[10px] p-3 resize-none focus:outline-none font-inter text-sm leading-[22px] text-n900" placeholder="Type a message" />

            <div className="flex flex-col gap-2 mt-5">
                {isPending && <ContainerSpinner overlay={false} />}
                {data?.content.map((v: Comment) => {
                    return (
                        <div key={v.id} className="w-full flex items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-blue-100"></div>
                            <div className="flex-1">
                                <div className="font-inter text-sm leading-[22px] font-bold text-n900">{v.username}</div>
                                <div className="font-inter text-xs leading-[20px] text-n900">{v.content}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {page < data?.totalPages && (
                <div className="mt-5 w-full flex justify-center">
                    <button className="text-button" onClick={() => setPage(page + 1)}>
                        + 더보기
                    </button>
                </div>
            )}
        </div>
    );
}
