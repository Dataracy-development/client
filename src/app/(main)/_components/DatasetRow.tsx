import { Dataset } from "@/types/commonTypes";
import Link from "next/link";

export default function DatasetRow({ data }: { data: Dataset }) {
    return (
        <Link href={`/dataset/${data.id}`}>
            <div className="flex h-[68px] bg-white">
                <div className="w-[280px] pl-4 flex items-center gap-1">
                    {[data.topicLabel, data.dataSourceLabel, data.dataTypeLabel].map((v) => {
                        return (
                            <div key={v} className="text-caption px-2 h-[26px] leading-[26px] bg-n300 rounded-2xl text-primary">
                                {v}
                            </div>
                        );
                    })}
                </div>
                <div className="w-[640px] pl-2.5 text-button text-n900 flex flex-col justify-center">{data.title}</div>
                <div className="w-[100px] pl-2.5 flex flex-col justify-center text-button text-n900">{data.createdAt.slice(0, 10)}</div>
                <div className="w-[200px] flex items-center justify-center">
                    <div className="flex items-center gap-1 text-body2 text-n500">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
                                stroke="#9095A1"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {data.downloadCount}
                    </div>
                </div>
            </div>
        </Link>
    );
}
