import Link from "next/link";
import { ItemProps } from "./_types/type";

export default function Item({ item }: { item: ItemProps }) {
    return (
        <Link href={`/project/1`}>
            <div className="w-full h-[200px] bg-white rounded-2xl border border-n200 flex cursor-pointer relative">
                <div className="w-[250px] h-full flex items-center justify-center rounded-l-2xl overflow-hidden bg-gray-200 text-gray-500">THUMBNAIL</div>

                <div className="p-[15px] flex-1">
                    <div className="flex items-center gap-1 mb-1.5">
                        {item.tags.map((tag) => (
                            <div key={tag} className={`w-fit h-[26px] px-2 text-caption leading-[26px] rounded-2xl bg-n300 text-primary`}>
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className="mb-1.5  font-bold text-xl leading-[30px] text-n900">{item.title}</div>

                    <div className="mb-3 font-normal text-xs leading-5 text-n700">{item.description}</div>

                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                        <div className="text-sm leading-[22px] font-normal text-n900">{item.userName}</div>
                    </div>
                </div>

                {/* 좋아요 버튼 */}
                <div className="absolute top-4 right-5 w-6 h-6 bg-gray-200 rounded-full"></div>

                {/* Counting */}
                <div className="absolute bottom-3 right-5 flex">
                    <div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="text-xs leading-5 font-normal text-[#636AE8] text-center">{item.commentCnt}</div>
                    </div>
                    <div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="text-xs leading-5 font-normal text-[#636AE8] text-center">{item.likedCnt}</div>
                    </div>
                    <div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="text-xs leading-5 font-normal text-[#636AE8] text-center">{item.viewCnt}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
