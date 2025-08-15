"use client";

import BannerImg from "@/assets/imgs/BannerImg1.png";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {
    const router = useRouter();
    return (
        <div className="w-full h-[580px] bg-primary flex justify-center items-center text-white">
            <div className="flex gap-[38px] items-center relative left-[52px]">
                <div className="text-white w-[414px]">
                    <div className="text-h2 mb-2.5">
                        분석에 논리를
                        <br />
                        더하는 사람들
                    </div>
                    <div className="text-sub1 mb-8">
                        데이터 분석 전문가들의 실제 프로젝트를 살펴보고
                        <br />
                        피드백을 통해 함께 성장하세요
                    </div>
                    <div className="flex gap-2">
                        <Button label="프로젝트 등록하기" className="w-[130px]" onClick={() => router.push("/project/create")} />
                        <Button label="프로젝트 둘러보기" className="w-[130px]" onClick={() => router.push("/project/list")} />
                    </div>
                </div>
                <Image src={BannerImg} alt="banner" className="flex-1 h-[580px] object-cover" />
            </div>
        </div>
    );
}
