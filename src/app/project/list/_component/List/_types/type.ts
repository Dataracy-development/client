export interface ItemProps {
    id: number;
    thumbnail: string;
    tags: string[];
    title: string;
    description: string;
    isLiked: boolean;
    userImg: string;
    userName: string;
    commentCnt: number;
    likedCnt: number;
    viewCnt: number;
}
