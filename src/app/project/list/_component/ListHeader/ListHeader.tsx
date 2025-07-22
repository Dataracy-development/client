import SearchInput from "./SearchInput";
import Sort from "./Sort";

export default function ListHeader() {
    return (
        <div className="w-full">
            <div className="mb-2.5">
                <SearchInput />
            </div>

            <Sort />
        </div>
    );
}
