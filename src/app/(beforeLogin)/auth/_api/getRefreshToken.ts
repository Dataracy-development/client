import { Apis } from "@/utils/api";

export const getRefreshToken = async () => {
    try {
        const response = await fetch("/api/auth/refresh-token", {
            credentials: "include", // 쿠키를 포함하여 요청
        });

        if (response.ok) {
            const { refreshToken } = await response.json();

            console.log("refreshToken:::", refreshToken);
            if (refreshToken) {
                try {
                    console.log("Apis.post:::");
                    const response = await Apis.post(
                        "/auth/token/re-issue",
                        {},
                        {
                            withCredentials: true,
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    console.log("response:::", response);

                    return response;
                } catch (error) {
                    console.error("Refresh API Error:", error);
                }
            }
        }
    } catch (error) {
        console.error("Error fetching refresh token:", error);
    }
};
