"use client";

import PageHeader from "@/components/PageHeader";
import BaseInfo from "./_component/BaseInfo";
import ContinuedProjects from "./_component/ContinuedProjects";
import Datasets from "./_component/Datasets";
import DetailInfo from "./_component/DetailInfo";
import SubmitBtn from "./_component/SubmitBtn";
import Thumbnail from "./_component/Thumbnail";

export default function CreateProjectPage() {
    return (
        <div>
            <PageHeader />

            <div className="w-full max-w-[1200px] mx-auto px-[10px] py-[60px]">
                <div>
                    <h1 className="flex items-center gap-3 text-[28px] font-semibold font-montserrat mb-5">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 0.4375C21.4375 0.4375 27.5625 6.5625 27.5625 14C27.5625 21.4922 21.4375 27.5625 14 27.5625C6.50781 27.5625 0.4375 21.4922 0.4375 14C0.4375 6.5625 6.50781 0.4375 14 0.4375ZM14 6.45312C12.6875 6.45312 11.7031 7.49219 11.7031 8.75C11.7031 10.0625 12.6875 11.0469 14 11.0469C15.2578 11.0469 16.2969 10.0625 16.2969 8.75C16.2969 7.49219 15.2578 6.45312 14 6.45312ZM17.0625 20.3438V19.0312C17.0625 18.7031 16.7344 18.375 16.4062 18.375H15.75V12.9062C15.75 12.5781 15.4219 12.25 15.0938 12.25H11.5938C11.2109 12.25 10.9375 12.5781 10.9375 12.9062V14.2188C10.9375 14.6016 11.2109 14.875 11.5938 14.875H12.25V18.375H11.5938C11.2109 18.375 10.9375 18.7031 10.9375 19.0312V20.3438C10.9375 20.7266 11.2109 21 11.5938 21H16.4062C16.7344 21 17.0625 20.7266 17.0625 20.3438Z"
                                fill="#3F2AFF"
                            />
                        </svg>
                        기본 정보 작성
                    </h1>
                </div>

                <div className="flex flex-col gap-[30px]">
                    <Thumbnail />
                    <BaseInfo />
                    <ContinuedProjects />
                    <Datasets />
                </div>

                <DetailInfo />

                <div className="w-full flex justify-center mt-[60px]">
                    <SubmitBtn />
                </div>
            </div>
        </div>
    );
}
