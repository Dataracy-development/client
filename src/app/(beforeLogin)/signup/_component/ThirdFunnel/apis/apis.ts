import { Apis } from "@/utils/api";

export interface BaseResponse {
    httpStatus: number;
    code: string;
    message: string;
}

// 레벨 조회
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

// 직무 조회
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

// 관심 도메인 조회
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

// 방문경로 조회
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

// 회원가입
export interface SignupRequest {
    email: string;
    password: string;
    passwordConfirm: string;
    nickname: string;
    authorLevelId: number;
    occupationId?: number;
    topicIds?: number[];
    visitSourceId?: number;
    isAdTermsAgreed: boolean;
}

export const onSignupApi = async (data: SignupRequest) => {
    try {
        const response = await Apis.post("/signup/self", data);
        return response;
    } catch (error) {
        console.error("onSignupApi error:::", error);
        throw error;
    }
};
