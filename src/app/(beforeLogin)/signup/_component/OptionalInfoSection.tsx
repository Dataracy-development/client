import Checkbox from "@/components/Checkbox";
import Selectbox from "@/components/Selectbox";
import { useSignupStore } from "../store/store";

export default function OptionalInfoSection() {
    const { formData, setField } = useSignupStore();

    const authorLevelOptions = [
        { value: "초심자", label: "초심자" },
        { value: "중급자", label: "중급자" },
        { value: "고급자", label: "고급자" },
    ];

    const occupationOptions = [
        { value: "학생", label: "학생" },
        { value: "직장인", label: "직장인" },
        { value: "프리랜서", label: "프리랜서" },
        { value: "기타", label: "기타" },
    ];

    const visitSourceOptions = [
        { value: "SNS", label: "SNS" },
        { value: "검색", label: "검색" },
        { value: "지인추천", label: "지인추천" },
        { value: "광고", label: "광고" },
        { value: "기타", label: "기타" },
    ];

    return (
        <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#636ae8] to-[#7c82f0] rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">추가 정보</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">선택사항</span>
            </div>

            <div className="space-y-4">
                <Selectbox
                    label="작성자 레벨"
                    options={authorLevelOptions}
                    initialValue={formData.authorLevel || "초심자"}
                    onChange={(value) => setField("authorLevel", value)}
                    placeholder="작성자 레벨을 선택해주세요"
                />

                <Selectbox
                    label="직업"
                    options={occupationOptions}
                    initialValue={formData.occupation || "학생"}
                    onChange={(value) => setField("occupation", value)}
                    placeholder="직업을 선택해주세요"
                />

                <Selectbox
                    label="방문 경로"
                    options={visitSourceOptions}
                    initialValue={formData.visitSource || "SNS"}
                    onChange={(value) => setField("visitSource", value)}
                    placeholder="방문 경로를 선택해주세요"
                />

                <div className="flex items-start gap-3 p-4 bg-gray-50/50 rounded-lg border border-gray-100">
                    <Checkbox checked={formData.isAdTermsAgreed || false} value="adTerms" onClick={(value, checked) => setField("isAdTermsAgreed", checked)} />
                    <div className="flex-1">
                        <span className="text-sm text-gray-700 font-medium">광고성 정보 수신 동의</span>
                        <p className="text-xs text-gray-500 mt-1">새로운 서비스와 이벤트 정보를 받아보실 수 있습니다</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
