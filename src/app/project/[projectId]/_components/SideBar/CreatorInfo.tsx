export interface Creator {
    name: string;
    occupation: string;
    description: string;
    createdAt: string;
    viewCount: number;
    likedCount: number;
}

export default function CreatorInfo({ creator }: { creator: Creator }) {
    return (
        <div className="w-full p-6 border border-gray-200 rounded-2xl">
            <div className="flex flex-col gap-[14px] text-center">
                <div className="w-20 h-20 rounded-full bg-n500 mx-auto"></div>
                <div className="text-sub2 font-bold">{creator.name}</div>
                <div className="text-body2 leading-[23px] text-[#666]">{creator.occupation}</div>
                <div className="text-body2 leading-[21px] text-[#666]">{creator.description}</div>
                <div className="flex gap-[30px] items-center justify-center">
                    <div>
                        <div className="text-h5 text-[#3f2aff]">15</div>
                        <div className="text-body2 leading-[23px] text-[#666]">프로젝트</div>
                    </div>
                    <div>
                        <div className="text-h5 text-[#3f2aff]">1.2K</div>
                        <div className="text-body2 leading-[23px] text-[#666]">팔로워</div>
                    </div>
                    <div>
                        <div className="text-h5 text-[#3f2aff]">89</div>
                        <div className="text-body2 leading-[23px] text-[#666]">평점</div>
                    </div>
                </div>
            </div>

            <div className="mt-[73px]">
                <div className="w-full flex justify-between items-center h-[50px] border-b border-[#F1F3F4]">
                    <div className="text-body2 text-[#666]">작성일</div>
                    <div className="text-body1 font-bold text-[#333]">{creator.createdAt}</div>
                </div>
                <div className="w-full flex justify-between items-center h-[50px] border-b border-[#F1F3F4]">
                    <div className="text-body2 text-[#666]">조회수</div>
                    <div className="text-body1 font-bold text-[#333]">{creator.viewCount}</div>
                </div>
                <div className="w-full flex justify-between items-center h-[50px] border-b border-[#F1F3F4]">
                    <div className="text-body2 text-[#666]">좋아요</div>
                    <div className="text-body1 font-bold text-[#333]">{creator.likedCount}</div>
                </div>
            </div>
        </div>
    );
}
