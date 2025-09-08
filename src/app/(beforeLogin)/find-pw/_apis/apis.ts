import { Apis } from "@/utils/api";

// 이메일 인증 코드 전송
export interface SendEmailVerificationCodeRequest {
    email: string;
    purpose: "SIGN_UP" | "PASSWORD_RESET" | "PASSWORD_SEARCH";
}
export interface SendEmailVerificationCodeResponse {
    httpStatus: string;
    message: string;
    code: string;
    data: any;
}

export const onSendEmailVerificationCodeApi = async (body: SendEmailVerificationCodeRequest): Promise<SendEmailVerificationCodeResponse> => {
    try {
        const response = await Apis.post("/email/send", body);
        return response;
    } catch (err) {
        throw err;
    }
};

// 인증 코드 확인
export interface CheckAuthCodeRequest {
    email: string;
    code: string;
    purpose: "SIGN_UP" | "PASSWORD_RESET" | "PASSWORD_SEARCH";
}
export interface CheckAuthCodeResponse {
    httpStatus: string;
    message: string;
    code: string;
    data: any;
}
export const onCheckAuthCodeApi = async (body: CheckAuthCodeRequest): Promise<CheckAuthCodeResponse> => {
    try {
        const response = await Apis.post("/email/verify", body);
        return response;
    } catch (err) {
        throw err;
    }
};

// 비밀번호 재설정
export interface ResetPasswordRequest {
    password: string;
    passwordConfirm: string;
}
export interface ResetPasswordResponse {
    httpStatus: string;
    message: string;
    code: string;
    data: any;
}
export const onResetPasswordApi = async (body: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
    try {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];

        const response = await Apis.put("/user/password/change", body, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (err) {
        throw err;
    }
};
