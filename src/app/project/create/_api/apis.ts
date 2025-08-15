import { BaseResponse } from "@/types/apiTypes";
import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";
import { SortType } from "../../list/store/projectListStore";
import { CreateProjectFormData } from "../store/createProjectStore";

// 프로젝트 생성
export interface CreateProjectRequest {
    thumbnailFile: File | null;
    webRequest: CreateProjectFormData;
}
export interface CreateProjectResponse extends BaseResponse {
    data: any;
}

export const createProjectApi = async (data: CreateProjectRequest): Promise<CreateProjectResponse> => {
    const response = await Apis.postAuth("/projects", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response;
};

// 데이터셋 검색
export interface SearchDatasetsRequest {
    webRequest: {
        keyword: string;
        sortType: SortType | null;
        topicId: number;
        analysisPurposeId: number;
        dataSourceId: number;
        year: number | null;
    };
    pagable: {
        page: number;
        size: number;
    };
}

export interface SearchDatasetsResponse extends BaseResponse {
    data: any;
}

export const onSearchDatasetsApi: QueryFunction<SearchDatasetsResponse, [_1: string, SearchDatasetsRequest]> = async ({ queryKey }) => {
    try {
        const [_, params] = queryKey;
        const { webRequest, pagable } = params;

        return await Apis.get(`/datasets/filter`, {
            params: {
                keyword: webRequest.keyword,
                sortType: webRequest.sortType,
                topicId: webRequest.topicId === 0 ? undefined : webRequest.topicId,
                analysisPurposeId: webRequest.analysisPurposeId === 0 ? undefined : webRequest.analysisPurposeId,
                dataSourceId: webRequest.dataSourceId === 0 ? undefined : webRequest.dataSourceId,
                year: webRequest.year === 0 ? undefined : webRequest.year,
                page: pagable.page - 1,
                size: pagable.size,
            },
        });
    } catch (error) {
        console.error("데이터셋 검색 중 오류 발생:", error);
        throw error;
    }
};
