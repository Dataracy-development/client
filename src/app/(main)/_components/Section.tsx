"use client";

import { onSearchDatasetsApi } from "@/app/dataset/list/_apis/apis";
import { onSearchProjectsApi } from "@/app/project/list/_apis/apis";
import Spinner from "@/components/Spinner";
import { useQueries } from "@tanstack/react-query";
import PopularDatasets from "./PopularDatasets";
import PopularProjects from "./PopularProjects";

export default function Section() {
    const results = useQueries({
        queries: [
            {
                queryKey: [
                    "getProjects",
                    {
                        webRequest: {
                            keyword: "",
                            sortType: "MOST_VIEWED",
                            topicId: 0,
                            analysisPurposeId: 0,
                            dataSourceId: 0,
                            authorLevelId: 0,
                        },
                        pagable: {
                            page: 1,
                            size: 6,
                        },
                    },
                ],
                queryFn: onSearchProjectsApi,
            },
            {
                queryKey: [
                    "getDatasets",
                    {
                        webRequest: {
                            keyword: "",
                            sortType: "UTILIZE",
                            topicId: 0,
                            dataSourceId: 0,
                            dataTypeId: 0,
                            year: 0,
                        },
                        pagable: {
                            page: 1,
                            size: 5,
                        },
                    },
                ],
                queryFn: onSearchDatasetsApi,
            },
        ],
    });

    if (results.some((result) => result.isPending)) return <Spinner />;
    return (
        <section className="pt-20">
            <div className="flex-1 flex flex-col gap-[80px]">
                <PopularProjects data={results[0].data?.data.content} />
                <PopularDatasets data={results[1].data?.data.content} />
            </div>
        </section>
    );
}
