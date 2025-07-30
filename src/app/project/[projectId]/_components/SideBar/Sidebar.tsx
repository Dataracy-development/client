import CreatorInfo from "./CreatorInfo";
import FollowBtn from "./FollowBtn";

export default function Sidebar() {
    return (
        <div className="w-[360px]">
            <CreatorInfo />

            <FollowBtn />
        </div>
    );
}
