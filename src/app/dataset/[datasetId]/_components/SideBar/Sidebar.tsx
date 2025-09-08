"use client";

import { Dataset } from "@/types/commonTypes";
import Image from "next/image";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

interface SidebarProps {
    data: Dataset;
}

export default function Sidebar({ data }: SidebarProps) {
    const previewJson = JSON.parse(data.previewJson);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    return (
        <div className="w-80 space-y-6">
            {/* 데이터 미리보기 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">데이터 미리보기</h3>
                {previewJson.length > 0 ? (
                    <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
                        <table className="w-full text-sm whitespace-nowrap">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    {Object.keys(previewJson[0]).map((key) => (
                                        <th className="text-left px-2 py-2 text-gray-600 whitespace-nowrap" key={key}>
                                            {key}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {previewJson.map((item: any, index: number) => {
                                    return (
                                        <tr className="border-b border-gray-100" key={index}>
                                            {Object.keys(item).map((key, index) => (
                                                <td className="px-2 py-2 text-gray-900 whitespace-nowrap" key={index}>
                                                    {item[key] ? item[key] : "-"}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>데이터가 없습니다.</div>
                )}
            </div>

            {/* 업로더 정보 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">업로더 정보</h3>
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3">
                        <Image src={data.userProfileImageUrl} alt="user profile" width={64} height={64} className="rounded-full object-cover" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{data.creatorName}</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mb-3">{data.authorLabel}</span>
                    <div className="space-y-2 text-sm text-gray-600">{data.userIntroductionText}</div>
                    <button className="w-fit mt-4 text-blue-600 hover:text-blue-700 text-sm" onClick={() => setIsProfileModalOpen(true)}>
                        프로필 보기
                    </button>
                </div>
            </div>

            {isProfileModalOpen && <ProfileModal userId={data.creatorId} onClose={() => setIsProfileModalOpen(false)} />}
        </div>
    );
}
