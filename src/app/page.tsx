import Filter from "./project/list/_component/Filter";

export default function Home() {
    return (
        <div>
            <Banner />
            <Contents />
        </div>
    );
}

const Banner = () => {
    return <div className="w-full h-[190px] banner flex justify-center items-center"></div>;
};

const Contents = () => {
    return (
        <section className="max-w-[1200px] w-full mx-auto px-3 py-[30px] flex gap-[46px]">
            <Filter />

            <div className="flex-1 flex flex-col gap-[43px]">
                <PopularProjects />
                <PopularDatasets />
            </div>
        </section>
    );
};

const PopularProjects = () => {
    return (
        <div>
            <div className="font-nsKR text-2xl leading-9 font-bold mb-[22px]">인기 프로젝트</div>
            <div className="grid grid-cols-3 gap-[45px]">
                {[1, 2, 3].map((v) => {
                    return <ProjectCard key={v} />;
                })}
            </div>
        </div>
    );
};

export const ProjectCard = () => {
    return (
        <div className="h-[480px] bg-white rounded-[10px] border border-[#bdc1ca]">
            <div className="w-full h-[192px] rounded-t-[10px] bg-gray-200 flex justify-center items-center text-gray-400">IMG</div>

            <div className="px-4 pt-3 pb-[15px]">
                <div className="flex gap-1 mb-1.5">
                    {["커머스", "실무자", "Python"].map((v) => {
                        return (
                            <div className="w-fit h-5 text-[11px] leading-5 font-inter font-normal text-[#636ae8] px-1.5 bg-[#f2f2fd] rounded-[10px]" key={v}>
                                {v}
                            </div>
                        );
                    })}
                </div>
                <div className="font-nsKR font-bold text-xl leading-[30px] text-[#171a1f]">병원 대기시간 예측 모델링을 통한 환자 만족도 개선</div>

                <div className="font-inter font-normal text-xs leading-[20px] mb-[17px]">
                    3년간의 고객 구매 데이터를 활용해 RFM 분석과 협업 필터링을 통한 개인화 추천 시스템을 구축했습니다. 매출 15% 증가라는 실험적 성과...
                </div>

                <div className="flex justify-between items-start">
                    <div className="mt-1.5 flex gap-2 items-center">
                        <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                        <div className="font-inter text-sm leading-[22px] font-normal text-[#171a1f]">이시각화</div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-8 flex flex-col justify-center items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.98926 15.3065C10.6189 15.4983 11.3071 15.6044 12.0293 15.6044C12.4305 15.6044 12.8201 15.5697 13.1961 15.5078L16.1093 16.9644L16.1093 14.2172C16.9531 13.4984 17.4693 12.558 17.4693 11.5244C17.4693 11.2925 17.4434 11.0654 17.3931 10.8444"
                                    stroke="#9095A1"
                                    strokeWidth="1.632"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M9.31953 2.69434C5.56389 2.69434 2.51953 5.1301 2.51953 8.13434C2.51953 9.3563 3.02953 10.4803 3.87953 11.3881L3.87953 14.9343L7.16597 13.2915C7.84325 13.4723 8.56609 13.5743 9.31953 13.5743C13.0752 13.5743 16.1195 11.1386 16.1195 8.13434C16.1195 5.1301 13.0752 2.69434 9.31953 2.69434Z"
                                    stroke="#9095A1"
                                    strokeWidth="1.632"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <div className="font-inter text-xs leading-[20px] text-[#9095a1] font-normal">24</div>
                        </div>
                        <div className="w-8 flex flex-col justify-center items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.817 10.0936L10.0003 16.1381L4.18357 10.0936C3.21171 9.07037 2.93162 7.57167 3.46832 6.26649C4.00502 4.9613 5.25836 4.09316 6.66891 4.04957C8.07946 4.00598 9.38402 4.79507 10.0003 6.06462C10.6166 4.79507 11.9211 4.00598 13.3317 4.04957C14.7422 4.09316 15.9956 4.9613 16.5323 6.26649C17.069 7.57167 16.7889 9.07037 15.817 10.0936Z"
                                    stroke="#9095A1"
                                    strokeWidth="1.632"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <div className="font-inter text-xs leading-[20px] text-[#9095a1] font-normal">156</div>
                        </div>
                        <div className="w-8 flex flex-col justify-center items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.77392 10.9788C2.43604 10.4957 2.43604 9.85295 2.77392 9.36987C3.84356 7.85551 6.4772 4.73431 10.0003 4.73431C13.5234 4.73431 16.157 7.85551 17.2266 9.36987C17.5645 9.85295 17.5645 10.4957 17.2266 10.9788C16.157 12.4931 13.5234 15.6143 10.0003 15.6143C6.4772 15.6143 3.84356 12.4931 2.77392 10.9788Z"
                                    stroke="#9095A1"
                                    strokeWidth="1.632"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M10.0003 12.8943C11.5025 12.8943 12.7203 11.6765 12.7203 10.1743C12.7203 8.67207 11.5025 7.45428 10.0003 7.45428C8.49806 7.45428 7.28027 8.67207 7.28027 10.1743C7.28027 11.6765 8.49806 12.8943 10.0003 12.8943Z"
                                    stroke="#9095A1"
                                    strokeWidth="1.632"
                                    strokeMiterlimit="10"
                                    strokeLinecap="square"
                                />
                            </svg>

                            <div className="font-inter text-xs leading-[20px] text-[#9095a1] font-normal">1.2k</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="font-inter text-[11px] leading-[18px] font-normal text-[#636ae8] flex justify-center items-center gap-1 cursor-pointer">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1.87433L6 10.4743" stroke="#636AE8" strokeWidth="1.032" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M10.3002 6.17432L1.7002 6.17432" stroke="#636AE8" strokeWidth="1.032" strokeMiterlimit="10" strokeLinecap="square" />
                </svg>
                이어가기
            </div>
        </div>
    );
};

