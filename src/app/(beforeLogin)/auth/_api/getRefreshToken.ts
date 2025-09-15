export const getRefreshToken = async () => {
    try {
        const response = await fetch("/api/auth/refresh-token", {
            credentials: "include", // 쿠키를 포함하여 요청
        });

        if (response.ok) {
            // Set-Cookie 헤더에서 refreshToken 추출
            const setCookieHeader = response.headers.get("set-cookie");
            if (setCookieHeader) {
                // refreshToken=값; 형태에서 값 부분만 추출
                const refreshTokenMatch = setCookieHeader.match(/refreshToken=([^;]+)/);
                if (refreshTokenMatch) {
                    return refreshTokenMatch[1];
                }
            }
        }
        return null;
    } catch (error) {
        console.error("Error fetching refresh token:", error);
        return null;
    }
};
