"use client";

import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useCreateDatasetStore } from "../store/createDatasetStore";

const ToastEditor = dynamic(() => import("@/components/Editor/ToastEditorWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

export default function AnalysisGuide() {
    const editorRef = useRef<any>(null);
    const { formData, setFormData, setFormDataError, formDataErrors } = useCreateDatasetStore();

    return (
        <div className="flex flex-col gap-[30px]">
            {/* 분석 가이드 작성 */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    분석 가이드 작성&nbsp;<span className="text-red-500">*</span>
                </h2>
                <p className="text-gray-600 mb-4">업로드하는 데이터에 대한 분석 방향과 활용 방법을 안내해주세요</p>

                <ToastEditor
                    editorRef={editorRef}
                    placeholder="분석 가이드를 작성해주세요. 예시:
• 어떤 분석이 가능한지 설명해주세요
• 추천하는 분석 기법이나 도구를 안내해주세요
• 데이터 특성과 주의사항을 명시해주세요"
                    initialValue={formData.analysisGuide}
                    onChange={(value) => {
                        setFormData("analysisGuide", value);
                        setFormDataError("analysisGuide", "");
                    }}
                    isErr={!!formDataErrors.analysisGuide}
                    errMsg={formDataErrors.analysisGuide}
                />
            </div>
        </div>
    );
}
