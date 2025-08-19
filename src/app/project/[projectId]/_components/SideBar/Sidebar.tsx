import { Project } from "@/types/commonTypes";
import ConnectedDataSets from "./ConnectedDataSets";
import CreatorInfo from "./CreatorInfo";
import FollowBtn from "./FollowBtn";

export default function Sidebar({ data }: { data: Project }) {
    return (
        <div className="w-[360px]">
            <CreatorInfo
                creator={{
                    name: data.username,
                    occupation: data.occupationLabel,
                    description: data.userIntroductionText,
                    createdAt: data.createdAt.slice(0, 10),
                    viewCount: data.viewCount,
                    likedCount: data.likeCount,
                }}
            />

            {/* user === creator이면 FollowBtn 안보이게 */}
            <FollowBtn />
            <ConnectedDataSets data={data.connectedDataSets} />
        </div>
    );
}
