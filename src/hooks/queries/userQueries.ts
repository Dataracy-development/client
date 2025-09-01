import { useQuery } from "@tanstack/react-query";
import { getUserInfoApi } from "./apis";

export const useUserInfo = () => {
    const {
        data: user,
        isPending,
        isError,
    } = useQuery({
        queryKey: ["userInfo"],
        queryFn: getUserInfoApi,
    });

    return { user: user?.data, isPending, isError };
};
