import { create } from "zustand";

export interface CreateDatasetWebRequest {
    title: string;
    topicId: number | null;
    dataSourceId: number | null;
    dataTypeId: number | null;
    startDate: string;
    endDate: string;
    description: string;
    analysisGuide: string;
}
export interface CreateDatasetFiles {
    dataFile: File | null;
    thumbnailFile?: File;
}

interface CreateDatasetStore {
    formData: CreateDatasetWebRequest;
    files: CreateDatasetFiles;

    setFormData: (field: keyof CreateDatasetWebRequest, value: string | number | null) => void;
    setFiles: (files: CreateDatasetFiles) => void;

    formDataErrors: Partial<Record<keyof CreateDatasetWebRequest, string>>;
    setFormDataError: (field: keyof CreateDatasetWebRequest, error: string) => void;

    filesErrors: Partial<Record<keyof CreateDatasetFiles, string>>;
    setFilesError: (field: keyof CreateDatasetFiles, error: string) => void;

    validate: () => boolean;
    getFormData: () => FormData;

    reset: () => void;
}

const initialFormData: CreateDatasetWebRequest = {
    title: "",
    topicId: null,
    dataSourceId: null,
    dataTypeId: null,
    startDate: "",
    endDate: "",
    description: "",
    analysisGuide: "",
};
const initialFiles: CreateDatasetFiles = {
    dataFile: null,
    thumbnailFile: null,
};

export const useCreateDatasetStore = create<CreateDatasetStore>((set, get) => ({
    formData: initialFormData,
    files: initialFiles,

    setFormData: (field, value) => {
        set((state) => ({ formData: { ...state.formData, [field]: value } }));
    },
    setFiles: (files) => {
        set({ files });
    },

    formDataErrors: {},
    setFormDataError: (field, error) => {
        set((state) => ({ formDataErrors: { ...state.formDataErrors, [field]: error } }));
    },
    filesErrors: {},
    setFilesError: (field, error) => {
        set((state) => ({ filesErrors: { ...state.filesErrors, [field]: error } }));
    },

    validate: () => {
        const { title, topicId, dataSourceId, dataTypeId, startDate, endDate, description, analysisGuide } = get().formData;
        const errors: Partial<Record<keyof CreateDatasetWebRequest, string>> = {};

        if (title === "") {
            errors.title = "제목을 입력해주세요.";
        }
        if (!topicId) {
            errors.topicId = "도메인을 선택해주세요.";
        }
        if (!dataSourceId) {
            errors.dataSourceId = "데이터 출처를 선택해주세요.";
        }
        if (!dataTypeId) {
            errors.dataTypeId = "데이터 타입을 선택해주세요.";
        }
        if (startDate === "") {
            errors.startDate = "분석 시작일을 선택해주세요.";
        }
        if (endDate === "") {
            errors.endDate = "분석 종료일을 선택해주세요.";
        }
        if (description === "") {
            errors.description = "상세 내용을 입력해주세요.";
        }
        if (analysisGuide === "") {
            errors.analysisGuide = "분석 가이드를 입력해주세요.";
        }

        set({ formDataErrors: errors });

        const { dataFile } = get().files;
        const fileErrors: Partial<Record<keyof CreateDatasetFiles, string>> = {};
        if (!dataFile) {
            fileErrors.dataFile = "데이터 파일을 선택해주세요.";
        }

        set({ filesErrors: fileErrors });

        return Object.keys(errors).length === 0 && Object.keys(fileErrors).length === 0;
    },
    getFormData: () => {
        const { formData, files } = get();

        const result = new FormData();
        result.append("dataFile", files.dataFile);
        if (files.thumbnailFile) {
            result.append("thumbnailFile", files.thumbnailFile);
        }

        result.append("webRequest", JSON.stringify(formData));

        return result;
    },
    reset: () => {
        set({ formData: initialFormData, files: initialFiles });
    },
}));
