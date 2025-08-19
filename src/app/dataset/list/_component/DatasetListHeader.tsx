import DatasetSearchInput from "./DatasetSearchInput";
import DatasetSort from "./DatasetSort";

export default function DatasetListHeader() {
    return (
        <div className="w-full">
            <div className="mb-2.5">
                <DatasetSearchInput />
            </div>

            <DatasetSort />
        </div>
    );
}
