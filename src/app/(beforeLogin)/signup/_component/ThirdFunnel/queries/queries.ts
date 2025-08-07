import { onGetDomainApi, onGetLevelApi, onGetOccupationApi, onGetVisitSourceApi } from "@/apis/referenceDataApis";
import { useQueries } from "@tanstack/react-query";

export const useGetOptionsQueries = () => {
    return useQueries({
        queries: [
            {
                queryKey: ["level"], // 레벨
                queryFn: onGetLevelApi,
            },
            {
                queryKey: ["domain"], // 관심분야
                queryFn: onGetDomainApi,
            },
            {
                queryKey: ["occupation"], // 직무
                queryFn: onGetOccupationApi,
            },
            {
                queryKey: ["visitSource"], // 방문경로
                queryFn: onGetVisitSourceApi,
            },
        ],
    });
};
