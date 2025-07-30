export default function Content() {
    const sampleData = [
        {
            title: "프로젝트 개요",
            content: "",
        },
        {
            title: "분석 목표",
            content: "",
        },
        {
            title: "주요 성과",
            content: "",
        },
        {
            title: "사용 기술",
            content: "",
        },
        {
            title: "상세 분석과정",
            content: "",
        },
    ];
    return (
        <div className="flex flex-col gap-12 mt-12">
            {sampleData.map((v) => {
                return (
                    <div key={v.title}>
                        <div className="text-h6 mb-5">{v.title}</div>
                        <div className="font-inter text-sm font-normal leading-[22px] text-n900">
                            Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum laboris
                            excepteur culpa eu laborum voluptate exercitation ad irure voluptate. Irure cillum eu aute duis esse ut proident enim occaecat duis dolor consectetur Lorem do. Id sit ex
                            elit culpa aute do culpa officia irure nisi aute do mollit id ut.Sunt aliqua occaecat nostrud eiusmod cupidatat ad ad. Magna esse adipisicing fugiat ullamco nulla deserunt.
                            Consequat quis cupidatat aliqua nostrud enim laborum magna sunt labore. Ea quis est irure anim voluptate exercitation et irure quis minim id aute ullamco id minim aliqua
                            aute consectetur mollit. Quis esse nulla do mollit quis aliqua.Lorem enim cillum
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
