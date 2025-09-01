"use client";

import PageHeader from "@/components/PageHeader";
import MyPageContent from "./_components/MyPageContent";

export default function MyPage() {
    return (
        <div className="pb-[130px]">
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-[10px] pt-[55px]">
                <MyPageContent />
            </section>
        </div>
    );
}
