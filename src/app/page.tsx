import Banner1 from "@/assets/img/Banner1.png";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Banner />
            <Contents />
        </div>
    );
}

const Banner = () => {
    return (
        <div className="banner flex items-center justify-center w-full h-[704px]">
            <div className="max-w-[1200px] w-full h-full px-3 mx-auto flex">
                <div className="flex-1 pt-[177px] text-white">
                    <div className="text-[56px] leading-[78px] font-bold mb-[19px]">
                        분석에 논리를
                        <br />
                        더하는 사람들
                    </div>
                    <div className="text-[20px] leading-[30px] font-normal mb-[49px]">
                        피드백으로 진화하는 나의 프로젝트,
                        <br />
                        데이터분석 커뮤니티에서 함께 성장하세요.
                    </div>
                    <div className="flex items-center gap-[17px]">
                        <button className="h-[52px] rounded-[10px] text-base leading-[26px] font-normal text-[#636AE8FF] bg-white border-none focus:outline-none px-4">프로젝트 등록하기</button>
                        <button className="h-[52px] rounded-[10px] text-base leading-[26px] font-normal text-white bg-[#636AE8FF] border border-white focus:outline-none px-4">
                            프로젝트 둘러보기
                        </button>
                    </div>
                </div>
                <div className="w-fit pt-[123px]">
                    <Image src={Banner1} alt="2032 BEST PICK" className="w-[656px]" />
                </div>
            </div>
        </div>
    );
};

const Contents = () => {
    return <section className="max-w-[1320px] w-full mx-auto h-[600px] flex items-center justify-center border-x border-gray-300">Contents</section>;
};
