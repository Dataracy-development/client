import Input from "@/components/Input";
import { useSignupStore } from "../store/store";
import EmailVerification from "./EmailVerification";

export default function RequiredInfoSection() {
    const { formData, setField, setError, clearErrors } = useSignupStore();

    const handleInputChange = (field: keyof typeof formData, value: string) => {
        setField(field, value);
        // 에러가 있으면 클리어
        if (formData.errors[field]) {
            setError(field, "");
        }
    };

    return (
        <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#636ae8] to-[#7c82f0] rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">필수 정보</h3>
            </div>

            <div className="space-y-4">
                <EmailVerification />

                <div className="space-y-3">
                    <Input
                        label="비밀번호"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder="비밀번호를 입력해주세요"
                        type="password"
                        isRequired={true}
                        isErr={!!formData.errors.password}
                        errMsg={formData.errors.password}
                    />

                    <Input
                        value={formData.passwordConfirm}
                        onChange={(e) => handleInputChange("passwordConfirm", e.target.value)}
                        placeholder="비밀번호를 다시 입력해주세요"
                        type="password"
                        disabled={!formData.password}
                        isRequired={true}
                        isErr={!!formData.errors.passwordConfirm}
                        errMsg={formData.errors.passwordConfirm}
                    />
                </div>

                <Input
                    label="닉네임"
                    value={formData.nickname}
                    onChange={(e) => handleInputChange("nickname", e.target.value)}
                    placeholder="닉네임을 입력해주세요"
                    type="text"
                    isRequired={true}
                    isErr={!!formData.errors.nickname}
                    errMsg={formData.errors.nickname}
                />
            </div>
        </div>
    );
}
