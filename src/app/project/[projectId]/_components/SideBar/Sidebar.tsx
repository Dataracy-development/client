import { useUserInfo } from "@/hooks/queries";
import { Project } from "@/types/commonTypes";
import ConnectedDataSets from "./ConnectedDataSets";
import CreatorInfo from "./CreatorInfo";
import FollowBtn from "./FollowBtn";

export default function Sidebar({ data }: { data: Project }) {
    const { user } = useUserInfo();

    return (
        <div className="w-[360px]">
            <CreatorInfo
                creator={{
                    name: data.creatorName,
                    occupation: data.occupationLabel,
                    description: data.userIntroductionText,
                    createdAt: data.createdAt.slice(0, 10),
                    viewCount: data.viewCount,
                    likedCount: data.likeCount,
                }}
            />

            {user?.id !== data.creatorId && <FollowBtn isLiked={data.isLiked} />}
            <ConnectedDataSets data={data.connectedDataSets} />
        </div>
    );
}
