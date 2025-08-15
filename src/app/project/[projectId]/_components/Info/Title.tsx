import titleBg from "@/assets/imgs/ProjectDetailSampleImg.jpg";
import Image from "next/image";

export default function Title({ domain, purpose, source, title }: { domain: string; purpose: string; source: string; title: string }) {
    return (
        <div className="w-full h-[300px] relative rounded-2xl overflow-hidden">
            <Image src={titleBg} alt="title-bg" fill className="absolute top-0 left-0" />
            <div className="w-full h-full bg-black/20 absolute top-0 left-0"></div>

            <div className="flex gap-1 mb-20 absolute top-5 left-5">
                {[domain, purpose, source].map((v) => {
                    return (
                        <div key={v} className={`w-fit h-[26px] px-2 text-caption leading-[26px] rounded-2xl bg-n300 text-primary`}>
                            {v}
                        </div>
                    );
                })}
            </div>

            <div className="text-h4 text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</div>
        </div>
    );
}
