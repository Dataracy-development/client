"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { onSearchDatasetsApi } from "../_api/apis";
import { useCreateProjectStore } from "../store/createProjectStore";

interface SearchDataset {
    id: number;
    title: string;
    content: string;
    creatorName: string;
    projectThumbnailUrl: string | null;
    topicLabel: string;
    analysisPurposeLabel: string;
    dataSourceLabel: string;
    authorLevelLabel: string;
    commentCount: number;
    likeCount: number;
    viewCount: number;
    createdAt: string;
    childProjects: any[];
}

export default function Datasets() {
    const { formData, setField } = useCreateProjectStore();

    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDatasets, setSelectedDatasets] = useState<SearchDataset[]>([]);

    // 디바운싱을 위한 useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 300); // 300ms 딜레이

        return () => clearTimeout(timer);
    }, [searchValue]);

    const { data, isPending, isError } = useQuery({
        queryKey: [
            "getDatasets",
            {
                webRequest: {
                    keyword: debouncedSearchValue,
                    sortType: "LATEST",
                    topicId: 0,
                    analysisPurposeId: 0,
                    dataSourceId: 0,
                    year: 0,
                },
                pagable: {
                    page: 0,
                    size: 10,
                },
            },
        ],
        queryFn: onSearchDatasetsApi,
        enabled: debouncedSearchValue.trim().length > 0, // 검색어가 있을 때만 실행
    });

    // 검색어가 변경될 때 드롭다운 표시
    useEffect(() => {
        if (debouncedSearchValue.trim().length > 0) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }, [debouncedSearchValue]);

    const handleDatasetSelect = (dataset: SearchDataset) => {
        // 이미 선택된 데이터셋인지 확인
        const isAlreadySelected = selectedDatasets.some((d) => d.id === dataset.id);
        if (isAlreadySelected) {
            return; // 이미 선택된 경우 무시
        }

        const newSelectedDatasets = [...selectedDatasets, dataset];
        setSelectedDatasets(newSelectedDatasets);
        setSearchValue("");
        setDebouncedSearchValue("");
        setShowDropdown(false);

        // formData의 dataIds 업데이트
        const newDataIds = newSelectedDatasets.map((d) => d.id);
        setField("dataIds", newDataIds);
    };

    const handleDatasetRemove = (datasetId: number) => {
        const newSelectedDatasets = selectedDatasets.filter((d) => d.id !== datasetId);
        setSelectedDatasets(newSelectedDatasets);

        // formData의 dataIds 업데이트
        const newDataIds = newSelectedDatasets.map((d) => d.id);
        setField("dataIds", newDataIds);
    };

    const handleInputFocus = () => {
        if (debouncedSearchValue.trim().length > 0) {
            setShowDropdown(true);
        }
    };

    const handleInputBlur = () => {
        // 약간의 딜레이를 두어 클릭 이벤트가 처리될 수 있도록 함
        setTimeout(() => setShowDropdown(false), 200);
    };

    return (
        <div className="flex-1 relative">
            <div className="mb-2 text-sm font-semibold text-gray-700">데이터셋 검색</div>
            <div className="w-full h-11 flex gap-4 rounded-lg px-4 border border-n400">
                <input
                    className="flex-1 h-full border-none text-base font-inter focus:outline-none placeholder:text-[#757575] bg-white autofill:!bg-white"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="검색어를 입력하세요"
                />
                <div className="h-full flex flex-col justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path
                            d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {/* 드롭다운 */}
            {showDropdown && (
                <div className="absolute top-[72px] left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
                    {isPending ? (
                        <div className="p-4 text-center text-gray-500">검색 중...</div>
                    ) : isError ? (
                        <div className="p-4 text-center text-red-500">검색 중 오류가 발생했습니다.</div>
                    ) : data?.data?.content && (data.data.content as unknown as SearchDataset[]).length > 0 ? (
                        <div>
                            {(data.data.content as unknown as SearchDataset[]).map((dataset: SearchDataset) => {
                                const isSelected = selectedDatasets.some((d) => d.id === dataset.id);
                                return (
                                    <div
                                        key={dataset.id}
                                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${isSelected ? "bg-blue-50" : ""}`}
                                        onClick={() => handleDatasetSelect(dataset)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900 mb-1">{dataset.title}</div>
                                                <div className="text-sm text-gray-600 mb-2 line-clamp-2">{dataset.content}</div>
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span>작성자: {dataset.creatorName}</span>
                                                    <span>주제: {dataset.topicLabel}</span>
                                                    <span>목적: {dataset.analysisPurposeLabel}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                                    <span>데이터: {dataset.dataSourceLabel}</span>
                                                    <span>레벨: {dataset.authorLevelLabel}</span>
                                                    <span>조회수: {dataset.viewCount}</span>
                                                </div>
                                            </div>
                                            {isSelected && <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">선택됨</div>}
                                            {dataset.childProjects && dataset.childProjects.length > 0 && (
                                                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">연관 프로젝트 {dataset.childProjects.length}개</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="p-4 text-center text-gray-500">검색 결과가 없습니다.</div>
                    )}
                </div>
            )}

            <div className="text-sm text-gray-500 mt-2">데이터셋을 검색하고 추가할 수 있습니다</div>

            {/* 선택된 데이터셋들 표시 */}
            {selectedDatasets.length > 0 && (
                <div className="mt-4 space-y-3">
                    <div className="text-sm font-medium text-blue-900">선택된 데이터셋 ({selectedDatasets.length}개):</div>
                    {selectedDatasets.map((dataset) => (
                        <div key={dataset.id} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="text-base font-medium text-gray-900">{dataset.title}</div>
                                    <div className="text-sm text-gray-600 mt-1">{dataset.content}</div>
                                </div>
                                <button onClick={() => handleDatasetRemove(dataset.id)} className="ml-3 p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded transition-colors" type="button">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
