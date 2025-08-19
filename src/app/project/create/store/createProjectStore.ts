import { create } from "zustand";

export interface CreateProjectFormData {
    dataSourceId: number | null; // 데이터 출처
    topicId: number | null; // 도메인
    authorLevelId: number | null; // 작성자 레벨
    analysisPurposeId: number | null; // 분석 목적
    isContinue: boolean; // 프로젝트 이어가기 여부
    parentProjectId: number | null; // 이어가기 프로젝트 Id
    title: string; // 프로젝트 제목
    content: string; // 프로젝트 내용
    dataIds: number[]; // 데이터 셋 Id
}

interface CreateProjectStore {
    formData: CreateProjectFormData;
    thumbnailFile: File | null;

    setField: (field: keyof CreateProjectFormData, value: any) => void;
    setThumbnailFile: (file: File | null) => void;

    errors: Partial<Record<keyof CreateProjectFormData, string>>;
    setError: (field: keyof CreateProjectFormData, error: string) => void;
    setErrors: (errors: Partial<CreateProjectFormData>) => void;

    validateFormData: () => boolean;
    getDatas: () => FormData;
}

const initialFormData: CreateProjectFormData = {
    dataSourceId: null,
    topicId: null,
    authorLevelId: null,
    analysisPurposeId: null,
    isContinue: false,
    parentProjectId: null,
    title: "",
    content: "",
    dataIds: [],
};

export const useCreateProjectStore = create<CreateProjectStore>((set, get) => ({
    formData: initialFormData,
    setField: (field, value) => {
        set((state) => ({
            formData: { ...state.formData, [field]: value },
        }));
    },

    thumbnailFile: null,
    setThumbnailFile: (file) => {
        set({ thumbnailFile: file });
    },

    errors: {},
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

    validateFormData: () => {
        const { formData } = get();
        const { title, topicId, analysisPurposeId, dataSourceId, authorLevelId, content } = formData;

        let newErrors: Partial<Record<keyof CreateProjectFormData, string>> = {};
        if (title.length === 0) {
            newErrors.title = "프로젝트 제목을 입력해주세요.";
        }
        if (!topicId) {
            newErrors.topicId = "도메인을 선택해주세요.";
        }
        if (!analysisPurposeId) {
            newErrors.analysisPurposeId = "분석 목적을 선택해주세요.";
        }
        if (!dataSourceId) {
            newErrors.dataSourceId = "데이터 출처를 선택해주세요.";
        }
        if (!authorLevelId) {
            newErrors.authorLevelId = "작성자 유형을 선택해주세요.";
        }
        if (content.length === 0) {
            newErrors.content = "상세 내용을 입력해주세요.";
        }

        set({ errors: newErrors });
        return Object.keys(newErrors).length === 0;
    },

    getDatas: () => {
        const { formData, thumbnailFile } = get();

        let request = new FormData();
        request.append("thumbnailFile", thumbnailFile);
        request.append("webRequest", JSON.stringify(formData));

        return request;
    },
}));
