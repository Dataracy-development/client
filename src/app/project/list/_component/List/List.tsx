"use client";

import Pagination from "@/components/Pagination";
import { useState } from "react";
import { ItemProps } from "./_types/type";
import Item from "./Item";

const items: ItemProps[] = [
    {
        id: 1,
        thumbnail: "https://picsum.photos/200/300",
        tags: ["커머스", "실무자", "Python"],
        title: "온라인 쇼핑몰 고객 행동 패턴 분석 및 추천 시스템 구축",
        description: "3년간의 고객 구매 데이터를 활용해 RFM 분석과 협업 필터링을 통한 개인화 추천 시스템을 구축했습니다. 매출 15% 증가라는 실험적 성과를 달성한 프로젝트입니다.",
        isLiked: false,
        userImg: "https://picsum.photos/200/300",
        userName: "윤제혁",
        commentCnt: 10,
        likedCnt: 10,
        viewCnt: 10,
    },
    {
        id: 2,
        thumbnail: "https://picsum.photos/200/300",
        tags: ["헬스케어", "초심자", "R"],
        title: "병원 대기시간 예측 모델링을 통한 환자 만족도 개선",
        description: "서울대병원 외래진료 데이터를 활용한 대기시간 예측 프로젝트입니다. Random Forest와 XGBoost를 비교 분석하여 최적의 모델을 선정했습니다.",
        isLiked: false,
        userImg: "https://picsum.photos/200/300",
        userName: "박준형",
        commentCnt: 10,
        likedCnt: 10,
        viewCnt: 10,
    },
    {
        id: 3,
        thumbnail: "https://picsum.photos/200/300",
        tags: ["교통", "전문가", "Python"],
        title: "서울시 지하철 혼잡도 실시간 대시보드 구축",
        description: "지하철 승하차 데이터와 실시간 운행정보를 결합하여 혼잡도를 예측하는 대시보드를 만들었습니다. Streamlit과 Plotly를 활용한 인터랙티브 시각화가 핵심입니다.",
        isLiked: false,
        userImg: "https://picsum.photos/200/300",
        userName: "부형석",
        commentCnt: 10,
        likedCnt: 10,
        viewCnt: 10,
    },
    {
        id: 4,
        thumbnail: "https://picsum.photos/200/300",
        tags: ["금융", "실무자", "SQL"],
        title: "신용카드 이상거래 탐지 시스템 개발",
        description: "머신러닝 기반 이상거래 탐지 모델을 개발하여 금융사기를 예방하는 프로젝트입니다. 정확도 95% 이상의 성능을 달성했으며, 실제 업무에 적용 중입니다.",
        isLiked: false,
        userImg: "https://picsum.photos/200/300",
        userName: "심동화",
        commentCnt: 10,
        likedCnt: 10,
        viewCnt: 10,
    },
    {
        id: 5,
        thumbnail: "https://picsum.photos/200/300",
        tags: ["엔터테인먼트", "초심자", "Python"],
        title: "넷플릭스 콘텐츠 추천 알고리즘 분석",
        description: "넷플릭스 데이터를 크롤링하여 콘텐츠 추천 패턴을 분석했습니다. 장르별 선호도와 시청 패턴을 시각화하여 인사이트를 도출했습니다.",
        isLiked: false,
        userImg: "https://picsum.photos/200/300",
        userName: "홍길동",
        commentCnt: 10,
        likedCnt: 10,
        viewCnt: 10,
    },
];

export default function List() {
    const [page, setPage] = useState(1);
    const [viewPerPage, setViewPerPage] = useState(10);
    const [total, setTotal] = useState(100);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    return (
        <div className="flex flex-col gap-5">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}

            <div className="flex justify-center mt-5">
                <Pagination page={page} viewPerPage={viewPerPage} total={total} onChange={handlePageChange} />
            </div>
        </div>
    );
}
