import { BaseResponse } from "@/types/apiTypes";
import { Dataset, Project, User } from "@/types/commonTypes";
import { Apis } from "@/utils/api";

// 내 정보 수정
export interface UpdateMyInfoRequest {
    nickname?: string;
    authorLevelLabel?: string;
    occupationLabel?: string;
    topicLabels?: string[];
    visitSourceLabel?: string;
    introductionText?: string;
}
export interface UpdateMyInfoResponse extends BaseResponse {
    data: User;
}
export const updateMyInfoApi = async (body: UpdateMyInfoRequest): Promise<UpdateMyInfoResponse> => {
    try {
        const response = await Apis.put("/users/me", body);
        return response;
    } catch (error) {
        console.error("updateMyInfoApi error:::", error);
        throw error;
    }
};

// 내가 작성한 프로젝트 목록
export interface MyProjectsResponse extends BaseResponse {
    data: {
        content: Project[];
        totalElements: number;
        totalPages: number;
    };
}
export const getMyProjectsApi = async (page: number = 1, size: number = 10): Promise<MyProjectsResponse> => {
    try {
        const response = await Apis.getAuth(`/projects/me`, {
            params: {
                page: page - 1,
                size: size,
            },
        });
        return response;
    } catch (error) {
        console.error("getMyProjectsApi error:::", error);
        throw error;
    }
};

// 내가 작성한 데이터셋 목록
export interface MyDatasetsResponse extends BaseResponse {
    data: {
        content: Dataset[];
        totalElements: number;
        totalPages: number;
    };
}
export const getMyDatasetsApi = async (page: number = 1, size: number = 10): Promise<MyDatasetsResponse> => {
    try {
        const response = await Apis.getAuth(`/datasets/me`, {
            params: {
                page: page - 1,
                size: size,
            },
        });
        return response;
    } catch (error) {
        console.error("getMyDatasetsApi error:::", error);
        throw error;
    }
};

// 좋아요 한 프로젝트 목록
export interface LikedProjectsResponse extends BaseResponse {
    data: {
        content: Project[];
        totalElements: number;
        totalPages: number;
    };
}
export const getLikedProjectsApi = async (page: number = 1, size: number = 10): Promise<LikedProjectsResponse> => {
    try {
        const response = await Apis.getAuth(`/projects/like`, {
            params: {
                page: page - 1,
                size: size,
            },
        });
        return response;
    } catch (error) {
        console.error("getLikedProjectsApi error:::", error);
        throw error;
    }
};
