import PageHeader from "@/components/PageHeader";
import Filter from "./_component/Filter";
import List from "./_component/List";
import ListHeader from "./_component/ListHeader";

export default function ProjectList() {
    return (
        <div>
            <PageHeader />

            <section className="w-full max-w-[1200px] mx-auto px-3 py-[52px] flex gap-11">
                <Filter />

                <div className="flex flex-col gap-10 flex-1">
                    <ListHeader />
                    <List />
                </div>
            </section>
        </div>
    );
}
