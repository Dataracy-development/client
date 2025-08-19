import { BaseResponse } from "@/types/apiTypes";
import { Dataset } from "@/types/commonTypes";
import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";

// 데이터셋 상세 조회
interface GetDatasetApiResponse extends BaseResponse {
    data: Dataset;
}

export const getDatasetApi: QueryFunction<Dataset, [_1: string, datasetId: number]> = async ({ queryKey }) => {
    try {
        const [, datasetId] = queryKey;
        const res = (await Apis.get(`/datasets/${datasetId}`)) as GetDatasetApiResponse;

        if (res.httpStatus === 200) return res.data;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getDatasetApi error", err);
        throw err;
    }
};
