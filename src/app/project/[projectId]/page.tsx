import PageHeader from "@/components/PageHeader";
import ProjectDetailSideBar from "./_components/ProjectDetailSideBar";
import ProjectInfo from "./_components/ProjectInfo";

export default function ProjectPage() {
    return (
        <div>
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-3 py-[50px] flex gap-[46px]">
                <ProjectInfo />
                <ProjectDetailSideBar />
            </section>
        </div>
    );
}
