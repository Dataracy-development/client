import { Apis } from "@/utils/api";

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
