import { BaseResponse } from "@/types/apiTypes";
import { Apis } from "@/utils/api";

// 데이터셋 생성
export interface CreateDatasetResponse extends BaseResponse {
    data: any;
}

export const createDatasetApi = async (data: FormData): Promise<CreateDatasetResponse> => {
    try {
        const response = await Apis.postAuth("/datasets", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response;
    } catch (error) {
        console.error("데이터셋 생성 중 오류 발생:", error);
        throw error;
    }
};
