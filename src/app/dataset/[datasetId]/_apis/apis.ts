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
        console.log("res:::", res);

        if (res.httpStatus === 200) return res.data;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getDatasetApi error", err);
        throw err;
    }
};

// 활용한 프로젝트들 조회
interface UtilizeProject {
    id: number;
    title: string;
    creatorName: string;
    topicLabel: string;
    commentCount: number;
    likeCount: number;
    viewCount: number;
    createdAt: string;
}
interface GetUtilizeProjectsApiResponse extends BaseResponse {
    data: {
        content: UtilizeProject[];
        totalElements: number;
        [key: string]: any;
    };
}

export const getUtilizeProjectsApi: QueryFunction<GetUtilizeProjectsApiResponse, [_1: string, datasetId: number, page: number]> = async ({ queryKey }) => {
    try {
        const [, datasetId, page] = queryKey;
        const res = (await Apis.get(`/projects/connected-to-dataset`, {
            params: {
                dataId: datasetId,
                page: page - 1,
                size: 5,
            },
        })) as GetUtilizeProjectsApiResponse;

        if (res.httpStatus === 200) return res;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getUtilizeProjectsApi error", err);
        throw err;
    }
};

// 데이터셋 다운로드
interface GetDatasetDownloadApiResponse extends BaseResponse {
    data: {
        preSignedUrl: string;
    };
}

export const getDatasetDownloadApi: QueryFunction<GetDatasetDownloadApiResponse, [_1: string, datasetId: number]> = async ({ queryKey }) => {
    try {
        const [, datasetId] = queryKey;
        const res = (await Apis.get(`/datasets/${datasetId}/download`)) as GetDatasetDownloadApiResponse;

        if (res.httpStatus === 200) return res;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getDatasetDownloadApi error", err);
        throw err;
    }
};

// 사용자 정보 조회
interface GetOthersInfoApiResponse extends BaseResponse {
    data: any;
}
export const getOthersInfoApi: QueryFunction<GetOthersInfoApiResponse, [_1: string, userId: number]> = async ({ queryKey }) => {
    try {
        const [, userId] = queryKey;
        const res = (await Apis.get(`/users/${userId}`)) as GetOthersInfoApiResponse;
        return res;
    } catch (err) {
        console.error("getOthersInfoApi error", err);
        throw err;
    }
};