const PopularDatasets = () => {
    return (
        <div>
            <div className="font-nsKR text-2xl leading-9 font-bold mb-[22px]">인기 데이터셋</div>

            <div className="flex bg-[#FAFAFB] h-[46px]">
                <div className="w-[15.3%] min-w-[100px] pl-4 leading-[46px] font-nsKR text-[#565d6d] font-medium text-sm">카테고리</div>
                <div className="w-[42.6%] min-w-[200px] pl-4 leading-[46px] font-nsKR text-[#565d6d] font-medium text-sm">데이터셋</div>
                <div className="w-[15.9%] min-w-[100px] pl-4 leading-[46px] font-nsKR text-[#565d6d] font-medium text-sm">날짜</div>
                <div className="w-[15.9%] min-w-[100px] pl-4 leading-[46px] font-nsKR text-[#565d6d] font-medium text-sm">작업자</div>
                <div className="w-[10.3%] min-w-[80px] pl-4 leading-[46px] font-nsKR text-[#565d6d] font-medium text-sm"></div>
            </div>
            <div>
                {[1, 2, 3, 4, 5].map((v) => {
                    return <DatasetRow key={v} />;
                })}
            </div>
        </div>
    );
};

const DatasetRow = () => {
    return (
        <div className="flex h-[68px]">
            <div className="w-[15.3%] min-w-[100px] pl-4 flex items-center">
                <span className="h-7 bg-[#F2F2FD] rounded-[14px] px-2 font-inter font-normal text-xs leading-7 text-[#636AE8]">New tag</span>
            </div>
            <div className="w-[42.6%] min-w-[200px] pl-4 font-inter flex flex-col justify-center gap-0.5">
                <div className="text-sm leading-[22px] font-normal text-[#171a1f]">Lifeguard</div>
                <div className="font-inter text-xs leading-[20px] font-normal text-[#565d6d]">Sit in elit dolor nulla labore quits a</div>
            </div>
            <div className="w-[15.9%] min-w-[100px] pl-4 font-inter text-sm leading-[22px] font-normal text-[#171a1f] flex items-center">30/03/2024</div>
            <div className="w-[15.9%] min-w-[100px] pl-4 flex items-center gap-2">
                <div className="bg-gray-200 w-9 h-9 rounded-full"></div>
                <div className="font-inter text-sm leading-[22px] font-normal text-[#171a1f]">UserName</div>
            </div>
            <div className="w-[10.3%] min-w-[80px] pl-4 flex items-center gap-1 font-inter text-sm leading-[22px] font-normal text-[#565d6d]">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.00488 12.4897C8.5327 12.6504 9.10954 12.7393 9.71488 12.7393C10.0512 12.7393 10.3778 12.7103 10.693 12.6584L13.1349 13.8793V11.5765C13.8423 10.974 14.2749 10.1857 14.2749 9.31933C14.2749 9.12496 14.2532 8.93458 14.211 8.74933"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M7.42998 1.90433C4.28187 1.90433 1.72998 3.94607 1.72998 6.46433C1.72998 7.48862 2.15748 8.43083 2.86998 9.19178L2.86998 12.1643L5.62479 10.7872C6.19251 10.9388 6.79842 11.0243 7.42998 11.0243C10.5781 11.0243 13.13 8.98259 13.13 6.46433C13.13 3.94607 10.5781 1.90433 7.42998 1.90433Z"
                        stroke="#565D6D"
                        strokeWidth="1.368"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                </svg>
                1
            </div>
        </div>
    );
};
