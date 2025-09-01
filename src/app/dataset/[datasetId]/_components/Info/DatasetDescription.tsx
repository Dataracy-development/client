export default function DatasetDescription({ data }: { data: string }) {
    return (
        <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h2 className="text-xl font-semibold text-gray-900">데이터셋 설명</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-base">{data}</p>
                </div>
            </div>
        </div>
    );
}
