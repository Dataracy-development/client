"use client";

import { onGetAnalysisPurposesApi, onGetDataSourcesApi, onGetDomainApi, onGetLevelApi } from "@/apis/referenceDataApis";
import Radio from "@/components/Radio";
import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useProjectListStore from "../../store/projectListStore";

interface FilterItem {
    category: string;
    items: {
        id: number;
        value: string;
        label: string;
    }[];
}

export default function Filter() {
    const { setTopicId, setAnalysisPurposeId, setDataSourceId, setAuthorLevelId } = useProjectListStore();

    const [domains, setDomains] = useState<FilterItem>({
        category: "도메인",
        items: [],
    });
    const [analysisPurposes, setAnalysisPurposes] = useState<FilterItem>({
        category: "분석 목적",
        items: [],
    });
    const [dataSources, setDataSources] = useState<FilterItem>({
        category: "데이터 출처",
        items: [],
    });
    const [authorLevels, setAuthorLevels] = useState<FilterItem>({
        category: "작성자 유형",
        items: [],
    });

    const results = useQueries({
        queries: [
            {
                queryKey: ["domain"], // 도메인
                queryFn: onGetDomainApi,
            },
            {
                queryKey: ["analysisPurpose"], // 분석목적
                queryFn: onGetAnalysisPurposesApi,
            },
            {
                queryKey: ["dataSource"], // 데이터 출처
                queryFn: onGetDataSourcesApi,
            },
            {
                queryKey: ["authorLevel"], // 작성자 유형
                queryFn: onGetLevelApi,
            },
        ],
    });

    useEffect(() => {
        if (results[0].data) {
            setDomains({
                category: "도메인",
                items: [{ id: 0, value: "전체", label: "전체" }, ...results[0].data.data.topics.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
            });
        }
        if (results[1].data) {
            setAnalysisPurposes({
                category: "분석 목적",
                items: [{ id: 0, value: "전체", label: "전체" }, ...results[1].data.data.analysisPurposes.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
            });
        }
        if (results[2].data) {
            setDataSources({
                category: "데이터 출처",
                items: [{ id: 0, value: "전체", label: "전체" }, ...results[2].data.data.dataSources.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
            });
        }
        if (results[3].data) {
            setAuthorLevels({
                category: "작성자 유형",
                items: [{ id: 0, value: "전체", label: "전체" }, ...results[3].data.data.authorLevels.map((item) => ({ id: item.id, value: item.value, label: item.label }))],
            });
        }
    }, [results[0].data, results[1].data, results[2].data, results[3].data]);

    const onChange = (category: string, id: number) => {
        if (category === "도메인") setTopicId(id);
        else if (category === "분석 목적") setAnalysisPurposeId(id);
        else if (category === "데이터 출처") setDataSourceId(id);
        else if (category === "작성자 유형") setAuthorLevelId(id);
    };

    return (
        <div className="w-[200px] shadow-filter p-4 rounded-[10px]">
            {[domains, analysisPurposes, dataSources, authorLevels].map((item, idx) => {
                return (
                    <div key={item.category}>
                        <FilterItems items={item} onChange={onChange} />
                        {idx !== [domains, analysisPurposes, dataSources, authorLevels].length - 1 && <div className="w-full h-[1px] bg-n200 mt-[30px] mb-5"></div>}
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
