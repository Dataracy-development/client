import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";
import qs from "qs";
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
        sort: string[];
    };
}

// analysisPurposeLabel: "시각화 및 리포팅";
// authorLevelLabel: "전문가";
// childProjects: [];
// commentCount: 0;
// content: "지금 33데이터 출처에 대해서 ~~.";
// createdAt: "2025-08-06T08:51:57.311477";
// dataSourceLabel: "로그 데이터";
// fileUrl: "https://dataracy-bucket.s3.ap-northeast-2.amazonaws.com/default/default_img.jpg";
// id: 5;
// likeCount: 0;
// title: "프로젝트명3";
// topicLabel: "백엔드";
// username: "주니";
// viewCount: 0;
export interface Project {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    dataSourceLabel: string;
    fileUrl: string;
    likeCount: number;
    topicLabel: string;
    username: string;
    viewCount: number;
    analysisPurposeLabel: string;
    authorLevelLabel: string;
    childProjects: any[];
    commentCount: number;
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
        const queryString = qs.stringify(
            {
                webRequest,
                pagable,
            },
            { allowDots: true }
        );

        return await Apis.get(`/projects/filter?${queryString}`);
    } catch (error) {
        console.error("프로젝트 검색 중 오류 발생:", error);
        throw error;
    }
};
