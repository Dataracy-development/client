import { Apis } from "@/utils/api";

export const getRefreshToken = async () => {
    try {
        const response = await fetch("/api/auth/refresh-token", {
            credentials: "include", // 쿠키를 포함하여 요청
        });

        console.log("response:::", response);

        if (response.ok) {
            const { refreshToken } = await response.json();

            console.log("refreshToken:::", refreshToken);
            if (refreshToken) {
                try {
                    const response = await Apis.post("/auth/refresh", null, {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    });

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
