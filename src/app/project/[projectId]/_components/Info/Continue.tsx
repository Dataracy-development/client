import { Project } from "@/types/commonTypes";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { getContinuedProjectsApi } from "../../_apis/apis";

export default function Continue() {
    const { projectId } = useParams();
    const projectIdNumber = projectId ? parseInt(projectId as string, 10) : undefined;

    const router = useRouter();

    const { data, isPending, isError } = useQuery({
        queryKey: ["continuedProjects", projectIdNumber],
        queryFn: getContinuedProjectsApi,
        enabled: !!projectIdNumber,
    });

    if (!data) return null;
    return (
        <div className="mt-12 pt-12 border-t border-n300">
            <div className="flex items-center gap-3 mb-4">
                <h2 className="text-h6">이어가기</h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{data.content.length}개 프로젝트</span>
            </div>

            <div className="grid gap-4">
                {data.content.length > 0 ? (
                    data.content.map((project: Project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                router.push(`/project/${project.id}`);
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-h6 font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-body2 text-gray-600">{project.username}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full h-[100px] flex items-center justify-center text-body2 text-gray-500">이어가기 프로젝트가 없습니다.</div>
                )}
            </div>
        </div>
    );
}
