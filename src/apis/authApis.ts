import { Apis } from "@/utils/api";

// 로그인
export interface LoginRequest {
    email: string;
    password: string;
}

export const onLoginApi = async (body: LoginRequest) => {
    try {
        if (process.env.NODE_ENV === "development") {
            const response = await Apis.post("/auth/dev/login", body);
            return response;
        }

        const response = await Apis.post("/auth/login", body);

        // Set-Cookie 헤더에서 refreshToken 추출
        const setCookieHeader = response.headers.get("set-cookie");
        if (setCookieHeader) {
            // refreshToken=값; 형태에서 값 부분만 추출
            const refreshTokenMatch = setCookieHeader.match(/refreshToken=([^;]+)/);
            if (refreshTokenMatch) {
                document.cookie = `refreshToken=${refreshTokenMatch[1]}; path=/; SameSite=Lax; Secure`;
            }
        }

        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// 이메일 인증코드 전송
export interface SendEmailVerificationCodeRequest {
    email: string;
    purpose: "SIGN_UP" | "PASSWORD_RESET";
}
export const onSendEmailVerificationCodeApi = async (body: SendEmailVerificationCodeRequest) => {
    try {
        const response = await Apis.post(`/email/send`, body);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// 이메일 인증코드 확인
interface CheckEmailVerificationCodeRequest {
    email: string;
    code: string;
    purpose: "SIGN_UP" | "PASSWORD_RESET";
}
export const onCheckEmailVerificationCodeApi = async (body: CheckEmailVerificationCodeRequest) => {
    try {
        const response = await Apis.post(`/email/verify`, body);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
