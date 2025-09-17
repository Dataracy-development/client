import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = await cookies();
    const registerToken = cookieStore.get("registerToken");

    if (!registerToken) {
        return NextResponse.json({ success: false, message: "No register token found" });
    }

    return NextResponse.json({ success: true, registerToken: registerToken.value, message: "Register token found" });
}
