import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/hooks";
import { useCreateMutation } from "@/hooks/mutations/hooks";
import { validatePassword } from "@/utils/utils";
import { useState } from "react";
import { onCheckAuthCodeApi, onResetPasswordApi } from "../_apis/apis";
import { useFindPwStore } from "../store/store";

export default function ChangePw() {
    const { email } = useFindPwStore();

    const authCode = useInput("");
    const newPw = useInput("");
    const newPwConfirm = useInput("");

    const [errors, setErrors] = useState({
        authCode: "",
        newPw: "",
        newPwConfirm: "",
    });

    const resetPasswordMutation = useCreateMutation(onResetPasswordApi, "resetPassword", {
        onSuccess: () => {
            alert("비밀번호가 재설정되었습니다.");
        },
        onError: () => {
            alert("비밀번호 재설정에 실패했습니다.");
        },
    });

    const checkAuthCodeMutation = useCreateMutation(onCheckAuthCodeApi, "checkAuthCode", {
        onSuccess: () => {
            resetPasswordMutation.mutate({ password: newPw.value, passwordConfirm: newPwConfirm.value });
        },
        onError: () => {
            alert("인증번호를 확인해주세요.");
        },
    });

    const validate = (authCode: string, newPw: string, newPwConfirm: string) => {
        const newErrors: Partial<typeof errors> = {};

        if (!authCode) newErrors.authCode = "인증번호를 입력해주세요.";
        if (!newPw) newErrors.newPw = "비밀번호를 입력해주세요.";
        else if (!validatePassword(newPw)) newErrors.newPw = "비밀번호 형식이 올바르지 않습니다.";
        if (newPw !== newPwConfirm) newErrors.newPwConfirm = "비밀번호가 일치하지 않습니다.";

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const error = validate(authCode.value, newPw.value, newPwConfirm.value);
        if (Object.keys(error).length > 0) {
            setErrors({ ...errors, ...error });
            return;
        }

        checkAuthCodeMutation.mutate({ email, code: authCode.value, purpose: "PASSWORD_RESET" });
    };

    return (
        <form action="" className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>
            <Input {...authCode} label="인증번호" placeholder="인증번호를 입력해주세요." type="text" isErr={!!errors.authCode} errMsg={errors.authCode} />
            <Input {...newPw} label="새로운 비밀번호" placeholder="새로운 비밀번호를 입력해주세요." type="password" isErr={!!errors.newPw} errMsg={errors.newPw} />
            <Input {...newPwConfirm} label="새로운 비밀번호 확인" placeholder="새로운 비밀번호를 다시 입력해주세요." type="password" isErr={!!errors.newPwConfirm} errMsg={errors.newPwConfirm} />
            <Button label="비밀번호 재설정하기" type="submit" />
        </form>
    );
}
