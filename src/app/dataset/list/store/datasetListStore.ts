import { create } from "zustand";

export type DatasetSortType = "LATEST" | "OLDEST" | "DOWNLOAD" | "UTILIZE"; // 최신순, 오래된 순, 다운로드 수, 이용 수
export interface Filter {
    keyword: string;
    sortType: DatasetSortType;
    topicId: number;
    dataSourceId: number;
    dataTypeId: number;
    year: number;
}

export interface Pagable {
    page: number;
    size: number;
}

interface DatasetListStore {
    filter: Filter;
    pagable: Pagable;
    setKeyword: (keyword: string) => void;
    setSortType: (sortType: DatasetSortType) => void;
    setTopicId: (topicId: number) => void;
    setDataSourceId: (dataSourceId: number) => void;
    setDataTypeId: (dataTypeId: number) => void;
    setYear: (year: number) => void;
    setPage: (page: number) => void;
}

const initialState = {
    filter: {
        keyword: "",
        sortType: "LATEST" as const,
        topicId: 0,
        dataSourceId: 0,
        dataTypeId: 0,
        year: new Date().getFullYear(),
    },
    pagable: {
        page: 1,
        size: 5,
    },
};

const useDatasetListStore = create<DatasetListStore>((set, get) => ({
    ...initialState,
    setKeyword: (keyword: string) => set({ filter: { ...get().filter, keyword } }),
    setSortType: (sortType: DatasetSortType) => set({ filter: { ...get().filter, sortType } }),
    setTopicId: (topicId: number) => set({ filter: { ...get().filter, topicId } }),
    setDataSourceId: (dataSourceId: number) => set({ filter: { ...get().filter, dataSourceId } }),
    setDataTypeId: (dataTypeId: number) => set({ filter: { ...get().filter, dataTypeId } }),
    setYear: (year: number) => set({ filter: { ...get().filter, year } }),
    setPage: (page: number) => set({ pagable: { ...get().pagable, page } }),
}));

export default useDatasetListStore;
