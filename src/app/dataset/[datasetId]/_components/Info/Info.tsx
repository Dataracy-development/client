"use client";

import Spinner from "@/components/Spinner";
import { Dataset } from "@/types/commonTypes";
import dynamic from "next/dynamic";

interface InfoProps {
    data: Dataset;
}

// SSR 비활성화된 Viewer 컴포넌트
const ToastViewer = dynamic(() => import("@/components/Editor/ToastViewerWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

export default function Info({ data }: InfoProps) {
    return (
        <div className="flex-1">
            {/* 데이터셋 제목 및 설명 */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{data.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{data.description}</p>

                {/* 액션 버튼들 */}
                <div className="flex gap-3 mb-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">다운로드</button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">분석 시작</button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">즐겨찾기</button>
                </div>

                {/* 주요 정보 */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                        <span className="text-gray-500">업로드:</span>
                        <span className="ml-2 text-gray-900">{data.createdAt.slice(0, 10)}</span>
                    </div>
                    {/* <div>
                        <span className="text-gray-500">파일 크기:</span>
                        <span className="ml-2 text-gray-900">{data.fileSize}MB</span>
                    </div>
                    <div>
                        <span className="text-gray-500">실제 파일 크기:</span>
                        <span className="ml-2 text-gray-900">{data.fileSize}MB</span>
                    </div> */}
                    <div>
                        <span className="text-gray-500">업로더:</span>
                        <span className="ml-2 text-gray-900">{data.username}</span>
                    </div>
                </div>

                {/* 검증 상태 */}
                <div className="mb-8">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">검증완료</span>
                </div>
            </div>

            {/* 데이터셋 설명 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">데이터셋 설명</h2>
                <p className="text-gray-700 leading-relaxed">{data.description}</p>
            </div>

            {/* 분석 가이드 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">분석 가이드</h2>
                <ul className="space-y-3">
                    <ToastViewer content={data.analysisGuide} />
                </ul>
            </div>

            {/* 메타데이터 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">메타데이터</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between">
                        <span className="text-gray-600">컬럼수:</span>
                        <span className="text-gray-900 font-medium">{data.columnCount}개</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">행수:</span>
                        <span className="text-gray-900 font-medium">{data.rowCount}개</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">결측치:</span>
                        <span className="text-gray-900 font-medium">0.3% (4,500개)</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">중복 데이터:</span>
                        <span className="text-gray-900 font-medium">제거완료</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">개인정보:</span>
                        <span className="text-gray-900 font-medium">익명화 처리</span>
                    </div>
                </div>
            </div>

            {/* 이 데이터를 활용한 프로젝트 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">이 데이터를 활용한 프로젝트 (23개)</h2>
                <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">고객 세그멘테이션 분석</h3>
                        <p className="text-sm text-gray-600 mb-2">김데이터</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>조회 1.2k</span>
                            <span>피드백 24</span>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">상품 추천 시스템 구축</h3>
                        <p className="text-sm text-gray-600 mb-2">박분식</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>조회 856</span>
                            <span>피드백 18</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">+21개 프로젝트 더 보기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
