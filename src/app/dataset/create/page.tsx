import PageHeader from "@/components/PageHeader";
import AnalysisGuide from "./_component/AnalysisGuide";
import BaseInfo from "./_component/BaseInfo";
import FileUpload from "./_component/FileUpload";
import SubmitBtn from "./_component/SubmitBtn";
import Thumbnail from "./_component/Thumbnail";

export default function CreateDatasetPage() {
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
                    <BaseInfo />
                    <AnalysisGuide />
                </div>

                <div className="mt-[100px]">
                    <h1 className="flex items-center gap-3 text-[28px] font-semibold font-montserrat mb-[30px]">
                        <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.9844 4.84375L26.9062 9.76562C27.125 9.98438 27.125 10.3125 26.9062 10.5312L14.9844 22.4531L9.89844 23C9.24219 23.1094 8.64062 22.5078 8.75 21.8516L9.29688 16.7656L21.2188 4.84375C21.4375 4.625 21.7656 4.625 21.9844 4.84375ZM30.8438 3.58594C31.6641 4.40625 31.6641 5.77344 30.8438 6.59375L28.9297 8.50781C28.7109 8.72656 28.3828 8.72656 28.1641 8.50781L23.2422 3.58594C23.0234 3.36719 23.0234 3.03906 23.2422 2.82031L25.1562 0.90625C25.9766 0.0859375 27.3438 0.0859375 28.1641 0.90625L30.8438 3.58594ZM21 19.2266C21 19.0078 21.0547 18.8438 21.1641 18.7344L23.3516 16.5469C23.7891 16.1641 24.5 16.4375 24.5 17.0391V25.625C24.5 27.1016 23.2969 28.25 21.875 28.25H2.625C1.14844 28.25 0 27.1016 0 25.625V6.375C0 4.95312 1.14844 3.75 2.625 3.75H18.2109C18.8125 3.75 19.0859 4.46094 18.7031 4.89844L16.5156 7.08594C16.4062 7.19531 16.2422 7.25 16.0234 7.25H3.5V24.75H21V19.2266Z"
                                fill="#3F2AFF"
                            />
                        </svg>
                        파일 첨부
                    </h1>
                </div>

                <div className="flex flex-col gap-[30px]">
                    <FileUpload />
                    <Thumbnail />
                </div>

                <div className="w-full flex justify-center mt-[60px]">
                    <SubmitBtn />
                </div>
            </div>
        </div>
    );
}
