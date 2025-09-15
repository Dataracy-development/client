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

        const response = await Apis.postWithHeaders("/auth/login", body, {
            withCredentials: true,
        });

        // Set-Cookie 헤더에서 refreshToken 추출
        const setCookieHeaders = response.headers["set-cookie"];
        console.log("setCookieHeaders:::", setCookieHeaders);
        if (setCookieHeaders && Array.isArray(setCookieHeaders)) {
            // refreshToken=값; 형태에서 값 부분만 추출
            for (const setCookieHeader of setCookieHeaders) {
                const refreshTokenMatch = setCookieHeader.match(/refreshToken=([^;]+)/);
                if (refreshTokenMatch) {
                    console.log("refreshTokenMatch:::", refreshTokenMatch);
                    document.cookie = `refreshToken=${refreshTokenMatch[1]}; path=/; SameSite=Lax; Secure`;
                    break;
                }
            }
        }

        return response.data;
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
