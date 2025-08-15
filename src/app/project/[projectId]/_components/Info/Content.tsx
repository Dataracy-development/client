"use client";

import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";

// SSR 비활성화된 Viewer 컴포넌트
const ToastViewer = dynamic(() => import("@/components/Editor/ToastViewerWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

export default function Content({ data }: { data: string }) {
    return (
        <div className="flex flex-col gap-12 mt-12">
            <ToastViewer content={data} />
        </div>
    );
}
