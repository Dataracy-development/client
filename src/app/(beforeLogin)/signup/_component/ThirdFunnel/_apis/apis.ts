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

// 소셜 회원가입
export interface SocialSignupRequest {
    nickname: string;
    authorLevelId: number;
    occupationId?: number;
    topicIds?: number[];
    visitSourceId?: number;
    isAdTermsAgreed: boolean;
}
export const onSocialSignupApi = async (data: SocialSignupRequest) => {
    try {
        const response = await Apis.post("/signup/oauth", data, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    } catch (error) {
        console.error("onSocialSignupApi error:::", error);
        throw error;
    }
};
