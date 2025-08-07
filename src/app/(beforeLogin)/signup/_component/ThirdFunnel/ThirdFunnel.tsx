"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Selectbox from "@/components/Selectbox";
import Spinner from "@/components/Spinner";
import { useSignupMutation } from "@/hooks/mutations/useSignupMutation";
import { Apis } from "@/utils/api";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSignupStore } from "../../store/store";
import { SignupRequest } from "./apis/apis";
import { useGetOptionsQueries } from "./queries/queries";

export default function ThirdFunnel() {
    const { formData, setField, errors, validateBasicInfo, setError } = useSignupStore();
    const router = useRouter();
    const queryClient = useQueryClient();

    // 옵션 조회
    const results = useGetOptionsQueries();

    // 인풋 변경 시 호출
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const field = name as keyof typeof formData;
        setError(field, "");
        setField(field, value);
    };

    // 선택 박스 변경 시 호출
    const onChangeSelect = (target: string, value: number | number[] | null) => {
        const field = target as keyof typeof formData;
        setError(field, "");
        setField(field, value);
    };

    // 회원가입
    const { mutate: signup } = useSignupMutation({
        onSuccess: async () => {
            const refreshToken = process.env.NEXT_PUBLIC_TEMP_REFRESH_TOKEN;

            try {
                const response = await Apis.post(
                    "/auth/dev/token/re-issue",
                    { refreshToken },
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    }
                );

                document.cookie = `token=${response.data.accessToken}; path=/; SameSite=Lax; Secure`;
                await new Promise((resolve) => setTimeout(resolve, 0));
                queryClient.invalidateQueries({ queryKey: ["isLoggedIn"] });
                queryClient.refetchQueries({ queryKey: ["isLoggedIn"] });

                router.push("/");
            } catch (error) {
                console.error("Refresh API Error:", error);
            }
        },
        onError: (error) => {
            console.log("회원가입 실패", error);
        },
    });
    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!validateBasicInfo()) return;
            const { level, occupation, domains, visitSource } = formData;
            const requestData: SignupRequest = {
                ...formData,
                authorLevelId: level,
                occupationId: occupation,
                topicIds: domains,
                visitSourceId: visitSource,
                isAdTermsAgreed: true,
            };

            signup(requestData);
        },
        [formData, validateBasicInfo, signup]
    );

    if (results[0].isPending || results[1].isPending) return <Spinner />;
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[14px]">
            <Input
                label="닉네임"
                name="nickname"
                value={formData.nickname}
                onChange={onChangeInput}
                placeholder="닉네임을 입력해주세요"
                type="text"
                isRequired
                isErr={!!errors.nickname}
                errMsg={errors.nickname}
            />
            <Selectbox
                label="레벨 선택"
                placeholder="레벨을 선택해주세요"
                options={results[0].data.data.authorLevels.map((item) => ({ value: item.value, label: item.label })) || []}
                isRequired={true}
                onChange={(value) => onChangeSelect("level", results[0].data.data.authorLevels.find((item) => item.value === value)?.id || null)}
                isErr={!!errors.level}
                errMsg={errors.level}
            />
            <Selectbox
                label="관심분야"
                placeholder="관심 도메인을 선택해주세요"
                options={results[1].data.data.topics.map((item) => ({ value: item.value, label: item.label })) || []}
                // onChange={(value) => onChangeSelect("domains", [...results[1].data.data.topics.find((item) => item.value === value)?.id] || null])}
            />
            <Selectbox
                label="어떤 직무에 종사하고 있나요?"
                placeholder="직무를 입력해주세요"
                options={results[2].data.data.occupations.map((item) => ({ value: item.value, label: item.label })) || []}
                onChange={(value) => onChangeSelect("occupation", results[2].data.data.occupations.find((item) => item.value === value)?.id || null)}
            />
            <Selectbox
                label="데이터러시를 어떻게 알게 되셨나요?"
                placeholder="방문경로를 선택해주세요"
                options={results[3].data.data.visitSources.map((item) => ({ value: item.value, label: item.label })) || []}
                onChange={(value) => onChangeSelect("visitSource", results[3].data.data.visitSources.find((item) => item.value === value)?.id || null)}
            />
            <Button type="submit" label="회원가입" />
        </form>
    );
}
