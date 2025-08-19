"use client";

import { onGetDataSourcesApi, onGetDomainApi, onGetLevelApi } from "@/apis/referenceDataApis";
import Input from "@/components/Input";
import Selectbox from "@/components/Selectbox";
import Spinner from "@/components/Spinner";
import Textarea from "@/components/Textarea";
import { useQueries } from "@tanstack/react-query";
import "flatpickr/dist/themes/material_green.css";
import dynamic from "next/dynamic";
import { useCallback, useMemo } from "react";
import { CreateDatasetWebRequest, useCreateDatasetStore } from "../store/createDatasetStore";

const DateRangePicker = dynamic(() => import("@/components/DatePicker/DatePickerWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

export default function BaseInfo() {
    const { formData, setFormData, formDataErrors, setFormDataError } = useCreateDatasetStore();

    const results = useQueries({
        queries: [
            {
                queryKey: ["domain"], // 도메인
                queryFn: onGetDomainApi,
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

    const { domainOptions, dataSourceOptions, authorLevelOptions } = useMemo(() => {
        if (!results[0].data || !results[1].data || !results[2].data) {
            return {
                domainOptions: [],
                dataSourceOptions: [],
                authorLevelOptions: [],
            };
        }

        return {
            domainOptions: results[0].data.data.topics.map((item) => ({
                value: item.value,
                label: item.label,
                id: item.id, // id도 함께 저장
            })),
            dataSourceOptions: results[1].data.data.dataSources.map((item) => ({
                value: item.value,
                label: item.label,
                id: item.id,
            })),
            authorLevelOptions: results[2].data.data.authorLevels.map((item) => ({
                value: item.value,
                label: item.label,
                id: item.id,
            })),
        };
    }, [results[0].data, results[1].data, results[2].data]);

    // 콜백 함수 메모이제이션
    const onChangeSelect = useCallback(
        (target: keyof CreateDatasetWebRequest, value: number | null) => {
            setFormDataError(target, "");
            setFormData(target, value);
        },
        [setFormDataError, setFormData]
    );

    // 옵션 검색을 위한 Map 생성 (성능 향상 위함 O(N) -> O(1))
    const domainMap = useMemo(() => {
        return new Map(domainOptions.map((item) => [item.value, item.id]));
    }, [domainOptions]);

    const dataSourceMap = useMemo(() => {
        return new Map(dataSourceOptions.map((item) => [item.value, item.id]));
    }, [dataSourceOptions]);

    const authorLevelMap = useMemo(() => {
        return new Map(authorLevelOptions.map((item) => [item.value, item.id]));
    }, [authorLevelOptions]);

    if (!results[0].data || !results[1].data || !results[2].data) return null;
    return (
        <div className="flex flex-col gap-[30px]">
            <Input
                value={formData.title}
                onChange={(e) => {
                    setFormDataError("title", "");
                    setFormData("title", e.target.value);
                }}
                label="데이터셋 제목"
                type="text"
                placeholder="데이터셋 제목을 입력해주세요"
                isRequired={true}
                isErr={!!formDataErrors.title}
                errMsg={formDataErrors.title}
            />

            <div className="grid grid-cols-2 gap-[30px]">
                <Selectbox
                    label="도메인"
                    placeholder="도메인을 선택해주세요"
                    options={domainOptions}
                    isRequired={true}
                    onChange={(value) => onChangeSelect("topicId", domainMap.get(value) || null)}
                    isErr={!!formDataErrors.topicId}
                    errMsg={formDataErrors.topicId}
                />

                <Selectbox
                    label="데이터 출처"
                    placeholder="데이터 출처를 선택해주세요"
                    options={dataSourceOptions}
                    isRequired={true}
                    onChange={(value) => onChangeSelect("dataSourceId", dataSourceMap.get(value) || null)}
                    isErr={!!formDataErrors.dataSourceId}
                    errMsg={formDataErrors.dataSourceId}
                />
                <Selectbox
                    label="데이터 유형"
                    placeholder="데이터 유형을 선택해주세요"
                    options={authorLevelOptions}
                    isRequired={true}
                    onChange={(value) => onChangeSelect("dataTypeId", authorLevelMap.get(value) || null)}
                    isErr={!!formDataErrors.dataTypeId}
                    errMsg={formDataErrors.dataTypeId}
                />

                <div>
                    <DateRangePicker
                        label="분석 기간"
                        isRequired={true}
                        onChange={(startDate, endDate) => {
                            if (!startDate || !endDate) return;
                            setFormDataError("startDate", "");
                            setFormDataError("endDate", "");
                            setFormData("startDate", startDate.toISOString().split("T")[0]);
                            setFormData("endDate", endDate.toISOString().split("T")[0]);
                        }}
                    />
                </div>
            </div>

            <Textarea
                label="상세 내용"
                isRequired={true}
                value={formData.description}
                onChange={(e) => {
                    setFormDataError("description", "");
                    setFormData("description", e.target.value);
                }}
                placeholder="상세 내용을 입력해주세요"
                rows={10}
                isErr={!!formDataErrors.description}
                errMsg={formDataErrors.description}
            />
        </div>
    );
}
