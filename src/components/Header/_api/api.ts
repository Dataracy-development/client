import { BaseResponse } from "@/types/apiTypes";
import { Apis } from "@/utils/api";

// 로그아웃
export interface LogoutResponse extends BaseResponse {
    data: any;
}

export const logoutApi = async (): Promise<LogoutResponse> => {
    try {
        const response = await Apis.postAuth("/user/logout", {}, {
            withCredentials: true,
        });

        return response;
    } catch (error) {
        console.error("로그아웃 중 오류 발생:", error);
        throw error;
    }
};