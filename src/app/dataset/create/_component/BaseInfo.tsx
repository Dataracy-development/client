"use client";

import { onGetAnalysisPurposesApi, onGetDataSourcesApi, onGetDomainApi, onGetLevelApi } from "@/apis/referenceDataApis";
import { CreateProjectFormData } from "@/app/project/create/store/createProjectStore";
import Input from "@/components/Input";
import Selectbox from "@/components/Selectbox";
import Spinner from "@/components/Spinner";
import { useQueries } from "@tanstack/react-query";
import dynamic from "next/dynamic";
// import { CreateProjectFormData, useCreateProjectStore } from "../store/createProjectStore";
import "flatpickr/dist/themes/material_green.css";

const DateRangePicker = dynamic(() => import("@/components/DatePicker/DatePickerWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

export default function BaseInfo() {
    // const { formData, setField, errors, setError } = useCreateProjectStore();

    const results = useQueries({
        queries: [
            {
                queryKey: ["domain"], // 도메인
                queryFn: onGetDomainApi,
            },
            {
                queryKey: ["analysisPurpose"], // 목적
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

    const onChangeSelect = (target: keyof CreateProjectFormData, value: number | number[] | null) => {
        // const field = target as keyof typeof formData;
        // setError(field, "");
        // setField(field, value);
    };

    if (!results[0].data || !results[1].data || !results[2].data || !results[3].data) return null;
    return (
        <div className="flex flex-col gap-[30px]">
            <Input
                value={""}
                onChange={(e) => {
                    // setError("title", "");
                    // setField("title", e.target.value);
                }}
                label="데이터셋 제목"
                type="text"
                placeholder="데이터셋 제목을 입력해주세요"
                isRequired={true}
                // isErr={!!errors.title}
                // errMsg={errors.title}
            />

            <div className="grid grid-cols-2 gap-[30px]">
                <Selectbox
                    label="도메인"
                    placeholder="도메인을 선택해주세요"
                    options={results[0].data.data.topics.map((item) => ({ value: item.value, label: item.label })) || []}
                    isRequired={true}
                    onChange={(value) => onChangeSelect("topicId", results[0].data.data.topics.find((item) => item.value === value)?.id || null)}
                    // isErr={!!errors.topicId}
                    // errMsg={errors.topicId}
                />

                <Selectbox
                    label="데이터 출처"
                    placeholder="데이터 출처를 선택해주세요"
                    options={results[2].data.data.dataSources.map((item) => ({ value: item.value, label: item.label })) || []}
                    isRequired={true}
                    onChange={(value) => onChangeSelect("dataSourceId", results[2].data.data.dataSources.find((item) => item.value === value)?.id || null)}
                    // isErr={!!errors.dataSourceId}
                    // errMsg={errors.dataSourceId}
                />
                <Selectbox
                    label="데이터 유형"
                    placeholder="데이터 유형을 선택해주세요"
                    options={results[3].data.data.authorLevels.map((item) => ({ value: item.value, label: item.label })) || []}
                    isRequired={true}
                    onChange={(value) => onChangeSelect("authorLevelId", results[3].data.data.authorLevels.find((item) => item.value === value)?.id || null)}
                    // isErr={!!errors.authorLevelId}
                    // errMsg={errors.authorLevelId}
                />

                <div>
                    <DateRangePicker
                        label="분석 기간"
                        isRequired={true}
                        onChange={(startDate, endDate) => {
                            // 날짜 변경 처리 로직
                            console.log("Start Date:", startDate, "End Date:", endDate);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
