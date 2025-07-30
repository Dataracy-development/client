import ProjectCard from "@/app/(main)/_components/ProjectCard";

export default function RelatedProjects() {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px]">
            <div className="text-h4 mb-6">관련 프로젝트</div>

            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map((v) => {
                    return <ProjectCard key={v} />;
                })}
            </div>
        </div>
    );
}
