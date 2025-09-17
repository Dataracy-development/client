import { Project } from "@/types/commonTypes";
import Image from "next/image";
import Link from "next/link";

export default function Item({ item }: { item: Project }) {
    return (
        <Link href={`/project/${item.id}`} className="group">
            <div className="w-full h-[200px] bg-white rounded-2xl border border-n300 flex cursor-pointer relative group-hover:border-n400 group-hover:shadow-sm transition-all duration-150">
                <div className="w-[250px] h-full flex items-center justify-center rounded-l-2xl overflow-hidden bg-gray-200 text-gray-500">
                    {item.projectThumbnailUrl ? (
                        <Image src={item.projectThumbnailUrl} alt={item.title} width={250} height={200} className="object-cover" />
                    ) : (
                        "NO IMAGE"
                    )}
                </div>

                <div className="p-[15px] flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-1 mb-3">
                            {[item.analysisPurposeLabel, item.dataSourceLabel, item.authorLevelLabel].map((tag) => (
                                <div key={tag} className={`w-fit h-[26px] px-2 text-caption leading-[26px] rounded-2xl bg-n300 text-primary`}>
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className="text-h5 mb-3">{item.title}</div>

                        <div className="text-body2 mb-3">{item.content.length > 120 ? item.content.slice(0, 120) + "..." : item.content}</div>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                            <div>
                                <div className="text-caption">{item.topicLabel}</div>
                                <div className="text-button mt-[5px]">{item.creatorName}</div>
                            </div>
                        </div>
                        {/* Counting */}
                        <div className="flex gap-3 items-center">
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.7412 11.5C21.7447 12.8199 21.4363 14.1219 20.8412 15.3C20.1356 16.7118 19.051 17.8992 17.7087 18.7293C16.3664 19.5594 14.8195 19.9994 13.2412 20C11.9213 20.0035 10.6193 19.6951 9.44121 19.1L3.74121 21L5.64121 15.3C5.04614 14.1219 4.73777 12.8199 4.74121 11.5C4.74182 9.92179 5.18182 8.37488 6.01193 7.03258C6.84204 5.69028 8.02947 4.6056 9.44121 3.90003C10.6193 3.30496 11.9213 2.99659 13.2412 3.00003H13.7412C15.8256 3.11502 17.7943 3.99479 19.2704 5.47089C20.7464 6.94699 21.6262 8.91568 21.7412 11V11.5Z"
                                        stroke="#171A1F"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <div className="text-sm leading-[17px] font-normal mt-[5px] text-center">{item.commentCount}</div>
                            </div>
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_349_989)">
                                        <path
                                            d="M21.5812 4.60999C21.0705 4.099 20.464 3.69364 19.7966 3.41708C19.1291 3.14052 18.4137 2.99817 17.6912 2.99817C16.9687 2.99817 16.2533 3.14052 15.5859 3.41708C14.9184 3.69364 14.312 4.099 13.8012 4.60999L12.7412 5.66999L11.6812 4.60999C10.6495 3.5783 9.25024 2.9987 7.79121 2.9987C6.33217 2.9987 4.9329 3.5783 3.90121 4.60999C2.86952 5.64169 2.28992 7.04096 2.28992 8.49999C2.28992 9.95903 2.86952 11.3583 3.90121 12.39L12.7412 21.23L21.5812 12.39C22.0922 11.8792 22.4976 11.2728 22.7741 10.6053C23.0507 9.93789 23.193 9.22248 23.193 8.49999C23.193 7.77751 23.0507 7.0621 22.7741 6.39464C22.4976 5.72718 22.0922 5.12075 21.5812 4.60999Z"
                                            stroke="#171A1F"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_349_989">
                                            <rect width="24" height="24" fill="white" transform="translate(0.741211)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="text-sm leading-[17px] font-normal mt-[5px] text-center">{item.likeCount}</div>
                            </div>
                            <div>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_349_993)">
                                        <path
                                            d="M1.74121 12C1.74121 12 5.74121 4 12.7412 4C19.7412 4 23.7412 12 23.7412 12C23.7412 12 19.7412 20 12.7412 20C5.74121 20 1.74121 12 1.74121 12Z"
                                            stroke="#171A1F"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.7412 15C14.3981 15 15.7412 13.6569 15.7412 12C15.7412 10.3431 14.3981 9 12.7412 9C11.0844 9 9.74121 10.3431 9.74121 12C9.74121 13.6569 11.0844 15 12.7412 15Z"
                                            stroke="#171A1F"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_349_993">
                                            <rect width="24" height="24" fill="white" transform="translate(0.741211)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="text-sm leading-[17px] font-normal mt-[5px] text-center">{item.viewCount}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 좋아요 버튼 */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-5">
                    <g clipPath="url(#clip0_333_971)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.2971 22.2749C4.1801 22.9409 4.8371 23.4614 5.4161 23.1644L12.0011 19.7804L18.5846 23.1644C19.1636 23.4614 19.8206 22.9409 19.7036 22.2764L18.4586 15.1814L23.7431 10.1474C24.2366 9.67638 23.9801 8.81538 23.3186 8.72238L15.9716 7.67838L12.6956 1.18788C12.6332 1.05632 12.5347 0.945159 12.4117 0.867323C12.2886 0.789487 12.146 0.748169 12.0004 0.748169C11.8547 0.748169 11.7121 0.789487 11.589 0.867323C11.466 0.945159 11.3675 1.05632 11.3051 1.18788L8.0291 7.67988L0.682102 8.72388C0.0206022 8.81688 -0.235898 9.67788 0.257602 10.1489L5.5421 15.1829L4.2971 22.2779V22.2749ZM11.6546 18.1244L6.1256 20.9654L7.1666 15.0299C7.19099 14.8933 7.18145 14.7527 7.13882 14.6206C7.09618 14.4886 7.02177 14.369 6.9221 14.2724L2.5631 10.1174L8.6411 9.25338C8.76696 9.23438 8.88633 9.18515 8.989 9.10991C9.09167 9.03467 9.17457 8.93567 9.2306 8.82138L12.0011 3.33438L14.7701 8.82138C14.8261 8.93567 14.909 9.03467 15.0117 9.10991C15.1144 9.18515 15.2337 9.23438 15.3596 9.25338L21.4376 10.1159L17.0786 14.2709C16.9786 14.3675 16.904 14.4874 16.8613 14.6198C16.8187 14.7522 16.8093 14.893 16.8341 15.0299L17.8751 20.9654L12.3461 18.1244C12.2392 18.0693 12.1206 18.0405 12.0004 18.0405C11.8801 18.0405 11.7615 18.0693 11.6546 18.1244Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_333_971">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </Link>
    );
}
