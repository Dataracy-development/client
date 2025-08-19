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
                <div className="w-[440px] pl-2.5 text-button text-n900 flex flex-col justify-center">{data.title}</div>
                <div className="w-[200px] pl-2.5 flex items-center gap-2">
                    <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
                    <div className="text-button">UserName</div>
                </div>
                <div className="w-[100px] pl-2.5 flex flex-col justify-center text-button text-n900">{data.createdAt.slice(0, 10)}</div>
                <div className="w-[200px] flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1 text-body2 text-n500">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.4409 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z"
                                stroke="#9095A1"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        24
                    </div>
                    <div className="flex items-center gap-1 text-body2 text-n500">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L9.99994 17.6917L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
                                stroke="#9095A1"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        156
                    </div>
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
                        1.2k
                    </div>
                </div>
            </div>
        </Link>
    );
}
