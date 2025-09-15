import { Project } from "@/types/commonTypes";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ data }: { data: Project }) {
    return (
        <Link href={`/project/${data.id}`} className="group">
            <div className="h-[570px] bg-white rounded-2xl border border-n500 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-n400">
                <div className="w-full h-[285px] rounded-t-2xl bg-gray-200 relative overflow-hidden">
                    <Image
                        src={data.projectThumbnailUrl || "/window.svg"}
                        alt={data.title ? `${data.title} thumbnail` : "project-thumbnail"}
                        fill
                        className="absolute inset-0 object-cover transition-transform duration-500 ease-out group-hover:scale-105 z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={false}
                    />
                    <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                        {[data.topicLabel, data.analysisPurposeLabel, data.authorLevelLabel, data.dataSourceLabel].filter(Boolean).map((v) => {
                            return (
                                <div className="w-fit px-2 h-6 text-xs leading-6 text-primary/90 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm" key={v}>
                                    {v}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="px-5 py-[18px] flex-1 flex flex-col justify-between">
                    <div>
                        <div className="text-h5 mb-3 line-clamp-1">{data.title}</div>
                        <div className="text-body2 mb-6 text-n700/90">{data.content.length > 200 ? data.content.slice(0, 200) + "..." : data.content}</div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <div className="mt-1.5 flex gap-3 items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-caption text-n700">
                                    {/* Avatar placeholder */}
                                    {data.creatorName?.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-caption mb-[2px] text-n700/70">{data.occupationLabel || ""}</div>
                                    <div className="text-button group-hover:text-primary transition-colors">{data.creatorName}</div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 flex flex-col justify-center items-center gap-[5px]">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.6975 11.5C21.701 12.8199 21.3926 14.1219 20.7975 15.3C20.0919 16.7118 19.0073 17.8992 17.665 18.7293C16.3227 19.5594 14.7758 19.9994 13.1975 20C11.8776 20.0035 10.5756 19.6951 9.39751 19.1L3.69751 21L5.59751 15.3C5.00244 14.1219 4.69407 12.8199 4.69751 11.5C4.69812 9.92179 5.13812 8.37488 5.96823 7.03258C6.79834 5.69028 7.98576 4.6056 9.39751 3.90003C10.5756 3.30496 11.8776 2.99659 13.1975 3.00003H13.6975C15.7819 3.11502 17.7506 3.99479 19.2267 5.47089C20.7027 6.94699 21.5825 8.91568 21.6975 11V11.5Z"
                                            stroke="#171A1F"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <div className="text-body2">{data.commentCount}</div>
                                </div>
                                <div className="w-8 flex flex-col justify-center items-center gap-[5px]">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_222_303)">
                                            <path
                                                d="M21.5376 4.60999C21.0269 4.099 20.4204 3.69364 19.753 3.41708C19.0855 3.14052 18.3701 2.99817 17.6476 2.99817C16.9251 2.99817 16.2097 3.14052 15.5423 3.41708C14.8748 3.69364 14.2684 4.099 13.7576 4.60999L12.6976 5.66999L11.6376 4.60999C10.6059 3.5783 9.20666 2.9987 7.74763 2.9987C6.2886 2.9987 4.88932 3.5783 3.85763 4.60999C2.82594 5.64169 2.24634 7.04096 2.24634 8.49999C2.24634 9.95903 2.82594 11.3583 3.85763 12.39L12.6976 21.23L21.5376 12.39C22.0486 11.8792 22.454 11.2728 22.7305 10.6053C23.0071 9.93789 23.1495 9.22248 23.1495 8.49999C23.1495 7.77751 23.0071 7.0621 22.7305 6.39464C22.454 5.72718 22.0486 5.12075 21.5376 4.60999Z"
                                                stroke="#171A1F"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_222_303">
                                                <rect width="24" height="24" fill="white" transform="translate(0.69751)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className="text-body2">{data.likeCount}</div>
                                </div>
                                <div className="w-8 flex flex-col justify-center items-center gap-[5px]">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_222_307)">
                                            <path
                                                d="M1.69751 12C1.69751 12 5.69751 4 12.6975 4C19.6975 4 23.6975 12 23.6975 12C23.6975 12 19.6975 20 12.6975 20C5.69751 20 1.69751 12 1.69751 12Z"
                                                stroke="#171A1F"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.6975 15C14.3544 15 15.6975 13.6569 15.6975 12C15.6975 10.3431 14.3544 9 12.6975 9C11.0407 9 9.69751 10.3431 9.69751 12C9.69751 13.6569 11.0407 15 12.6975 15Z"
                                                stroke="#171A1F"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_222_307)">
                                                <rect width="24" height="24" fill="white" transform="translate(0.69751)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className="text-body2">{data.viewCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
