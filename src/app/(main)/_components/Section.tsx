import PopularDatasets from "./PopularDatasets";
import PopularProjects from "./PopularProjects";

export default function Section() {
    return (
        <section className="pt-20">
            <div className="flex-1 flex flex-col gap-[80px]">
                <PopularProjects />
                <PopularDatasets />
            </div>
        </section>
    );
}
