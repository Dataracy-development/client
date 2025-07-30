import PageHeader from "@/components/PageHeader";
import Info from "./_components/Info/Info";
import RelatedProjects from "./_components/RelatedProjects";
import Sidebar from "./_components/SideBar/Sidebar";

export default function ProjectPage() {
    return (
        <div className="pb-[130px]">
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-[10px] pt-[55px] pb-[86px] flex gap-10">
                <Info />
                <Sidebar />
            </section>
            <RelatedProjects />
        </div>
    );
}
