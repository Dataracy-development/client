export interface BaseResponse {
    httpStatus: number;
    code: string;
    message: string;
}

export interface DatasetType {
    id: number;
    title: string;
    description: string;
    uploadDate: string;
    fileSize: string;
    actualFileSize: string;
    uploader: string;
    category: string;
    subcategory: string;
}
