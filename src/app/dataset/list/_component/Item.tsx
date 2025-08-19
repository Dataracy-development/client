import { Dataset } from "@/types/commonTypes";
import Link from "next/link";

export default function Item({ item }: { item: Dataset }) {
    return (
        <Link href={`/dataset/${item.id}`} className="group">
            <div className="p-6 border border-n300 rounded-2xl flex items-center gap-5 group-hover:border-n400 group-hover:shadow-sm transition-all duration-150">
                <div className="w-[120px] h-[180px] bg-gray-300 rounded-lg text-center flex items-center justify-center text-sm text-gray-500">데이터 썸네일</div>
                <div className="flex-1 h-[174px] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-1 mb-3">
                            {[item.topicLabel, item.dataSourceLabel, item.dataTypeLabel].map((v) => {
                                return (
                                    <div key={v} className={`w-fit h-[26px] px-2 text-caption leading-[26px] rounded-2xl bg-n300 text-primary`}>
                                        {v}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-h6">{item.title}</div>
                            <div className="text-body2">{item.description}</div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-end">
                        <div className="text-xs text-[#999] flex items-center gap-4">
                            <div>등록일: {item.createdAt.slice(0, 10)}</div>
                            <div>행 수: {item.rowCount}</div>
                            <div>열 수: {item.columnCount}</div>
                            <div>다운로드 수: {item.downloadCount}</div>
                        </div>

                        <button className="h-9 px-4 flex items-center gap-1.5 text-sm font-inter text-[#3F2AFF] border border-[#3F2AFF] rounded-md">
                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.25 14.75V2.0625C0.25 1.35156 0.824219 0.75 1.5625 0.75H9.4375C10.1484 0.75 10.75 1.35156 10.75 2.0625V14.75L5.5 11.6875L0.25 14.75Z" fill="#3F2AFF" />
                            </svg>
                            저장
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
