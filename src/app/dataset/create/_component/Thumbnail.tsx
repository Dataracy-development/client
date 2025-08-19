"use client";

import { useRef, useState } from "react";
import { useCreateDatasetStore } from "../store/createDatasetStore";

export default function Thumbnail() {
    const { files: storeFiles, setFiles } = useCreateDatasetStore();

    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const validateFile = (file: File) => {
        if (file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
            return true;
        }
        alert("5MB 이하의 PNG, JPG, JPEG 파일만 업로드 가능합니다.");
        return false;
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (validateFile(file)) {
                setSelectedFile(file);
                setFiles({ ...storeFiles, thumbnailFile: file });
            }
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (validateFile(file)) {
                setSelectedFile(file);
                setFiles({ ...storeFiles, thumbnailFile: file });
            }
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <div className="text-base leading-[26px] font-medium text-[#333] mb-3">썸네일 이미지</div>
            <div
                className={`w-full h-[200px] border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    isDragOver ? "border-[#3F2AFF] bg-[#F5F5F5]" : "border-[#3F2AFF] hover:border-[#3F2AFF]"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                {selectedFile ? (
                    <div className="text-center">
                        <div className="text-sm text-gray-600 mb-2">선택된 파일:</div>
                        <div className="text-base font-medium text-gray-800">{selectedFile.name}</div>
                        <button
                            className="mt-3 text-sm text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedFile(null);
                                setFiles({ ...storeFiles, thumbnailFile: null });
                            }}
                        >
                            파일 제거
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-base font-medium text-gray-800 mb-2">이미지를 드래그하거나 클릭하여 업로드</div>
                        <div className="text-sm text-gray-500">PNG, JPG, JPEG (최대 5MB)</div>
                    </>
                )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/png,image/jpg,image/jpeg" onChange={handleFileSelect} className="hidden" />
        </div>
    );
}
