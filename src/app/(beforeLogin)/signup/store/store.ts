import { validateEmail, validatePassword } from "@/utils/utils";
import { create } from "zustand";

export interface SignupFormData {
    // 필수 정보
    email: string;
    password: string;
    passwordConfirm: string;
    nickname: string;
    level: number | null;

    // 선택 정보
    domains?: number[] | null;
    occupation?: number | null;
    visitSource?: number | null;
    // isAdTermsAgreed?: boolean;
}

interface SignupStore {
    // 상태
    formData: SignupFormData;
    currentStep: number; // Funnel Step(1, 2, 3)

    // 액션
    setField: (field: keyof SignupFormData, value: any) => void;
    setCurrentStep: (step: number) => void;

    reset: () => void;

    // 상태 관리
    errors: Partial<Record<keyof SignupFormData, string>>;
    isLoading: boolean;
    setError: (field: keyof SignupFormData, error: string) => void;
    setErrors: (errors: Partial<SignupFormData>) => void;
    setLoading: (loading: boolean) => void;

    // 유틸리티
    validateEmailAndPassword: () => boolean;
    validateBasicInfo: () => boolean;
    getRequestData: () => any;
}

const initialFormData: SignupFormData = {
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    level: null,
    occupation: null,
    domains: [],
    visitSource: null,
    // isAdTermsAgreed: true,
};

export const useSignupStore = create<SignupStore>((set, get) => ({
    // Funnel Step(1, 2, 3)
    currentStep: 1,
    setCurrentStep: (step) => {
        set({ currentStep: step });
    },

    // Form Data
    formData: initialFormData,
    setField: (field, value) => {
        set((state) => ({
            formData: {
                ...state.formData,
                [field]: value,
            },
        }));
    },

    // 상태 관리
    errors: {},
    isLoading: false,
    setError: (field, error) => {
        set((state) => ({
            errors: {
                ...state.errors,
                [field]: error,
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
    setLoading: (loading) => {
        set((state) => ({
            formData: {
                ...state.formData,
                isLoading: loading,
            },
        }));
    },

    // Utils
    reset: () => {
        set({ formData: initialFormData });
    },

    validateEmailAndPassword: () => {
        const { formData } = get();
        const { email, password, passwordConfirm } = formData;

        const newErrors: Partial<Record<keyof SignupFormData, string>> = {};

        // 이메일 검증
        if (email === "") {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (!validateEmail(email)) {
            newErrors.email = "이메일 형식에 맞게 입력해주세요.";
        }

        // 비밀번호 검증
        if (password === "") {
            newErrors.password = "비밀번호를 입력해주세요.";
        } else if (!validatePassword(password)) {
            newErrors.password = "비밀번호는 영문, 숫자, 특수문자가 포함된 8자 이상 문자열입니다.";
        }

        // 비밀번호 확인 검증
        if (password && passwordConfirm === "") {
            newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요.";
        } else if (password !== passwordConfirm) {
            newErrors.passwordConfirm = "비밀번호와 비밀번호 확인은 동일해야합니다.";
        }

        set({ errors: newErrors });
        return Object.keys(newErrors).length === 0;
    },

    validateBasicInfo: () => {
        const { formData } = get();
        const { nickname, level } = formData;

        const newErrors: Partial<Record<keyof SignupFormData, string>> = {};

        // 닉네임 검증
        if (nickname === "") {
            newErrors.nickname = "닉네임을 입력해주세요.";
        }

        // 레벨 검증
        if (level === null) {
            newErrors.level = "레벨을 선택해주세요.";
        }

        set({ errors: newErrors });
        return Object.keys(newErrors).length === 0;
    },

    // API Request Data
    getRequestData: () => {
        const { formData } = get();
        return {
            email: formData.email,
            password: formData.password,
        };
    },
}));
