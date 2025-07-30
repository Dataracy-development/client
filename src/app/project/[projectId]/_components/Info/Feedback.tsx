export default function Feedback() {
    return (
        <div className="mt-12">
            <div className="text-h6 mb-4">피드백</div>
            <textarea className="w-full h-[100px] border border-n400 rounded-[10px] p-3 resize-none focus:outline-none font-inter text-sm leading-[22px] text-n900" placeholder="Type a message" />

            <div className="flex flex-col gap-2 mt-5 relative">
                {[1, 2].map((v) => {
                    return (
                        <div key={v} className="w-full flex items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-blue-100"></div>
                            <div className="flex-1">
                                <div className="font-inter text-sm leading-[22px] font-bold text-n900">김데이터</div>
                                <div className="font-inter text-xs leading-[20px] text-n900">
                                    Minim commodo labore laborum dolor cillum est et excepteur sit nostrud qui irure consectetur non reprehenderit. Quis consectetur cupidatat ea occaecat laborum
                                    laboris excepteur culpa eu laborum
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div
                    style={{
                        width: "100%",
                        height: "140px",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        background: "linear-gradient(180deg, #FFFFFF00 0%, #FFFFFFFF 100%)",
                        borderRadius: "0px",
                    }}
                ></div>
            </div>

            <div className="mt-5 w-full flex justify-center">
                <button className="text-button">+ 이어가기</button>
            </div>
        </div>
    );
}
