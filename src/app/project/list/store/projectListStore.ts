import { create } from "zustand";

export type SortType = "LATEST" | "RECOMMEND" | "VIEW" | "MOST_FEEDBACK" | "LEAST_FEEDBACK" | "OLDEST"; // 최신순, 추천순, 조회순, 피드백 많은 순, 피드백 적은 순, 오래된 순
export interface Filter {
    keyword: string; // 검색어
    sortType: SortType;
    topicId: number;
    analysisPurposeId: number;
    dataSourceId: number;
    authorLevelId: number;
}

export interface Pagable {
    page: number;
    size: number;
    sort: string[];
}

interface ProjectListStore {
    filter: Filter;
    pagable: Pagable;
    // Filter 개별 setter 함수들
    setKeyword: (keyword: string) => void;
    setSortType: (sortType: SortType) => void;
    setTopicId: (topicId: number) => void;
    setAnalysisPurposeId: (analysisPurposeId: number) => void;
    setDataSourceId: (dataSourceId: number) => void;
    setAuthorLevelId: (authorLevelId: number) => void;
    // Pagable 개별 setter 함수들
    setPage: (page: number) => void;
    setSort: (sort: string[]) => void;
}

const initialState = {
    filter: {
        keyword: "",
        sortType: "LATEST" as const,
        topicId: 1,
        analysisPurposeId: 1,
        dataSourceId: 1,
        authorLevelId: 1,
    },
    pagable: {
        page: 1,
        size: 5,
        sort: [] as string[],
    },
};

const useProjectListStore = create<ProjectListStore>((set, get) => ({
    ...initialState,
    // Filter 개별 setter 함수들
    setKeyword: (keyword: string) => set({ filter: { ...get().filter, keyword } }),
    setSortType: (sortType: SortType) => set({ filter: { ...get().filter, sortType } }),
    setTopicId: (topicId: number) => set({ filter: { ...get().filter, topicId } }),
    setAnalysisPurposeId: (analysisPurposeId: number) => set({ filter: { ...get().filter, analysisPurposeId } }),
    setDataSourceId: (dataSourceId: number) => set({ filter: { ...get().filter, dataSourceId } }),
    setAuthorLevelId: (authorLevelId: number) => set({ filter: { ...get().filter, authorLevelId } }),
    // Pagable 개별 setter 함수들
    setPage: (page: number) => set({ pagable: { ...get().pagable, page } }),
    setSort: (sort: string[]) => set({ pagable: { ...get().pagable, sort } }),
}));

export default useProjectListStore;
