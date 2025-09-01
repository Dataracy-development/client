import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { getOthersInfoApi } from "../../_apis/apis";

interface Project {
    id: number;
    title: string;
    content: string;
    projectThumbnailUrl: string;
    topicLabel: string;
    authorLevelLabel: string;
    commentCount: number;
    likeCount: number;
    viewCount: number;
    createdAt: string;
}

interface Dataset {
    id: number;
    title: string;
    topicLabel: string;
    dataTypeLabel: string;
    startDate: string;
    endDate: string;
    dataThumbnailUrl: string;
    downloadCount: number;
    sizeBytes: number;
    rowCount: number;
    columnCount: number;
    createdAt: string;
    countConnectedProjects: number;
}

interface UserInfo {
    id: number;
    nickname: string;
    authorLevelLabel: string;
    occupationLabel: string;
    profileImageUrl: string;
    introductionText: string;
    projects: {
        content: Project[];
        totalElements: number;
        totalPages: number;
    };
    datasets: {
        content: Dataset[];
        totalElements: number;
        totalPages: number;
    };
}

export default function ProfileModal({ userId, onClose }: { userId: number; onClose: () => void }) {
    const router = useRouter();
    const params = useSearchParams();
    const datasetId = params.get("datasetId");

    const [activeTab, setActiveTab] = useState<"projects" | "datasets">("projects");

    const { data, isPending, isError } = useQuery({
        queryKey: ["othersInfo", userId],
        queryFn: getOthersInfoApi,
    });

    if (isPending) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">로딩 중...</p>
                </div>
            </div>
        );
    }

    if (isError || !data?.data) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6">
                    <p className="text-red-600">사용자 정보를 불러올 수 없습니다.</p>
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        닫기
                    </button>
                </div>
            </div>
        );
    }

    const userInfo: UserInfo = data.data;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("ko-KR");
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style={{ marginTop: "0px", marginBottom: "0px" }}>
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* 헤더 */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold">사용자 프로필</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
                        ×
                    </button>
                </div>

                {/* 프로필 정보 */}
                <div className="p-6 border-b">
                    <div className="flex items-start space-x-4">
                        <img src={userInfo.profileImageUrl} alt="프로필 이미지" className="w-20 h-20 rounded-full object-cover" />
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-lg font-semibold">{userInfo.nickname}</h3>
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{userInfo.authorLevelLabel}</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">{userInfo.occupationLabel}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{userInfo.introductionText}</p>
                        </div>
                    </div>
                </div>

                {/* 탭 네비게이션 */}
                <div className="flex border-b">
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "projects" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        프로젝트 ({userInfo.projects.totalElements})
                    </button>
                    <button
                        onClick={() => setActiveTab("datasets")}
                        className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === "datasets" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        데이터셋 ({userInfo.datasets.totalElements})
                    </button>
                </div>

                {/* 콘텐츠 영역 */}
                <div className="p-6">
                    {activeTab === "projects" && (
                        <div className="space-y-4">
                            {userInfo.projects.content.map((project) => (
                                <div key={project.id} className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => router.push(`/project/${project.id}`)}>
                                    <div className="flex space-x-4">
                                        <img src={project.projectThumbnailUrl} alt="프로젝트 썸네일" className="w-16 h-16 rounded object-cover" />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{project.content}</p>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                <span className="px-2 py-1 bg-gray-100 rounded">{project.topicLabel}</span>
                                                <span>댓글 {project.commentCount}</span>
                                                <span>좋아요 {project.likeCount}</span>
                                                <span>조회 {project.viewCount}</span>
                                                <span>{formatDate(project.createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "datasets" && (
                        <div className="space-y-4">
                            {userInfo.datasets.content.map((dataset) => (
                                <div
                                    key={dataset.id}
                                    className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                                    onClick={() => {
                                        if (datasetId && datasetId !== dataset.id.toString()) {
                                            router.push(`/dataset/${dataset.id}`);
                                        } else {
                                            onClose();
                                        }
                                    }}
                                >
                                    <div className="flex space-x-4">
                                        <img src={dataset.dataThumbnailUrl} alt="데이터셋 썸네일" className="w-16 h-16 rounded object-cover" />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-1">{dataset.title}</h4>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                                                <span className="px-2 py-1 bg-gray-100 rounded">{dataset.topicLabel}</span>
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">{dataset.dataTypeLabel}</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                                                <div>
                                                    <span className="font-medium">기간:</span> {formatDate(dataset.startDate)} ~ {formatDate(dataset.endDate)}
                                                </div>
                                                <div>
                                                    <span className="font-medium">크기:</span> {formatFileSize(dataset.sizeBytes)}
                                                </div>
                                                <div>
                                                    <span className="font-medium">행/열:</span> {dataset.rowCount}행 × {dataset.columnCount}열
                                                </div>
                                                <div>
                                                    <span className="font-medium">다운로드:</span> {dataset.downloadCount}회
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                                                <span>연결된 프로젝트: {dataset.countConnectedProjects}개</span>
                                                <span>{formatDate(dataset.createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
