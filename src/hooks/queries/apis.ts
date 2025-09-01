import { BaseResponse } from "@/types/apiTypes";
import { User } from "@/types/commonTypes";
import { Apis } from "@/utils/api";
import { QueryFunction } from "@tanstack/react-query";

interface UserInfoResponse extends BaseResponse {
    data: User;
}

export const getUserInfoApi: QueryFunction<UserInfoResponse> = async () => {
    try {
        const response = await Apis.getAuth("/user");

        return response;
    } catch (error) {
        console.error("Get User Info API Error:", error);
        throw error;
    }
};
