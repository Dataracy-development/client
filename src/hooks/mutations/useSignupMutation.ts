"use client";

import { onCheckEmailVerificationCodeApi, onSendEmailVerificationCodeApi } from "@/apis/authApis";
import { onSignupApi } from "@/app/(beforeLogin)/signup/_component/ThirdFunnel/apis/apis";
import { createMutation } from "./hooks";
import { UseMutationProps } from "./type";

// 회원가입 mutation
export const useSignupMutation = ({ onSuccess, onError, onSettled }: UseMutationProps = {}) => {
    return createMutation(onSignupApi, "signup", {
        onSuccess,
        onError,
        onSettled,
    });
};

// 이메일 인증 요청 mutation
export const useEmailVerificationMutation = ({ onMutate, onSuccess, onError, onSettled }: UseMutationProps = {}) => {
    return createMutation(onSendEmailVerificationCodeApi, "emailVerification", {
        onMutate,
        onSuccess,
        onError,
        onSettled,
    });
};

// 이메일 인증 코드 확인 mutation
export const useEmailVerificationCheckMutation = ({ onMutate, onSuccess, onError, onSettled }: UseMutationProps = {}) => {
    return createMutation(onCheckEmailVerificationCodeApi, "emailVerificationCheck", {
        onMutate,
        onSuccess,
        onError,
        onSettled,
    });
};
