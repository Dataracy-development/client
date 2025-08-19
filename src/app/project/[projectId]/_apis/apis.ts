import { BaseResponse } from "@/types/apiTypes";
import { Project } from "@/types/commonTypes";
import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";

// 프로젝트 상세 조회
interface GetProjectApiResponse extends BaseResponse {
    data: Project;
}

export const getProjectApi: QueryFunction<Project, [_1: string, projectId: number]> = async ({ queryKey }) => {
    try {
        const [, projectId] = queryKey;
        const res = (await Apis.get(`/projects/${projectId}`)) as GetProjectApiResponse;

        if (res.httpStatus === 200) return res.data;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getProjectApi error", err);
        throw err;
    }
};

// 이어가기 프로젝트 리스트 조회
interface GetContinuedProjectsApiResponse extends BaseResponse {
    data: {
        content: Project[];
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        [key: string]: any;
    };
}

export const getContinuedProjectsApi: QueryFunction<any, [_1: string, projectId: number]> = async ({ queryKey }) => {
    try {
        const [, projectId] = queryKey;
        const res = (await Apis.get(`/projects/${projectId}/continue`, {
            params: {
                page: 0,
                size: 5,
                sort: "createdAt,desc",
            },
        })) as GetContinuedProjectsApiResponse;

        if (res.httpStatus === 200) return res.data;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getProjectApi error", err);
        throw err;
    }
};

// 프로젝트 댓글 조회
interface GetProjectCommentsApiResponse extends BaseResponse {
    data: {
        content: Comment[];
        totalPages: number;
        [key: string]: any;
    };
}
export const getProjectCommentsApi: QueryFunction<any, [_1: string, projectId: number, page: number]> = async ({ queryKey }) => {
    try {
        const [, projectId, page] = queryKey;
        const res = (await Apis.get(`/projects/${projectId}/comments`, {
            params: {
                page,
                size: 5,
                sort: "createdAt,desc",
            },
        })) as GetProjectCommentsApiResponse;

        if (res.httpStatus === 200) return res.data;
        else throw new Error(res.message);
    } catch (err) {
        console.error("getProjectCommentsApi error", err);
        throw err;
    }
};

// 프로젝트 댓글 작성
export interface CreateProjectCommentRequest {
    projectId: number;
    content: string;
    parentCommentId?: number;
}
export interface CreateProjectCommentApiResponse extends BaseResponse {
    data: any;
}
export const createProjectCommentApi = async (data: CreateProjectCommentRequest): Promise<CreateProjectCommentApiResponse> => {
    try {
        const { projectId, ...rest } = data;
        const response = await Apis.postAuth(`/projects/${projectId}/comments`, rest);

        return response;
    } catch (error) {
        console.error("프로젝트 댓글 작성 중 오류 발생:", error);
        throw error;
    }
};
