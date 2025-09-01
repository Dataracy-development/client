"use client";

import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";

// SSR 비활성화된 Viewer 컴포넌트
const ToastViewer = dynamic(() => import("@/components/Editor/ToastViewerWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

export default function AnalysisGuide({ data }: { data: string }) {
    return (
        <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <h2 className="text-xl font-semibold text-gray-900">분석 가이드</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                    <ToastViewer content={data} />
                </div>
            </div>
        </div>
    );
}
