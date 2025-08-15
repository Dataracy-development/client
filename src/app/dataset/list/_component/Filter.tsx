"use client";

import Radio from "@/components/Radio";
import { useState } from "react";

interface FilterItem {
    category: string;
    items: {
        id: number;
        value: string;
        label: string;
    }[];
}

export default function Filter() {
    // const { setTopicId, setAnalysisPurposeId, setDataSourceId, setAuthorLevelId } = useProjectListStore();

    const [domains, setDomains] = useState<FilterItem>({
        category: "도메인",
        items: [
            { id: 0, value: "전체", label: "전체" },
            { id: 1, value: "commerce", label: "커머스" },
            { id: 2, value: "food", label: "식품" },
            { id: 3, value: "it", label: "IT" },
            { id: 4, value: "tourism", label: "관광" },
            { id: 5, value: "education", label: "교육" },
            { id: 6, value: "healthcare", label: "헬스케어" },
            { id: 7, value: "local", label: "지역" },
            { id: 8, value: "marketing", label: "마케팅" },
        ],
    });
    const [dataSources, setDataSources] = useState<FilterItem>({
        category: "데이터 형태",
        items: [
            { id: 0, value: "전체", label: "전체" },
            { id: 1, value: "public", label: "공공데이터" },
            { id: 2, value: "company", label: "자사 데이터" },
            { id: 3, value: "log", label: "로그 데이터" },
            { id: 4, value: "life", label: "생활형 데이터" },
            { id: 5, value: "web", label: "웹수집 데이터" },
        ],
    });
    const [dataTypes, setDataTypes] = useState<FilterItem>({
        category: "데이터 유형",
        items: [
            { id: 0, value: "전체", label: "전체" },
            { id: 1, value: "csv", label: "CSV" },
            { id: 2, value: "xlsx", label: "XLSX" },
            { id: 3, value: "json", label: "JSON" },
        ],
    });
    const [years, setYears] = useState<FilterItem>({
        category: "연도",
        items: [
            { id: 0, value: "전체", label: "전체" },
            { id: 1, value: "2024", label: "2024" },
            { id: 2, value: "2023", label: "2023" },
            { id: 3, value: "2022", label: "2022" },
            { id: 4, value: "2021", label: "2021" },
        ],
    });

    // const results = useQueries({
    //     queries: [
    //         {
    //             queryKey: ["domain"], // 도메인
    //             queryFn: onGetDomainApi,
    //         },
    //         {
    //             queryKey: ["analysisPurpose"], // 분석목적
    //             queryFn: onGetAnalysisPurposesApi,
    //         },
    //         {
    //             queryKey: ["dataSource"], // 데이터 출처
    //             queryFn: onGetDataSourcesApi,
    //         },
    //         {
    //             queryKey: ["authorLevel"], // 작성자 유형
    //             queryFn: onGetLevelApi,
    //         },
    //     ],
    // });

    // useEffect(() => {
    //     if (results[0].data) {
    //         setDomains({
    //             category: "도메인",
    //             items: [{ id: 0, value: "전체", label: "전체" }, ...results[0].data.data.topics.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
    //         });
    //     }
    //     if (results[1].data) {
    //         setAnalysisPurposes({
    //             category: "분석 목적",
    //             items: [{ id: 0, value: "전체", label: "전체" }, ...results[1].data.data.analysisPurposes.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
    //         });
    //     }
    //     if (results[2].data) {
    //         setDataSources({
    //             category: "데이터 출처",
    //             items: [{ id: 0, value: "전체", label: "전체" }, ...results[2].data.data.dataSources.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
    //         });
    //     }
    //     if (results[3].data) {
    //         setAuthorLevels({
    //             category: "작성자 유형",
    //             items: [{ id: 0, value: "전체", label: "전체" }, ...results[3].data.data.authorLevels.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
    //         });
    //     }
    // }, [results[0].data, results[1].data, results[2].data, results[3].data]);

    const onChange = (category: string, id: number) => {
        // if (category === "도메인") setTopicId(id);
        // else if (category === "분석 목적") setAnalysisPurposeId(id);
        // else if (category === "데이터 출처") setDataSourceId(id);
        // else if (category === "작성자 유형") setAuthorLevelId(id);
    };

    // console.log(results[0].data);

    return (
        <div className="w-[200px] shadow-filter p-4 rounded-[10px]">
            {[domains, dataTypes, dataSources, years].map((item, idx) => {
                return (
                    <div key={item.category}>
                        <FilterItems items={item} onChange={onChange} />
                        {idx !== [domains, dataTypes, dataSources, years].length - 1 && <div className="w-full h-[1px] bg-n200 mt-[30px] mb-5"></div>}
                    </div>
                );
            })}
        </div>
    );
}

const FilterItems = ({ items, onChange: onChangeProps }: { items: FilterItem; onChange: (category: string, id: number) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = items.items.find((item) => item.value === e.target.value)?.id;
        if (id !== undefined) onChangeProps(items.category, id);
    };

    return (
        <div>
            <div className="flex items-center justify-between cursor-pointer text-sub1 mb-5" onClick={() => setIsOpen(!isOpen)}>
                {items.category}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${isOpen ? 0 : -180}deg)`, transition: "transform 0.2s" }}>
                    <path d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z" fill="#1D1B20" />
                </svg>
            </div>
            {isOpen && (
                <div className="flex flex-col gap-2">
                    {items.items.map((item, idx) => (
                        <Radio key={item.value} value={item.value} name={items.category} label={item.label} checked={idx === 0} onChange={onChange} />
                    ))}
                </div>
            )}
        </div>
    );
};
