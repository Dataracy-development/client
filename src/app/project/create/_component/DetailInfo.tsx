"use client";

import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useCreateProjectStore } from "../store/createProjectStore";

const ToastEditor = dynamic(() => import("@/components/Editor/ToastEditorWrapper"), {
    ssr: false,
    loading: () => <Spinner />,
});

const initialValue = `### **프로젝트 상세 내용을 작성해주세요.**<br/>
<br/>

##### 1\. 문제 제기
<br/>
어떤 문제를 해결하고자 하는지 명확히 설명해주세요.<br/>

> 온라인 쇼핑몰의 매출 증대를 위해서는 고객 개인의 구매 패턴을 정확히 파악하고 개인화된 상품 추천이 필요합니다. 기존의 단순한 인기 상품 추천 방식으로는 고객 만족도와 매출 증대에 한계가 있습니다.


##### 2\. 문제 분석
<br/>
현재 상황을 데이터 기반으로 분석해보세요.<br/>

> 고객별 구매 이력이나 관심 카테고리 반영이 부족해, 개인화된 경험이 제공되지 않습니다.


##### 3\. 가설 설정
<br/>
해결 방안에 대한 가설을 세워보세요.<br/>

> 고객의 구매 이력과 행동 데이터를 기반으로 상품을 개인화 추천하면 **구매 전환율이 최소 10% 증가**할 것이다


##### 4\. 활용 데이터
<br/>
분석에 사용할 데이터를 설명해주세요.<br/>

> **고객 프로필 데이터**: 성별, 연령대, 지역 등 기본 정보`;
export default function DetailInfo() {
    const { setField, errors } = useCreateProjectStore();
    const editorRef = useRef<any>(null);

    return (
        <div>
            <div className="mt-[100px]">
                <h1 className="flex items-center gap-3 text-[28px] font-semibold font-montserrat mb-[30px]">
                    <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.9844 4.84375L26.9062 9.76562C27.125 9.98438 27.125 10.3125 26.9062 10.5312L14.9844 22.4531L9.89844 23C9.24219 23.1094 8.64062 22.5078 8.75 21.8516L9.29688 16.7656L21.2188 4.84375C21.4375 4.625 21.7656 4.625 21.9844 4.84375ZM30.8438 3.58594C31.6641 4.40625 31.6641 5.77344 30.8438 6.59375L28.9297 8.50781C28.7109 8.72656 28.3828 8.72656 28.1641 8.50781L23.2422 3.58594C23.0234 3.36719 23.0234 3.03906 23.2422 2.82031L25.1562 0.90625C25.9766 0.0859375 27.3438 0.0859375 28.1641 0.90625L30.8438 3.58594ZM21 19.2266C21 19.0078 21.0547 18.8438 21.1641 18.7344L23.3516 16.5469C23.7891 16.1641 24.5 16.4375 24.5 17.0391V25.625C24.5 27.1016 23.2969 28.25 21.875 28.25H2.625C1.14844 28.25 0 27.1016 0 25.625V6.375C0 4.95312 1.14844 3.75 2.625 3.75H18.2109C18.8125 3.75 19.0859 4.46094 18.7031 4.89844L16.5156 7.08594C16.4062 7.19531 16.2422 7.25 16.0234 7.25H3.5V24.75H21V19.2266Z"
                            fill="#3F2AFF"
                        />
                    </svg>
                    상세 내용 작성
                </h1>
            </div>

            <div className="text-base font-light text-gray-500 mb-6">
                아래 항목에 맞춰 프로젝트 내용을 작성해주세요&nbsp;<span className="text-red-500">*</span>
            </div>

            <ToastEditor
                editorRef={editorRef}
                placeholder="프로젝트 상세 내용을 작성해주세요."
                initialValue={initialValue}
                onChange={(value) => {
                    console.log("value:::", value);
                    setField("content", value);
                }}
                isErr={errors.content ? true : false}
                errMsg={errors.content}
            />
        </div>
    );
}
