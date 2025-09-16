export const validateEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export const validatePassword = (password: string) => {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};

/**
 * 토큰 가져오기
 * @returns 토큰
 */
export const getToken = async () => {
    const response = await fetch("/api/auth/access-token", {
        credentials: "include", // 쿠키를 포함하여 요청
    });

    if (response.ok) {
        const { accessToken } = await response.json();
        return accessToken;
    }

    throw new Error("토큰이 없습니다.");
};

/**
 * 바이트를 KB 단위로 변환하여 반환
 * @param bytes 바이트 값
 * @param decimals 소수점 자릿수 (기본값: 2)
 * @returns KB 단위 문자열
 */
export const bytesToKB = (bytes: number, decimals: number = 2): string => {
    if (bytes === 0) return "0 KB";

    const kb = bytes / 1024;
    return `${kb.toFixed(decimals)} KB`;
};
