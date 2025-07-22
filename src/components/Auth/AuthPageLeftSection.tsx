export default function AuthPageLeftSection() {
    return (
        <div className="flex-1 bg-primary rounded-l-2xl px-12 text-white flex flex-col justify-center gap-[50px]">
            <div className="font-montserrat text-logo1">Dataracy</div>
            <div className="text-h6">데이터러시는 데이터 분석가들이 모여 프로젝트를 실현하고 토론과 피드백으로 함께 성장하는 플랫폼입니다.</div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 font-inter text-body1">
                    <CheckIcon />
                    전문가들과 함께하는 프로젝트
                </div>
                <div className="flex items-center gap-3 font-inter text-body1">
                    <CheckIcon />
                    실무 중심의 데이터 분석 경험
                </div>
                <div className="flex items-center gap-3 font-inter text-body1">
                    <CheckIcon />
                    커뮤니티 기반 학습과 성장
                </div>
                <div className="flex items-center gap-3 font-inter text-body1">
                    <CheckIcon />
                    최신 기술과 트렌드 공유
                </div>
            </div>
        </div>
    );
}

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="white" fillOpacity="0.2" />
        <g clipPath="url(#clip0_275_1749)">
            <path
                d="M15.04 6.46C15.18 6.62 15.25 6.8 15.25 7C15.25 7.2 15.18 7.38 15.04 7.54L9.04 13.54C8.88 13.68 8.7 13.75 8.5 13.75C8.3 13.75 8.12 13.68 7.96 13.54L4.96 10.54C4.82 10.38 4.75 10.2 4.75 10C4.75 9.8 4.82 9.62 4.96 9.46C5.12 9.32 5.3 9.25 5.5 9.25C5.7 9.25 5.88 9.32 6.04 9.46L8.48 11.95L13.96 6.46C14.12 6.32 14.3 6.25 14.5 6.25C14.7 6.25 14.88 6.32 15.04 6.46Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_275_1749">
                <rect width="10.5" height="7.5" fill="white" transform="translate(4.75 6.25)" />
            </clipPath>
        </defs>
    </svg>
);
