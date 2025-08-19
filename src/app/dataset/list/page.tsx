import PageHeader from "@/components/PageHeader";
import DatasetListHeader from "./_component/DatasetListHeader";
import Filter from "./_component/Filter";
import List from "./_component/List";

export default function DatasetListPage() {
    return (
        <div>
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-3 py-[60px] flex gap-5">
                <Filter />

                <div className="flex flex-col gap-6 flex-1">
                    <DatasetListHeader />
                    <List />
                </div>
            </section>
        </div>
    );
}
