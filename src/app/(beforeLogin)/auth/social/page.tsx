"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getRefreshToken } from "../_api/getRefreshToken";

export default function SocialAuthPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                setIsLoading(true);
                const registerToken = await fetch("/api/auth/register-token", {
                    credentials: "include", // 쿠키를 포함하여 요청
                });

                const registerTokenData = await registerToken.json();

                if (registerTokenData.success) {
                    router.push("/signup?social=true");

                    return;
                }

                const reIssueResponse = await getRefreshToken();

                if (reIssueResponse.httpStatus === 200) {
                    window.location.href = "/";

                    return;
                } else {
                    setError("인증 처리 중 오류가 발생했습니다.");
                    setIsLoading(false);
                    return;
                }
            } catch (error) {
                setError("인증 처리 중 오류가 발생했습니다.");
                setIsLoading(false);
            }
        };

        fetchToken();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return <div></div>;
}
