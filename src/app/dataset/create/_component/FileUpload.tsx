"use client";

import { useRef, useState } from "react";
import { useCreateDatasetStore } from "../store/createDatasetStore";

export default function FileUpload() {
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
        const allowedTypes = ["text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/json", "text/plain"];
        const allowedExtensions = [".csv", ".xlsx", ".json", ".txt"];
        const fileName = file.name.toLowerCase();

        if (file.size > 100 * 1024 * 1024) {
            alert("100MB 이하의 파일만 업로드 가능합니다.");
            return false;
        }

        if (allowedTypes.includes(file.type) || allowedExtensions.some((ext) => fileName.endsWith(ext))) {
            return true;
        }

        alert("CSV, XLSX, JSON, TXT 파일만 업로드 가능합니다.");
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
                setFiles({ ...storeFiles, dataFile: file });
            }
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (validateFile(file)) {
                setSelectedFile(file);
                setFiles({ ...storeFiles, dataFile: file });
            }
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <div className="text-base leading-[26px] font-medium text-[#333] mb-3">
                데이터 파일&nbsp;<span className="text-red-500">*</span>
            </div>

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
                                setFiles({ ...storeFiles, dataFile: null });
                            }}
                        >
                            파일 제거
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-base font-medium text-gray-800 mb-2">파일을 드래그하거나 클릭하여 업로드</div>
                        <div className="text-sm text-gray-500">CSV, XLSX, JSON, TXT (최대 100MB)</div>
                    </>
                )}
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.xlsx,.json,.txt,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/json,text/plain"
                onChange={handleFileSelect}
                className="hidden"
            />

            <p className="mt-4 text-sm text-gray-600">• 개인정보가 포함된 데이터는 업로드하지 마세요</p>
        </div>
    );
}
