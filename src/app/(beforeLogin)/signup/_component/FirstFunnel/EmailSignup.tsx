import Button from "@/components/Button";
import Input from "@/components/Input";
import { useCallback } from "react";
import { useSignupStore } from "../../store/store";

export default function EmailSignup() {
    const { formData, setField, errors, setError, validateEmailAndPassword, setCurrentStep } = useSignupStore();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const field = name as keyof typeof formData;

        setField(field, value);

        // 에러가 있으면 클리어
        if (errors[field]) setError(field, "");
    };

    // validation 후 이메일 인증 단계로 이동
    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!validateEmailAndPassword()) return;

            setCurrentStep(2);
        },
        [validateEmailAndPassword, setCurrentStep]
    );

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[14px]">
            <Input label="이메일" name="email" value={formData.email} onChange={onChange} placeholder="이메일을 입력해주세요." type="email" isRequired isErr={!!errors.email} errMsg={errors.email} />
            <Input
                label="비밀번호"
                name="password"
                value={formData.password}
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요."
                type="password"
                isRequired
                isErr={!!errors.password}
                errMsg={errors.password}
            />
            <Input
                label="비밀번호 확인"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요."
                type="password"
                isRequired
                isErr={!!errors.passwordConfirm}
                errMsg={errors.passwordConfirm}
            />

            <Button label="회원가입" type="submit" />
        </form>
    );
}
