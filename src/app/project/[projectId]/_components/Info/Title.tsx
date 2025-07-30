import titleBg from "@/assets/imgs/ProjectDetailSampleImg.jpg";
import Image from "next/image";

export default function Title() {
    return (
        <div className="w-full h-[300px] relative rounded-2xl overflow-hidden">
            <Image src={titleBg} alt="title-bg" fill className="absolute top-0 left-0" />
            <div className="w-full h-full bg-black/20 absolute top-0 left-0"></div>

            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">프로젝트 제목</div>
            </div>
        </div>
    );
}
