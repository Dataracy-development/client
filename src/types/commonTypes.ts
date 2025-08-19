export interface Dataset {
    id: number;
    title: string;
    username: string;
    authorLabel: string;
    occupationLabel: string;
    topicLabel: string;
    dataSourceLabel: string;
    dataTypeLabel: string;
    startDate: string;
    endDate: string;
    description: string;
    analysisGuide: string;
    dataThumbnailUrl: string;
    downloadCount: number;
    rowCount: number;
    columnCount: number;
    createdAt: string;
    countConnectedProjects: number;
}

export interface Project {
    id: number;
    title: string;
    username: string;
    userIntroductionText: string;
    authorLevelLabel: string;
    occupationLabel: string;
    topicLabel: string;
    analysisPurposeLabel: string;
    dataSourceLabel: string;
    isContinue: boolean;
    parentProjectId: number | null;
    content: string;
    projectThumbnailUrl: string | null;
    createdAt: string;
    commentCount: number;
    likeCount: number;
    viewCount: number;
    isLiked: boolean;
    hasChild: boolean;
    connectedDataSets: Dataset[];
}

export interface Comment {
    id: number;
    username: string;
    authorLevelLabel: string;
    userProfileUrl: string;
    content: string;
    likeCount: number;
    childCommentCount: number;
    createdAt: string;
    isLiked: boolean;
}
