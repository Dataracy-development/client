import { BaseResponse } from "@/types/apiTypes";
import { Apis } from "@/utils/api";

// 레벨 조회 (전체 작성자 유형 리스트)
export interface AuthorLevelsResponse extends BaseResponse {
    data: {
        authorLevels: { id: number; value: string; label: string }[];
    };
}
export const onGetLevelApi = async (): Promise<AuthorLevelsResponse> => {
    try {
        const response = await Apis.get("/references/author-levels");
        return response;
    } catch (error) {
        console.error("onGetLevelApi error:::", error);
        throw error;
    }
};

// 직무 조회 (전체 직업 리스트)
export interface OccupationResponse extends BaseResponse {
    data: {
        occupations: { id: number; value: string; label: string }[];
    };
}
export const onGetOccupationApi = async (): Promise<OccupationResponse> => {
    try {
        const response = await Apis.get("/references/occupations");
        return response;
    } catch (error) {
        console.error("onGetOccupationApi error:::", error);
        throw error;
    }
};

// 관심 도메인 조회 (전체 토픽 리스트)
export interface DomainResponse extends BaseResponse {
    data: {
        topics: { id: number; value: string; label: string }[];
    };
}
export const onGetDomainApi = async (): Promise<DomainResponse> => {
    try {
        const response = await Apis.get("/references/topics");
        return response;
    } catch (error) {
        console.error("onGetDomainApi error:::", error);
        throw error;
    }
};

// 방문경로 조회 (전체 방문경로 리스트)
export interface VisitSourceResponse extends BaseResponse {
    data: {
        visitSources: { id: number; value: string; label: string }[];
    };
}
export const onGetVisitSourceApi = async (): Promise<VisitSourceResponse> => {
    try {
        const response = await Apis.get("/references/visit-sources");
        return response;
    } catch (error) {
        console.error("onGetVisitSourceApi error:::", error);
        throw error;
    }
};

// 전체 데이터 유형 조회
export interface DataTypesResponse extends BaseResponse {
    data: any;
}
export const onGetDataTypesApi = async (): Promise<DataTypesResponse> => {
    try {
        const response = await Apis.get("/references/data-types");
        return response;
    } catch (error) {
        console.error("onGetDataTypesApi error:::", error);
        throw error;
    }
};

// 전체 데이터 출처 조회
export interface DataSourcesResponse extends BaseResponse {
    data: {
        dataSources: { id: number; value: string; label: string }[];
    };
}
export const onGetDataSourcesApi = async (): Promise<DataSourcesResponse> => {
    try {
        const response = await Apis.get("/references/data-sources");
        return response;
    } catch (error) {
        console.error("onGetDataSourcesApi error:::", error);
        throw error;
    }
};

// 전체 분석 목적 조회
export interface AnalysisPurposesResponse extends BaseResponse {
    data: {
        analysisPurposes: { id: number; value: string; label: string }[];
    };
}
export const onGetAnalysisPurposesApi = async (): Promise<AnalysisPurposesResponse> => {
    try {
        const response = await Apis.get("/references/analysis-purposes");
        return response;
    } catch (error) {
        console.error("onGetAnalysisPurposesApi error:::", error);
        throw error;
    }
};
