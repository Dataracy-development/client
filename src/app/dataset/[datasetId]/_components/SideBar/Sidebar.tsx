"use client";

import { DatasetType } from "@/types/apiTypes";

interface SidebarProps {
    data: DatasetType;
}

export default function Sidebar({ data }: SidebarProps) {
    return (
        <div className="w-80 space-y-6">
            {/* 데이터 미리보기 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">데이터 미리보기</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-2 text-gray-600">customer_Id</th>
                                <th className="text-left py-2 text-gray-600">order_date</th>
                                <th className="text-left py-2 text-gray-600">amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 text-gray-900">C001</td>
                                <td className="py-2 text-gray-900">2024-01-15</td>
                                <td className="py-2 text-gray-900">89,500</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 text-gray-900">C002</td>
                                <td className="py-2 text-gray-900">2024-01-15</td>
                                <td className="py-2 text-gray-900">127,000</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 text-gray-900">C003</td>
                                <td className="py-2 text-gray-900">2024-01-16</td>
                                <td className="py-2 text-gray-900">45,800</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-gray-900">C004</td>
                                <td className="py-2 text-gray-900">2024-01-16</td>
                                <td className="py-2 text-gray-900">203,900</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    전체 데이터 보기
                </button>
            </div>

            {/* 주요 통계 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">주요 통계</h3>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-600">평균 거래금액:</span>
                        <span className="text-gray-900 font-medium">85,400원</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">고유 고객수:</span>
                        <span className="text-gray-900 font-medium">45,678명</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">총 거래건수:</span>
                        <span className="text-gray-900 font-medium">1,234,567건</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">평균 월 성장률:</span>
                        <span className="text-gray-900 font-medium">12.3%</span>
                    </div>
                </div>
            </div>

            {/* 함께 분석할 수 있는 데이터 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">함께 분석할 수 있는 데이터</h3>
                <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 mb-1">상품 카테고리 마스터 데이터</h4>
                        <p className="text-sm text-gray-600 mb-2">카테고리 분류 기반</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">다운로드 89</span>
                            <button className="text-blue-600 hover:text-blue-700 text-sm">보기</button>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 mb-1">고객 demographics 데이터</h4>
                        <p className="text-sm text-gray-600 mb-2">고객 인구통계 정보</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">다운로드 67</span>
                            <button className="text-blue-600 hover:text-blue-700 text-sm">보기</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 데이터 품질 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">데이터 품질</h3>
                <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">96</div>
                    <div className="text-lg font-medium text-green-700 mb-4">매우 우수</div>
                    <div className="space-y-2 text-left">
                        <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">완성도</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">정확성</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">일관성</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 유사 데이터셋 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">유사 데이터셋</h3>
                <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 mb-1">B2B 거래 데이터</h4>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">다운로드 158</span>
                            <span className="text-sm text-blue-600">87% 유사도</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">★★★★☆</span>
                            <span className="text-sm text-gray-600">4.5</span>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 mb-1">모바일 앱 구매 로그</h4>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">다운로드 89</span>
                            <span className="text-sm text-blue-600">72% 유사도</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">★★★★☆</span>
                            <span className="text-sm text-gray-600">4.2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 업로더 정보 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">업로더 정보</h3>
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                    <h4 className="font-medium text-gray-900 mb-1">데이터팀</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mb-3">
                        전문가
                    </span>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div>데이터 업로드 23개</div>
                        <div>평점 4.8</div>
                    </div>
                    <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm">
                        프로필 보기
                    </button>
                </div>
            </div>

            {/* 다운로드 & 활용 현황 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">다운로드 & 활용 현황</h3>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-600">총 다운로드:</span>
                        <span className="text-gray-900 font-medium">342회</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">이번 주:</span>
                        <span className="text-green-600 font-medium">+15회</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">평균 평점:</span>
                        <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">★★★★☆</span>
                            <span className="text-gray-900 font-medium">4.7/5.0</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">라이선스:</span>
                        <span className="text-gray-900 font-medium">CC BY 4.0</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">파일 형식:</span>
                        <span className="text-gray-900 font-medium">CSV, Excel 지원</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
