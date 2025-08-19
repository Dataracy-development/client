import Button from "@/components/Button";
import { Dataset } from "@/types/commonTypes";
import { useRouter } from "next/navigation";
import DatasetRow from "./DatasetRow";

export default function PopularDatasets({ data }: { data: Dataset[] }) {
    const router = useRouter();
    return (
        <div className="bg-n200 py-[80px]">
            <div className="max-w-[1200px] w-full mx-auto">
                <div className="text-h3 mb-2.5 text-center">인기 데이터셋</div>
                <div className="text-sub1 text-center">데이터러시의 인기 프로젝트를 살펴보고 직접 참여하세요</div>

                <div className="mt-10">
                    <div className="flex bg-n900 h-[50px] mb-1">
                        <div className="w-[280px] text-button text-white leading-[50px] text-center">카테고리</div>
                        <div className="w-[440px] pl-2.5 text-button text-white leading-[50px]">데이터셋</div>
                        <div className="w-[200px] pl-2.5 text-button text-white leading-[50px]">작성자</div>
                        <div className="w-[100px] pl-2.5 text-button text-white leading-[50px]">업데이트일</div>
                        <div className="w-[200px] text-button text-white leading-[50px] text-center">Icon</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        {data.map((v) => {
                            return <DatasetRow key={v.id} data={v} />;
                        })}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <Button label="더 살펴보기" className="w-[140px] h-[60px] rounded-2xl" onClick={() => router.push("/dataset/list")} />
                </div>
            </div>
        </div>
    );
}
