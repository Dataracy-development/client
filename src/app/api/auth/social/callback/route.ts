import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { code } = await request.json();

        if (!code) {
            return NextResponse.json({ error: "인증 코드가 필요합니다." }, { status: 400 });
        }

        // 백엔드 서버로 인증 코드를 전송하여 토큰을 받아옴
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/social/callback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
        });

        if (!response.ok) {
            throw new Error("백엔드 인증 처리에 실패했습니다.");
        }

        const { accessToken, refreshToken } = await response.json();

        // 응답에 토큰을 포함하여 반환
        return NextResponse.json({
            success: true,
            accessToken,
            refreshToken,
        });
    } catch (error) {
        console.error("Social callback error:", error);
        return NextResponse.json({ error: "소셜 인증 처리 중 오류가 발생했습니다." }, { status: 500 });
    }
}
