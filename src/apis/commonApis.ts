import { Apis } from "@/utils/api";

// 좋아요 API
export interface LikeApiRequest {
    targetId: number;
    targetType: "DATASET" | "PROJECT";
    previouslyLiked: boolean;
}
export const onLikeApi = async (body: LikeApiRequest) => {
    try {
        const response = await Apis.postAuth(`/likes`, body);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
