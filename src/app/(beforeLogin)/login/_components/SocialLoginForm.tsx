import { GoogleIcon, KakaoIcon } from "@/components/icons/icons";

export default function SocialLoginForm() {
    const handleSocialLogin = (provider: string) => {
        window.location.href = `http://dataracy.co.kr:8083/oauth2/authorization/${provider}`;
    };

    return (
        <div className="space-y-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">또는</span>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    className="w-full h-14 text-base font-medium rounded-xl flex justify-center items-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
                    onClick={() => handleSocialLogin("google")}
                >
                    <GoogleIcon />
                    <span className="text-gray-700">Google로 로그인</span>
                </button>

                <button
                    className="w-full h-14 text-base font-medium bg-[#FEE500] text-[rgba(0,0,0,0.85)] rounded-xl flex justify-center items-center gap-3 hover:bg-[#FDD835] transition-all duration-200 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
                    onClick={() => handleSocialLogin("kakao")}
                >
                    <KakaoIcon />
                    <span>카카오로 로그인</span>
                </button>
            </div>
        </div>
    );
}
