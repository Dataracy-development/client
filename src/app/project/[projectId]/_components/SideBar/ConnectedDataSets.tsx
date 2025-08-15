import { DatasetIcon, DomainIcon, UsageIcon } from "@/components/icons/icons";
import { Dataset } from "@/types/commonTypes";

export default function ConnectedDataSets({ data }: { data: Dataset[] | null }) {
    const handleDatasetClick = (datasetId: number) => {
        // TODO: 데이터셋 상세 페이지로 이동
        console.log(`데이터셋 ${datasetId} 클릭됨`);
    };

    return (
        <div className="w-full p-6 border border-gray-200 rounded-2xl mt-8">
            <div className="flex items-center gap-2 mb-6">
                <DatasetIcon />
                <h3 className="text-sub1 font-bold text-[#333]">연결된 데이터셋</h3>
                <span className="text-body2 text-[#666] ml-auto">({data?.length})</span>
            </div>

            <div className="space-y-3">
                {data?.map((dataset) => (
                    <div
                        key={dataset.id}
                        onClick={() => handleDatasetClick(dataset.id)}
                        className="group p-4 bg-[#F8F9FA] rounded-xl border border-[#E9ECEF] hover:border-[#3F2AFF] hover:bg-[#F0F2FF] hover:shadow-md transition-all duration-200 cursor-pointer relative overflow-hidden"
                    >
                        {/* 클릭 가능함을 나타내는 오른쪽 화살표 */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#3F2AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="flex items-start justify-between mb-3 pr-6">
                            <h4 className="text-body1 font-semibold text-[#333] leading-5 group-hover:text-[#3F2AFF] transition-colors duration-200">{dataset.title}</h4>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <DomainIcon />
                                <span className="text-body2 text-[#666]">{dataset.topicLabel}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <UsageIcon />
                                <span className="text-body2 text-[#666]">활용 {dataset.countConnectedProjects}회</span>
                            </div>
                        </div>

                        {/* 클릭 영역을 명확히 하기 위한 미묘한 배경 효과 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#3F2AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                    </div>
                ))}
            </div>

            {data?.length === 0 && (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#F1F3F4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <DatasetIcon />
                    </div>
                    <p className="text-body2 text-[#666]">연결된 데이터셋이 없습니다</p>
                </div>
            )}
        </div>
    );
}
