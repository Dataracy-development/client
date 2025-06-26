import { ProjectCard } from "@/app/page";
import Label from "@/components/Label";

export default function ProjectInfo() {
    return (
        <div className="flex-1">
            <Title />
            <Content />
            <AnalysisObjective />
            <KeyAchievements />
            <Skills />
            <DetailedAnalysisProcess />
            <Feedback />
            <RelatedProject />
        </div>
    );
}

const Title = () => {
    return (
        <div className="w-full">
            <div className="w-full h-[255px] bg-blue-100 flex items-center justify-center text-blue-400 rounded-t-2xl">IMG</div>
            <div className="w-full rounded-b-2xl p-5 bg-[#f3f4f6] relative">
                <div className="flex gap-1 mb-4">
                    {["커머스", "실무자", "Python"].map((v) => {
                        return (
                            <Label key={v} type="secondary" className="h-6 py-0 leading-6 rounded-xl">
                                {v}
                            </Label>
                        );
                    })}
                </div>
                <div className="text-[32px] font-bold leading-[48px] text-[#171a1f] mb-[34px] font-nsKR">온라인 쇼핑몰 고객 행동 패턴 분석 및 추천 시스템 구축</div>
                <div className="flex gap-[30px] items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                        <div>
                            <div className="font-inter text-sm leading-[22px] text-[#171a1f] font-bold">이시각화</div>
                            <div className="font-inter text-xs leading-[20px] text-[#171a1f]">데이터 분석가</div>
                        </div>
                    </div>
                    <div className="font-inter text-sm leading-[22px] text-[#9095a1]">3일 전</div>
                </div>

                <div className="absolute top-5 right-3.5">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                        <path
                            d="M19.949 5.08893C17.934 3.07395 14.6669 3.07395 12.6519 5.08893C12.4033 5.33747 12.1875 5.60493 12.0009 5.88615C11.8142 5.60493 11.5975 5.33661 11.3498 5.08893C9.33486 3.07395 6.06772 3.07395 4.05274 5.08893C2.03776 7.10391 2.03776 10.3711 4.05274 12.386L12 20.335L19.949 12.386C21.964 10.3711 21.964 7.10391 19.949 5.08893Z"
                            stroke="#9095A1"
                            strokeWidth="2.064"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-5 right-3.5 flex gap-2.5 items-center">
                    <div className="w-8 flex flex-col items-center justify-center gap-[2.5px] text-xs text-[#636ae8] leading-5 font-normal">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.99023 15.3065C10.6199 15.4983 11.3081 15.6044 12.0302 15.6044C12.4314 15.6044 12.8211 15.5697 13.1971 15.5078L16.1102 16.9644L16.1102 14.2172C16.9541 13.4984 17.4702 12.558 17.4702 11.5244C17.4702 11.2925 17.4444 11.0654 17.3941 10.8444"
                                stroke="#636AE8"
                                strokeWidth="1.632"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.32002 2.69434C5.56438 2.69434 2.52002 5.1301 2.52002 8.13434C2.52002 9.3563 3.03002 10.4803 3.88002 11.3881L3.88002 14.9343L7.16646 13.2915C7.84374 13.4723 8.56658 13.5743 9.32002 13.5743C13.0757 13.5743 16.12 11.1386 16.12 8.13434C16.12 5.1301 13.0757 2.69434 9.32002 2.69434Z"
                                stroke="#636AE8"
                                strokeWidth="1.632"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                        24
                    </div>
                    <div className="w-8 flex flex-col items-center justify-center gap-[2.5px] text-xs text-[#636ae8] leading-5 font-normal">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.99023 15.3065C10.6199 15.4983 11.3081 15.6044 12.0302 15.6044C12.4314 15.6044 12.8211 15.5697 13.1971 15.5078L16.1102 16.9644L16.1102 14.2172C16.9541 13.4984 17.4702 12.558 17.4702 11.5244C17.4702 11.2925 17.4444 11.0654 17.3941 10.8444"
                                stroke="#636AE8"
                                strokeWidth="1.632"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.32002 2.69434C5.56438 2.69434 2.52002 5.1301 2.52002 8.13434C2.52002 9.3563 3.03002 10.4803 3.88002 11.3881L3.88002 14.9343L7.16646 13.2915C7.84374 13.4723 8.56658 13.5743 9.32002 13.5743C13.0757 13.5743 16.12 11.1386 16.12 8.13434C16.12 5.1301 13.0757 2.69434 9.32002 2.69434Z"
                                stroke="#636AE8"
                                strokeWidth="1.632"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                        156
                    </div>
                    <div className="w-8 flex flex-col items-center justify-center gap-[2.5px] text-xs text-[#636ae8] leading-5 font-normal">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.99023 15.3065C10.6199 15.4983 11.3081 15.6044 12.0302 15.6044C12.4314 15.6044 12.8211 15.5697 13.1971 15.5078L16.1102 16.9644L16.1102 14.2172C16.9541 13.4984 17.4702 12.558 17.4702 11.5244C17.4702 11.2925 17.4444 11.0654 17.3941 10.8444"
                                stroke="#636AE8"
                                strokeWidth="1.632"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.32002 2.69434C5.56438 2.69434 2.52002 5.1301 2.52002 8.13434C2.52002 9.3563 3.03002 10.4803 3.88002 11.3881L3.88002 14.9343L7.16646 13.2915C7.84374 13.4723 8.56658 13.5743 9.32002 13.5743C13.0757 13.5743 16.12 11.1386 16.12 8.13434C16.12 5.1301 13.0757 2.69434 9.32002 2.69434Z"
                                stroke="#636AE8"
                                strokeWidth="1.632"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                        1.2k
                    </div>
                </div>
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="mt-5 p-5">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-5 text-[#171a1f]">프로젝트 개요</div>
            <div className="font-inter text-sm font-normal leading-[22px] text-[#171a1f]">
                Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum laboris excepteur culpa
                eu laborum voluptate exercitation ad irure voluptate. Irure cillum eu aute duis esse ut proident enim occaecat duis dolor consectetur Lorem do. Id sit ex elit culpa aute do culpa
                officia irure nisi aute do mollit id ut.Sunt aliqua occaecat nostrud eiusmod cupidatat ad ad. Magna esse adipisicing fugiat ullamco nulla deserunt. Consequat quis cupidatat aliqua
                nostrud enim laborum magna sunt labore. Ea quis est irure anim voluptate exercitation et irure quis minim id aute ullamco id minim aliqua aute consectetur mollit. Quis esse nulla do
                mollit quis aliqua.Lorem enim cillum
            </div>
        </div>
    );
};

const AnalysisObjective = () => {
    return (
        <div className="mt-5 p-5">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-5 text-[#171a1f]">분석 목표</div>
            <div className="font-inter text-sm font-normal leading-[22px] text-[#171a1f]">
                Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum laboris excepteur culpa
                eu laborum voluptate exercitation ad irure voluptate. Irure cillum eu aute duis esse ut proident enim occaecat duis dolor consectetur Lorem do. Id sit ex elit culpa aute do culpa
                officia irure nisi aute do mollit id ut.Sunt aliqua occaecat nostrud eiusmod cupidatat ad ad. Magna esse adipisicing fugiat ullamco nulla deserunt. Consequat quis cupidatat aliqua
                nostrud enim laborum magna sunt labore. Ea quis est irure anim voluptate exercitation et irure quis minim id aute ullamco id minim aliqua aute consectetur mollit. Quis esse nulla do
                mollit quis aliqua.Lorem enim cillum
            </div>
        </div>
    );
};

const KeyAchievements = () => {
    return (
        <div className="mt-5 p-5">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-5 text-[#171a1f]">주요 성과</div>

            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map((v) => {
                    return (
                        <div key={v} className="border border-[#f3f4f6] p-6 rounded-2xl shadow-card flex items-center justify-between">
                            <div className="flex flex-col gap-2">
                                <div className="font-nsKR text-base font-normal leading-[26px] text-[#323743]">KPI Monthly</div>
                                <div className="font-inter font-bold text-[32px] leading-[48px] text-[#636ae8]">72%</div>
                                <div className="font-inter text-base font-bold leading-[26px] text-[#171A1F]">
                                    $152k<span className="text-[#6F7787]">/$220k</span>
                                </div>
                            </div>
                            <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40 0.174316C48.3399 0.174316 56.4711 2.78108 63.2565 7.62998C70.0419 12.4789 75.142 19.3274 77.8434 27.2176C80.5448 35.1078 80.7125 43.6451 78.3229 51.6353C75.9333 59.6255 71.1061 66.669 64.5163 71.7805C57.9265 76.8921 49.9038 79.8161 41.5704 80.1435C33.237 80.4709 25.0096 78.1854 18.0391 73.6066C11.0686 69.0278 5.70355 62.3848 2.69444 54.6068C-0.314671 46.8287 -0.817365 38.3046 1.25667 30.2267L14.8168 33.7084C13.4687 38.959 13.7955 44.4996 15.7514 49.5554C17.7073 54.6111 21.1946 58.9291 25.7254 61.9053C30.2562 64.8815 35.604 66.3671 41.0208 66.1543C46.4375 65.9414 51.6522 64.0409 55.9356 60.7183C60.2189 57.3958 63.3567 52.8176 64.9099 47.624C66.4631 42.4303 66.3541 36.8811 64.5982 31.7525C62.8423 26.6238 59.5272 22.1723 55.1167 19.0205C50.7062 15.8687 45.4209 14.1743 40 14.1743V0.174316Z"
                                    fill="#636AE8"
                                />
                                <path
                                    d="M1.25667 30.2267C3.46432 21.6285 8.46943 14.009 15.4837 8.56812C22.498 3.12728 31.1229 0.174316 40 0.174316V14.1743C34.2299 14.1743 28.6237 16.0937 24.0644 19.6303C19.5051 23.1668 16.2518 28.1195 14.8168 33.7084L1.25667 30.2267Z"
                                    fill="#CED0F8"
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="w-full p-5 bg-[#f3f4f6] mt-[43px]">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-5 text-[#171a1f]">사용 기술</div>
            <div className="font-inter text-sm font-normal leading-[22px] text-[#171a1f]">
                Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum laboris excepteur culpa
                eu laborum
            </div>
        </div>
    );
};

const DetailedAnalysisProcess = () => {
    return (
        <div className="mt-7 p-5">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-5 text-[#171a1f]">상세 분석 과정</div>
            <div className="font-inter text-sm font-normal leading-[22px] text-[#171a1f]">
                Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum laboris excepteur culpa
                eu laborum voluptate exercitation ad irure voluptate. Irure cillum eu aute duis esse ut proident enim occaecat duis dolor consectetur Lorem do. Id sit ex elit culpa aute do culpa
                officia irure nisi aute do mollit id ut.Sunt aliqua occaecat nostrud eiusmod cupidatat ad ad. Magna esse adipisicing fugiat ullamco nulla deserunt. Consequat quis cupidatat aliqua
                nostrud enim laborum magna sunt labore. Ea quis est irure anim voluptate exercitation et irure quis minim id aute ullamco id minim aliqua aute consectetur mollit. Quis esse nulla do
                mollit quis aliqua.Lorem enim cillum
            </div>
        </div>
    );
};

const Feedback = () => {
    return (
        <div className="px-5 pt-2.5 pb-8">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-2.5 text-[#171a1f]">피드백</div>
            <textarea
                className="w-full h-[100px] border border-[#bdc1ca] rounded-[10px] p-3 resize-none focus:outline-none font-inter text-sm leading-[22px] text-[#171a1f]"
                placeholder="Type a message"
            />

            <div className="flex flex-col gap-2 mt-5 relative">
                {[1, 2].map((v) => {
                    return (
                        <div key={v} className="w-full flex items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-blue-100"></div>
                            <div className="flex-1">
                                <div className="font-inter text-sm leading-[22px] font-bold text-[#171a1f]">김데이터</div>
                                <div className="font-inter text-xs leading-[20px] text-[#171A1F]">
                                    Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum
                                    laboris excepteur culpa eu laborum
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div
                    style={{
                        width: "100%",
                        height: "140px",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        background: "linear-gradient(180deg, #FFFFFF00 0%, #FFFFFFFF 100%)",
                        borderRadius: "0px",
                    }}
                ></div>
            </div>

            <div className="mt-5 w-full flex justify-center">
                <button className="h-11 px-4 border border-[#636AE8] rounded-[22px] font-inter text-sm font-normal text-[#636AE8]">+ 모든 댓글 보기</button>
            </div>
        </div>
    );
};

const RelatedProject = () => {
    return (
        <div className="mt-[26px] p-5">
            <div className="font-nsKR text-xl leading-[30px] font-bold mb-5 text-[#171a1f]">관심분야가 같은 사람들의 프로젝트</div>

            <div className="grid grid-cols-3 gap-[45px]">
                {[1, 2, 3].map((v) => {
                    return <ProjectCard key={v} />;
                })}
            </div>
        </div>
    );
};
