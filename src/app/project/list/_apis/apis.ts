import { Project } from "@/types/commonTypes";
import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";
import { SortType } from "../store/projectListStore";

// 프로젝트 검색
export interface SearchProjectsRequest {
    webRequest: {
        keyword: string;
        sortType: SortType;
        topicId: number;
        analysisPurposeId: number;
        dataSourceId: number;
        authorLevelId: number;
    };
    pagable: {
        page: number;
        size: number;
    };
}

export interface SearchProjectsResponse {
    httpStatus: string;
    message: string;
    code: string;
    data: {
        content: Project[];
        totalElements: number;
        [key: string]: any;
    };
}

export const onSearchProjectsApi: QueryFunction<SearchProjectsResponse, [_1: string, SearchProjectsRequest]> = async ({ queryKey }) => {
    try {
        const [_, params] = queryKey;
        const { webRequest, pagable } = params;

        return await Apis.get(`/projects/filter`, {
            params: {
                keyword: webRequest.keyword,
                sortType: webRequest.sortType,
                topicId: webRequest.topicId === 0 ? undefined : webRequest.topicId,
                analysisPurposeId: webRequest.analysisPurposeId === 0 ? undefined : webRequest.analysisPurposeId,
                dataSourceId: webRequest.dataSourceId === 0 ? undefined : webRequest.dataSourceId,
                authorLevelId: webRequest.authorLevelId === 0 ? undefined : webRequest.authorLevelId,
                page: pagable.page - 1,
                size: pagable.size,
            },
        });
    } catch (error) {
        console.error("프로젝트 검색 중 오류 발생:", error);
        throw error;
    }
};
