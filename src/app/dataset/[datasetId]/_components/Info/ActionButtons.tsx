"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDatasetDownloadApi } from "../../_apis/apis";

export default function ActionButtons() {
    const [isClickedDownload, setIsClickedDownload] = useState(false);
    const { datasetId } = useParams();
    const datasetIdNumber = datasetId ? parseInt(datasetId as string, 10) : undefined;

    const { data: downloadData } = useQuery({
        queryKey: ["datasetDownload", datasetIdNumber],
        queryFn: getDatasetDownloadApi,
        enabled: isClickedDownload && !!datasetIdNumber,
    });

    useEffect(() => {
        if (downloadData) {
            window.open(downloadData.data.preSignedUrl, "_blank");
            setIsClickedDownload(false);
        }
    }, [downloadData]);

    return (
        <div className="flex-shrink-0 ml-6">
            <button
                className="
                    bg-gradient-to-r from-blue-500 to-blue-600 
                    text-white px-8 py-4 rounded-xl 
                    hover:from-blue-600 hover:to-blue-700 
                    transform hover:shadow-lg
                    transition-all duration-200 ease-in-out
                    font-semibold text-lg
                    shadow-md
                    flex items-center gap-2
                "
                onClick={() => setIsClickedDownload(true)}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                다운로드
            </button>
        </div>
    );
}
