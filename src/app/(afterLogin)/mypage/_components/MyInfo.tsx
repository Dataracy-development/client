"use client";

import { onGetDomainApi, onGetLevelApi, onGetOccupationApi, onGetVisitSourceApi } from "@/apis/referenceDataApis";
import Input from "@/components/Input";
import Selectbox from "@/components/Selectbox";
import Spinner from "@/components/Spinner";
import Textarea from "@/components/Textarea";
import { User } from "@/types/commonTypes";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { updateMyInfoApi } from "../_apis/apis";

interface MyInfoProps {
    user: User;
}
interface FormData {
    nickname: string;
    authorLevelId: number;
    occupationId: number;
    topicIds: number[];
    visitSourceId: number;
    introductionText: string;
}

export default function MyInfo({ user }: MyInfoProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nickname: user.nickname,
        authorLevelId: user.authorLevelId,
        occupationId: user.occupationId,
        topicIds: user.topicIds,
        visitSourceId: user.visitSourceId,
        introductionText: user.introductionText,
    });

    const queryClient = useQueryClient();

    // 옵션 조회
    const results = useQueries({
        queries: [
            {
                queryKey: ["level"],
                queryFn: onGetLevelApi,
            },
            {
                queryKey: ["domain"],
                queryFn: onGetDomainApi,
            },
            {
                queryKey: ["occupation"],
                queryFn: onGetOccupationApi,
            },
            {
                queryKey: ["visitSource"],
                queryFn: onGetVisitSourceApi,
            },
        ],
    });

    const updateMutation = useMutation({
        mutationFn: updateMyInfoApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["myInfo"] });
            setIsEditing(false);
            alert("정보가 성공적으로 수정되었습니다.");
        },
        onError: (error: AxiosError) => {
            console.error("Update failed:", error);
            alert((error.response as AxiosResponse).data.message);
        },
    });

    const handleInputChange = (field: keyof FormData, value: string | string[]) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSelectChange = (target: string, value: number | number[] | null) => {
        setFormData((prev) => ({
            ...prev,
            [target]: value,
        }));
    };

    const handleSave = () => {
        let request = new FormData();
        // request.append("thumbnailFile", thumbnailFile);
        request.append("webRequest", JSON.stringify(formData));

        updateMutation.mutate(request);
    };

    const handleCancel = () => {
        setFormData({
            nickname: user.nickname,
            authorLevelId: user.authorLevelId,
            occupationId: user.occupationId,
            topicIds: user.topicIds,
            visitSourceId: user.visitSourceId,
            introductionText: user.introductionText,
        });
        setIsEditing(false);
    };

    if (!user) return null;
    if (isEditing) {
        // 로딩 중이거나 데이터가 없으면 스피너 표시
        if (results[0].isPending || results[1].isPending || results[2].isPending || results[3].isPending) return <Spinner />;
        if (!results[0].data || !results[1].data || !results[2].data || !results[3].data) return null;

        return (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">내 정보 수정</h2>
                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            disabled={updateMutation.isPending}
                            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {updateMutation.isPending ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    저장 중...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    저장
                                </>
                            )}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="inline-flex items-center px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            취소
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">닉네임</label>
                            <Input
                                value={formData.nickname || ""}
                                onChange={(e) => handleInputChange("nickname", e.target.value)}
                                placeholder="닉네임을 입력하세요"
                                type="text"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">작성자 레벨</label>
                            <Selectbox
                                initialValue={user.authorLevelId.toString()}
                                placeholder="레벨을 선택해주세요"
                                options={results[0].data.data.authorLevels.map((item) => ({ value: item.id.toString(), label: item.label })) || []}
                                onChange={(value) => handleSelectChange("authorLevelId", parseInt(value, 10) || null)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">직무</label>
                            <Selectbox
                                initialValue={user.occupationId.toString()}
                                placeholder="직무를 선택해주세요"
                                options={results[2].data.data.occupations.map((item) => ({ value: item.id.toString(), label: item.label })) || []}
                                onChange={(value) => handleSelectChange("occupationId", parseInt(value, 10) || null)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">방문 경로</label>
                            <Selectbox
                                initialValue={user.visitSourceId.toString()}
                                placeholder="방문경로를 선택해주세요"
                                options={results[3].data.data.visitSources.map((item) => ({ value: item.id.toString(), label: item.label })) || []}
                                onChange={(value) => handleSelectChange("visitSourceId", parseInt(value, 10) || null)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">관심 도메인</label>
                        <Selectbox
                            placeholder="관심 도메인을 선택해주세요"
                            options={results[1].data.data.topics.map((item) => ({ value: item.id.toString(), label: item.label })) || []}
                            onChange={(value) =>
                                handleSelectChange(
                                    "topicIds",
                                    [results[1].data.data.topics.find((item) => item.value === value)?.id].filter(Boolean) as number[]
                                )
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">자기소개</label>
                        <Textarea
                            value={formData.introductionText || ""}
                            onChange={(e) => handleInputChange("introductionText", e.target.value)}
                            placeholder="자기소개를 입력하세요"
                            rows={4}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">내 정보</h2>
                <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                    정보 수정
                </button>
            </div>

            <div className="space-y-8">
                {/* 프로필 섹션 */}
                <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center space-x-6">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                                {user.profileImageUrl ? (
                                    <img src={user.profileImageUrl} alt="프로필" className="w-24 h-24 rounded-full object-cover" />
                                ) : (
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{user.nickname}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                                <span className="text-lg">{user.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 정보 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <label className="text-sm font-semibold text-gray-600">작성자 레벨</label>
                        </div>
                        <p className="text-lg font-medium text-gray-900">{user.authorLevelLabel || "-"}</p>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                    />
                                </svg>
                            </div>
                            <label className="text-sm font-semibold text-gray-600">직무</label>
                        </div>
                        <p className="text-lg font-medium text-gray-900">{user.occupationLabel || "-"}</p>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                </svg>
                            </div>
                            <label className="text-sm font-semibold text-gray-600">관심 도메인</label>
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                            {user.topicLabels && user.topicLabels.length > 0 ? user.topicLabels.join(", ") : "-"}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg>
                            </div>
                            <label className="text-sm font-semibold text-gray-600">방문 경로</label>
                        </div>
                        <p className="text-lg font-medium text-gray-900">{user.visitSourceLabel || "-"}</p>
                    </div>
                </div>

                {/* 자기소개 섹션 */}
                {user.introductionText && (
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </div>
                            <label className="text-lg font-semibold text-gray-700">자기소개</label>
                        </div>
                        <p className="text-gray-900 leading-relaxed">{user.introductionText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
