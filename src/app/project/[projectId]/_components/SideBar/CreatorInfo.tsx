export default function CreatorInfo() {
    return (
        <div className="w-full p-6 border border-n500 rounded-2xl">
            <div className="flex flex-col gap-[14px] text-center">
                <div className="w-20 h-20 rounded-full bg-n500 mx-auto"></div>
                <div className="text-sub2 font-bold">데이터마스터</div>
                <div className="text-body2 leading-[23px] text-[#666]">Senior Data Scientist</div>
                <div className="text-body2 leading-[21px] text-[#666]">
                    5년간 다양한 산업의 데이터 분석 프로젝트를 수행했습니다. 머신러닝과 딥러닝에 대한 깊은 이해를 바탕으로 실무 중심의 솔루션을 제공합니다.
                </div>
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
                    <div className="text-body1 font-bold text-[#333]">2024-01-15</div>
                </div>
                <div className="w-full flex justify-between items-center h-[50px] border-b border-[#F1F3F4]">
                    <div className="text-body2 text-[#666]">조회수</div>
                    <div className="text-body1 font-bold text-[#333]">2,847</div>
                </div>
                <div className="w-full flex justify-between items-center h-[50px] border-b border-[#F1F3F4]">
                    <div className="text-body2 text-[#666]">좋아요</div>
                    <div className="text-body1 font-bold text-[#333]">156</div>
                </div>
                <div className="w-full flex justify-between items-center h-[50px]">
                    <div className="text-body2 text-[#666]">댓글</div>
                    <div className="text-body1 font-bold text-[#333]">23</div>
                </div>
            </div>
        </div>
    );
}
