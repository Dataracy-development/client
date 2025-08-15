import Link from "next/link";

export default function Item() {
    return (
        <Link href={`/dataset/1`} className="group">
            <div className="p-6 border border-n300 rounded-2xl flex items-center gap-5 group-hover:border-n400 group-hover:shadow-sm transition-all duration-150">
                <div className="w-[120px] h-[180px] bg-gray-300 rounded-lg text-center flex items-center justify-center text-sm text-gray-500">데이터 썸네일</div>
                <div className="flex-1 h-[174px] flex flex-col justify-between">
                    <div>
                        <div className="text-h6 mb-3 text-[#333]">COVID-19 글로벌 확진자 데이터 (2020-2024)</div>
                        <div className="text-sm leading-[21px] text-[#666] mb-5">
                            전 세계 COVID-19 확진자 데이터를 포함한 종합 데이터셋입니다. 국가별, 지역별, 일별 확진자 수, 사망자 수, 회복자 수 등의 정보를 제공합니다.
                        </div>
                        <div className="w-full flex justify-between items-center text-sm text-[#666]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-[#3F2AFF] rounded-full"></div>
                                <div>김데이터</div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.6328 1.47266C15.3555 2.94922 15.4375 5.57422 13.9062 7.16016L8.60156 12.6289C8.27344 12.9844 7.69922 12.9844 7.37109 12.6289L2.06641 7.16016C0.535156 5.57422 0.617188 2.94922 2.33984 1.47266C3.84375 0.1875 6.08594 0.433594 7.45312 1.85547L8 2.40234L8.51953 1.85547C9.91406 0.433594 12.1289 0.1875 13.6328 1.47266Z"
                                            fill="#666666"
                                        />
                                    </svg>
                                    234
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.625C11.8555 0.625 15 3.19531 15 6.3125C15 9.45703 11.8555 12 8 12C6.93359 12 5.94922 11.8086 5.04688 11.4805C4.39062 12.0273 3.02344 12.875 1.21875 12.875C1.10938 12.875 1.05469 12.8477 1 12.7656C0.972656 12.6836 1 12.5742 1.05469 12.5195C1.05469 12.4922 2.20312 11.2891 2.55859 9.89453C1.57422 8.91016 1 7.67969 1 6.3125C1 3.19531 4.11719 0.625 8 0.625Z"
                                            fill="#666666"
                                        />
                                    </svg>
                                    45
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.90625 0.75H8.09375C8.44922 0.75 8.75 1.05078 8.75 1.40625V6H11.1289C11.6211 6 11.8672 6.60156 11.5117 6.95703L7.35547 11.1133C7.16406 11.3047 6.80859 11.3047 6.61719 11.1133L2.46094 6.95703C2.10547 6.60156 2.35156 6 2.84375 6H5.25V1.40625C5.25 1.05078 5.52344 0.75 5.90625 0.75ZM14 11.0312V14.0938C14 14.4766 13.6992 14.75 13.3438 14.75H0.65625C0.273438 14.75 0 14.4766 0 14.0938V11.0312C0 10.6758 0.273438 10.375 0.65625 10.375H4.64844L5.98828 11.7148C6.53516 12.2891 7.4375 12.2891 7.98438 11.7148L9.32422 10.375H13.3438C13.6992 10.375 14 10.6758 14 11.0312ZM10.6094 13.4375C10.6094 13.1367 10.3633 12.8906 10.0625 12.8906C9.76172 12.8906 9.51562 13.1367 9.51562 13.4375C9.51562 13.7383 9.76172 13.9844 10.0625 13.9844C10.3633 13.9844 10.6094 13.7383 10.6094 13.4375ZM12.3594 13.4375C12.3594 13.1367 12.1133 12.8906 11.8125 12.8906C11.5117 12.8906 11.2656 13.1367 11.2656 13.4375C11.2656 13.7383 11.5117 13.9844 11.8125 13.9844C12.1133 13.9844 12.3594 13.7383 12.3594 13.4375Z"
                                            fill="#666666"
                                        />
                                    </svg>
                                    1,234
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-end">
                        <div className="text-xs text-[#999] flex items-center gap-4">
                            <div>등록일: 2024.01.15</div>
                            <div>파일 크기: 2.3MB</div>
                            <div>행 수: 45,678</div>
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
