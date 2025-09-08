export interface Dataset {
    id: number;
    title: string;
    creatorId: number;
    creatorName: string;
    authorLabel: string;
    previewJson: string;
    userIntroductionText: string;
    userProfileImageUrl: string;
    occupationLabel: string;
    topicLabel: string;
    dataSourceLabel: string;
    dataTypeLabel: string;
    sizeBytes: number;
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
    creatorName: string;
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
    creatorId: number;
    connectedDataSets: Dataset[];
}

export interface Comment {
    id: number;
    creatorName: string;
    authorLevelLabel: string;
    userProfileUrl: string;
    content: string;
    likeCount: number;
    childCommentCount: number;
    createdAt: string;
    isLiked: boolean;
}

export interface User {
    id: number;
    role: string;
    email: string;
    nickname: string;
    authorLevelLabel: string;
    authorLevelId: number;
    occupationLabel: string;
    occupationId: number;
    topicLabels: string[];
    topicIds: number[];
    visitSourceLabel: string;
    visitSourceId: number;
    profileImageUrl: string;
    introductionText: string;
}
