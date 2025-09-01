import { Dataset } from "@/types/commonTypes";
import Image from "next/image";
import Link from "next/link";

export default function Item({ item }: { item: Dataset }) {
    return (
        <Link href={`/dataset/${item.id}`} className="group">
            <div className="p-6 border border-n300 rounded-2xl flex items-center gap-5 group-hover:border-n400 group-hover:shadow-sm transition-all duration-150">
                <div className="w-[120px] h-[180px] bg-gray-300 rounded-lg text-center flex items-center justify-center text-sm text-gray-500">
                    {item.dataThumbnailUrl ? <Image src={item.dataThumbnailUrl} alt={item.title} width={120} height={180} className="object-cover" /> : "NO IMAGE"}
                </div>
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
                    </div>
                </div>
            </div>
        </Link>
    );
}
