"use client";

import Spinner from "@/components/Spinner";
import { getUserInfoApi } from "@/hooks/queries/apis";
import { useQuery } from "@tanstack/react-query";
import LikedProjects from "./LikedProjects";
import MyDatasets from "./MyDatasets";
import MyInfo from "./MyInfo";
import MyProjects from "./MyProjects";

export default function MyPageContent() {
    const {
        data: myInfoData,
        isPending: isMyInfoPending,
        isError: isMyInfoError,
    } = useQuery({
        queryKey: ["myInfo"],
        queryFn: getUserInfoApi,
    });

    if (isMyInfoPending) return <Spinner />;
    if (isMyInfoError) return <div className="text-red-500">내 정보를 불러오는데 실패했습니다.</div>;
    if (!myInfoData?.data) return null;

    const user = myInfoData.data;

    return (
        <div className="space-y-8">
            {/* 내 정보 섹션 */}
            <MyInfo user={user} />

            {/* 내가 작성한 프로젝트 섹션 */}
            <MyProjects />

            {/* 내가 작성한 데이터셋 섹션 */}
            <MyDatasets />

            {/* 좋아요 한 프로젝트 섹션 */}
            <LikedProjects />
        </div>
    );
}
