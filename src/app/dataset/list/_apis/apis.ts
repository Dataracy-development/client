import { Dataset } from "@/types/commonTypes";
import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";
import { DatasetSortType } from "../store/datasetListStore";

// 프로젝트 검색
export interface SearchDatasetsRequest {
    webRequest: {
        keyword: string;
        sortType: DatasetSortType;
        topicId: number;
        dataSourceId: number;
        dataTypeId: number;
        year: number;
    };
    pagable: {
        page: number;
        size: number;
    };
}

export interface SearchDatasetsResponse {
    httpStatus: string;
    message: string;
    code: string;
    data: {
        content: Dataset[];
        totalElements: number;
        [key: string]: any;
    };
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
                dataSourceId: webRequest.dataSourceId === 0 ? undefined : webRequest.dataSourceId,
                dataTypeId: webRequest.dataTypeId === 0 ? undefined : webRequest.dataTypeId,
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
