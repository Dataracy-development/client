import { onLikeApi } from "@/apis/commonApis";
import { useCreateMutation } from "@/hooks/mutations/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function FollowBtn({ isLiked }: { isLiked: boolean }) {
    const { projectId } = useParams();
    const projectIdNumber = projectId ? parseInt(projectId as string, 10) : undefined;

    const queryClient = useQueryClient();

    const { mutate: follow } = useCreateMutation(onLikeApi, "follow", {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["project", projectIdNumber] });
        },
    });
    const handleFollow = () => {
        follow({ targetId: projectIdNumber, targetType: "PROJECT", previouslyLiked: isLiked });
    };

    return (
        <button className="mt-4 w-full h-12 flex justify-center items-center gap-[3px] bg-n900 text-white rounded-2xl text-button" onClick={handleFollow}>
            {isLiked ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
            )}
            팔로우
        </button>
    );
}
