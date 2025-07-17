import { Apis } from "@/utils/api";

// 로그인
export interface LoginRequest {
    email: string;
    password: string;
}

export const onLoginApi = async (body: LoginRequest) => {
    try {
        const response = await Apis.post("/auth/login", body);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// 이메일 인증코드 전송
export const onSendEmailVerificationCodeApi = async (email: string) => {
    return await Apis.post(`/email/signup/send?email=${email}`);
};

// 이메일 인증코드 확인
interface CheckEmailVerificationCodeRequest {
    email: string;
    code: string;
}
export const onCheckEmailVerificationCodeApi = async (body: CheckEmailVerificationCodeRequest) => {
    return await Apis.post(`/email/signup/verify?email=${body.email}&code=${body.code}`);
};

// 회원가입
export interface SignupRequest {
    email: string;
    password: string;
    nickname: string;
    authorLevel: string;
    occupation: string;
    topics: string[];
    visitSource: string;
    isAdTermsAgreed: boolean;
}

export const onSignupApi = async (body: SignupRequest) => {
    const requestBody = {
        ...body,
        career: 3,
        type: "email",
        skillstackIds: [0, 1, 2],
    };

    return await Apis.post("/public/signup/self", requestBody);
};
