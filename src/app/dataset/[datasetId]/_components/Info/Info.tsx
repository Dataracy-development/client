"use client";

import { Dataset } from "@/types/commonTypes";
import { bytesToKB } from "@/utils/utils";
import ActionButtons from "./ActionButtons";
import AnalysisGuide from "./AnalysisGuide";
import DatasetDescription from "./DatasetDescription";
import UtilizeProjects from "./UtilizeProjects";

interface InfoProps {
    data: Dataset;
}

export default function Info({ data }: InfoProps) {
    return (
        <div className="flex-1 max-w-4xl">
            {/* 데이터셋 제목 및 설명 */}
            <div className="mb-12">
                <div className="flex justify-between items-start mb-8">
                    <div className="flex-1 pr-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{data.title}</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>
                    </div>

                    {/* 액션 버튼 */}
                    <ActionButtons />
                </div>

                {/* 주요 정보 */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{data.downloadCount}</div>
                            <div className="text-sm text-gray-600">다운로드</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">{data.columnCount}</div>
                            <div className="text-sm text-gray-600">컬럼</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">{data.rowCount}</div>
                            <div className="text-sm text-gray-600">행</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-1">{bytesToKB(data.sizeBytes)}</div>
                            <div className="text-sm text-gray-600">크기</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600 mb-1">{data.dataTypeLabel}</div>
                            <div className="text-sm text-gray-600">형식</div>
                        </div>
                    </div>
                </div>

                {/* 메타데이터 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <h2 className="text-xl font-semibold text-gray-900">상세 정보</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">업로드 날짜</span>
                            <span className="text-gray-900 font-medium">{data.createdAt.slice(0, 10)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">업로더</span>
                            <span className="text-gray-900 font-medium">{data.creatorName}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 데이터셋 설명 */}
            <DatasetDescription data={data.description} />

            {/* 분석 가이드 */}
            <AnalysisGuide data={data.analysisGuide} />

            {/* 이 데이터를 활용한 프로젝트 */}
            <UtilizeProjects />
        </div>
    );
}
