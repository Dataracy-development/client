"use client";

import Pagination from "@/components/Pagination";
import Spinner from "@/components/Spinner";
import { useUserInfo } from "@/hooks/queries";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { onSearchDatasetsApi } from "../_apis/apis";
import useDatasetListStore from "../store/datasetListStore";
import Item from "./Item";

export default function List() {
    const router = useRouter();

    const { user } = useUserInfo();

    const { filter, pagable, setPage } = useDatasetListStore();

    const { data, isPending, isError } = useQuery({
        queryKey: [
            "getDatasets",
            {
                webRequest: filter,
                pagable,
            },
        ],
        queryFn: onSearchDatasetsApi,
    });

    if (isPending) return <Spinner />;
    if (isError) return <div className="flex justify-center items-center h-full">Error</div>;

    if (data?.data.content.length === 0)
        return (
            <div className="flex flex-col justify-center items-center mt-24">
                <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center animate-pulse">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-500 text-center max-w-md leading-relaxed">다른 키워드로 검색해보시거나 필터를 조정해보세요</p>
            </div>
        );

    return (
        <div className="flex flex-col gap-5">
            {data?.data.content.map((item) => (
                <Item key={item.id} item={item} />
            ))}

            <div className="flex justify-center mt-5">
                <Pagination page={pagable.page} viewPerPage={pagable.size} total={data?.data.totalElements} onChange={(page) => setPage(page)} />
            </div>

            {user && user.id && (
                <button
                    className="fixed right-[calc((100%-1200px)/2+40px)] bottom-[40px] w-[70px] h-[70px] bg-primary rounded-full flex items-center justify-center hover:bg-[#27198E]"
                    onClick={() => {
                        router.push("/dataset/create");
                    }}
                >
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.5775 7.53112L21.469 1.42115C21.2658 1.21797 21.0247 1.0568 20.7592 0.946835C20.4938 0.836871 20.2093 0.780273 19.922 0.780273C19.6347 0.780273 19.3502 0.836871 19.0847 0.946835C18.8193 1.0568 18.5781 1.21797 18.375 1.42115L1.51622 18.2813C1.31221 18.4837 1.15046 18.7246 1.04038 18.9901C0.930307 19.2555 0.874093 19.5402 0.875011 19.8276V25.9376C0.875011 26.5177 1.10548 27.0741 1.51571 27.4844C1.92595 27.8946 2.48235 28.1251 3.06251 28.1251H9.17247C9.45984 28.126 9.74453 28.0698 10.01 27.9597C10.2754 27.8496 10.5164 27.6879 10.7188 27.4838L27.5775 10.6251C27.7807 10.4219 27.9419 10.1808 28.0519 9.91532C28.1618 9.64989 28.2184 9.3654 28.2184 9.07809C28.2184 8.79078 28.1618 8.50628 28.0519 8.24085C27.9419 7.97542 27.7807 7.73425 27.5775 7.53112ZM9.17247 25.9376H3.06251V19.8276L15.0938 7.79635L21.2037 13.9063L9.17247 25.9376ZM22.75 12.3587L16.64 6.25006L19.9213 2.96881L26.0313 9.0774L22.75 12.3587Z"
                            fill="white"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
