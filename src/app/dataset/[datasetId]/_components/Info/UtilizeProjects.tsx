"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { getUtilizeProjectsApi } from "../../_apis/apis";

export default function UtilizeProjects() {
    const { datasetId } = useParams();
    const router = useRouter();

    const datasetIdNumber = datasetId ? parseInt(datasetId as string, 10) : undefined;

    const [page, setPage] = useState(1);

    const { data: projects } = useQuery({
        queryKey: ["utilizeProjects", datasetIdNumber, page],
        queryFn: getUtilizeProjectsApi,
        enabled: !!datasetIdNumber,
    });

    console.log("projects:::", projects);

    if (!projects) return null;
    return (
        <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <h2 className="text-xl font-semibold text-gray-900">이 데이터를 활용한 프로젝트 ({projects.data.totalElements}개)</h2>
                </div>
                <div className="space-y-4">
                    {projects.data.content.length > 0 ? (
                        projects.data.content.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-between cursor-pointer hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                                onClick={() => {
                                    router.push(`/project/${project.id}`);
                                }}
                            >
                                <div className="flex items-start justify-between flex-1">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{project.creatorName}</p>
                                        <div className="flex items-center gap-6 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                                {project.viewCount}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                    />
                                                </svg>
                                                {project.commentCount}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-lg">이 데이터를 활용한 프로젝트가 없습니다.</p>
                            <p className="text-gray-400 text-sm mt-2">첫 번째 프로젝트를 만들어보세요!</p>
                        </div>
                    )}

                    {projects.data.totalElements > projects.data.content.length && (
                        <div className="text-center pt-4">
                            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                                <span>+{projects.data.totalElements - projects.data.content.length}개 프로젝트 더 보기</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
