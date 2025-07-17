import { validateEmail, validatePassword } from "@/utils/utils";
import { create } from "zustand";

export interface SignupFormData {
    // 필수 정보
    email: string;
    password: string;
    passwordConfirm: string;
    nickname: string;
    verificationCode: string;

    // 선택 정보 (향후 추가 예정)
    authorLevel?: string;
    occupation?: string;
    topics?: string[];
    visitSource?: string;
    isAdTermsAgreed?: boolean;

    // 상태 관리
    isEmailVerified: boolean;
    errors: Partial<SignupFormData>;
    isLoading: boolean;
}

interface SignupStore {
    // 상태
    formData: SignupFormData;

    // 액션
    setField: (field: keyof SignupFormData, value: any) => void;
    setError: (field: keyof SignupFormData, error: string) => void;
    setErrors: (errors: Partial<SignupFormData>) => void;
    clearErrors: () => void;
    setIsEmailVerified: (verified: boolean) => void;
    setLoading: (loading: boolean) => void;
    reset: () => void;

    // 유틸리티
    validate: () => boolean;
    getRequestData: () => any;
}

const initialFormData: SignupFormData = {
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    verificationCode: "",
    authorLevel: "초심자",
    occupation: "학생",
    topics: [],
    visitSource: "SNS",
    isAdTermsAgreed: true,
    isEmailVerified: false,
    errors: {},
    isLoading: false,
};

export const useSignupStore = create<SignupStore>((set, get) => ({
    formData: initialFormData,

    setField: (field, value) => {
        set((state) => ({
            formData: {
                ...state.formData,
                [field]: value,
            },
        }));
    },

    setError: (field, error) => {
        set((state) => ({
            formData: {
                ...state.formData,
                errors: {
                    ...state.formData.errors,
                    [field]: error,
                },
            },
        }));
    },

    setErrors: (errors) => {
        set((state) => ({
            formData: {
                ...state.formData,
                errors,
            },
        }));
    },

    clearErrors: () => {
        set((state) => ({
            formData: {
                ...state.formData,
                errors: {},
            },
        }));
    },

    setIsEmailVerified: (verified) => {
        set((state) => ({
            formData: {
                ...state.formData,
                isEmailVerified: verified,
            },
        }));
    },

    setLoading: (loading) => {
        set((state) => ({
            formData: {
                ...state.formData,
                isLoading: loading,
            },
        }));
    },

    reset: () => {
        set({ formData: initialFormData });
    },

    validate: () => {
        const { formData } = get();
        const newErrors: Partial<SignupFormData> = {};

        // 이메일 검증
        if (formData.email === "") {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "이메일 형식에 맞게 입력해주세요";
        }

        // 비밀번호 검증
        if (formData.password === "") {
            newErrors.password = "비밀번호를 입력해주세요.";
        } else if (!validatePassword(formData.password)) {
            newErrors.password = "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.";
        }

        // 비밀번호 확인 검증
        if (formData.password && formData.passwordConfirm === "") {
            newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요.";
        } else if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = "입력한 비밀번호와 동일하게 입력해주세요.";
        }

        // 닉네임 검증
        if (formData.nickname === "") {
            newErrors.nickname = "이름을 입력해주세요.";
        }

        // 이메일 인증 검증
        if (!formData.isEmailVerified) {
            newErrors.verificationCode = "이메일 인증을 완료해주세요.";
        } else if (formData.verificationCode === "") {
            newErrors.verificationCode = "인증 코드를 입력해주세요.";
        }

        get().setErrors(newErrors);
        console.log("newErrors:::", newErrors);
        return Object.keys(newErrors).length === 0 && formData.isEmailVerified;
    },

    getRequestData: () => {
        const { formData } = get();
        return {
            email: formData.email,
            password: formData.password,
            nickname: formData.nickname,
            authorLevel: formData.authorLevel,
            occupation: formData.occupation,
            topics: formData.topics,
            visitSource: formData.visitSource,
            isAdTermsAgreed: formData.isAdTermsAgreed,
        };
    },
}));
