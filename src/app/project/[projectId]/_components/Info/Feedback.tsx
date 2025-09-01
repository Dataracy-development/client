"use client";

import Pagination from "@/components/Pagination";
import { ContainerSpinner } from "@/components/Spinner";
import { SendIcon } from "@/components/icons/icons";
import { useCreateMutation } from "@/hooks/mutations/hooks";
import { Comment } from "@/types/commonTypes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { KeyboardEvent, useState } from "react";
import { createProjectCommentApi, getProjectCommentsApi } from "../../_apis/apis";

export default function Feedback() {
    const queryClient = useQueryClient();
    const { projectId } = useParams();
    const projectIdNumber = projectId ? parseInt(projectId as string, 10) : undefined;

    const [page, setPage] = useState(0);
    const [message, setMessage] = useState("");

    const { data, isPending, isError } = useQuery({
        queryKey: ["projectComments", projectIdNumber, page],
        queryFn: getProjectCommentsApi,
    });

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const { mutate: createProjectComment } = useCreateMutation(createProjectCommentApi, "createProjectComment", {
        onSuccess: () => {
            setPage(0);
            queryClient.invalidateQueries({ queryKey: ["projectComments", projectIdNumber, 0] });
        },
    });

    const handleSendMessage = () => {
        if (message.trim()) {
            createProjectComment({ projectId: projectIdNumber, content: message });
            setMessage("");
        }
    };

    if (!data) return null;
    return (
        <div className="mt-12 pt-12 border-t border-n300">
            <div className="text-h6 mb-4">피드백</div>
            <div className="relative">
                <textarea
                    className="w-full h-[100px] border border-n400 rounded-[10px] p-3 pr-12 resize-none focus:outline-none font-inter text-sm leading-[22px] text-n900"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="absolute bottom-3 right-3 p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <SendIcon />
                </button>
            </div>

            <div className="flex flex-col gap-2 mt-5">
                {isPending && <ContainerSpinner overlay={false} />}
                {data.content.map((v: Comment) => {
                    return (
                        <div key={v.id} className="w-full flex items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-blue-100"></div>
                            <div className="flex-1">
                                <div className="font-inter text-sm leading-[22px] font-bold text-n900">{v.creatorName}</div>
                                <div className="font-inter text-xs leading-[20px] text-n900">{v.content}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {data.totalElements > 0 && (
                <div className="mt-5 flex justify-center">
                    <Pagination page={page + 1} viewPerPage={5} total={data.totalElements} onChange={(page) => setPage(page - 1)} />
                </div>
            )}
        </div>
    );
}
