"use client";

import Pagination from "@/components/Pagination";
import Spinner from "@/components/Spinner";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { getLikedProjectsApi } from "../_apis/apis";

export default function LikedProjects() {
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const { data, isPending, isError } = useQuery({
        queryKey: ["likedProjects", page],
        queryFn: () => getLikedProjectsApi(page, pageSize),
    });

    if (isPending) return <Spinner />;
    if (isError) return <div className="text-red-500">좋아요 한 프로젝트 목록을 불러오는데 실패했습니다.</div>;

    const projects = data?.data.content || [];
    const totalCount = data?.data.totalElements || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    if (projects.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">좋아요 한 프로젝트</h2>
                <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">아직 좋아요 한 프로젝트가 없습니다.</p>
                    <Link
                        href="/project/list"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        프로젝트 탐색하기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">좋아요 한 프로젝트</h2>
                <Link href="/project/list">
                    <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        더 많은 프로젝트 보기
                    </button>
                </Link>
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <Link key={project.id} href={`/project/${project.id}`} className="block">
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-200 group cursor-pointer">
                            <div className="flex items-start gap-4">
                                {project.projectThumbnailUrl && (
                                    <div className="flex-shrink-0">
                                        <img
                                            src={project.projectThumbnailUrl}
                                            alt="프로젝트 썸네일"
                                            className="w-20 h-20 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"
                                        />
                                    </div>
                                )}

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 truncate">{project.title}</h3>
                                                {project.isContinue && <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full shadow-sm">연속</span>}
                                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full shadow-sm">❤️ 좋아요</span>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <span>{project.creatorName}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{project.authorLevelLabel}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                        />
                                                    </svg>
                                                    <span>{project.topicLabel}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                    <span>{project.viewCount}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                        />
                                                    </svg>
                                                    <span>{project.likeCount}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                        />
                                                    </svg>
                                                    <span>{project.commentCount}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            </div>

                                            {project.content && <p className="text-sm text-gray-600 mt-3 line-clamp-2">{project.content}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                    <Pagination page={page} total={totalPages} viewPerPage={pageSize} onChange={setPage} />
                </div>
            )}
        </div>
    );
}
