export default function Continue() {
    const continueProjects = [
        {
            id: 1,
            title: "고객 이탈 예측 모델 개선을 위한 피쳐 엔지니어링 연구",
            author: "김데이터",
        },
        {
            id: 2,
            title: "대용량 데이터 처리 최적화 및 성능 분석",
            author: "이분석",
        },
        {
            id: 3,
            title: "실시간 추천 시스템 구축 프로젝트",
            author: "박개발",
        },
    ];

    return (
        <div className="mt-12 pt-12 border-t border-n300">
            <div className="flex items-center gap-3 mb-4">
                <h2 className="text-h6">이어가기</h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{continueProjects.length}개 프로젝트</span>
            </div>

            <div className="grid gap-4">
                {continueProjects.map((project) => (
                    <div key={project.id} className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="text-h6 font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-body2 text-gray-600">{project.author}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
