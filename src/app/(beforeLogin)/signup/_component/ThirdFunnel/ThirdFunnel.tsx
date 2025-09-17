"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Selectbox from "@/components/Selectbox";
import Spinner from "@/components/Spinner";
import { useCreateMutation } from "@/hooks/mutations/hooks";
import { useSignupMutation } from "@/hooks/mutations/useSignupMutation";
import { Apis } from "@/utils/api";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useSignupStore } from "../../store/store";
import { onSocialSignupApi, SignupRequest, SocialSignupRequest } from "./_apis/apis";
import { useGetOptionsQueries } from "./queries/queries";

export default function ThirdFunnel() {
    const searchParams = useSearchParams();
    const social = searchParams.get("social");

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

    const onSuccessSignup = async () => {
        try {
            const authUrl = process.env.NODE_ENV === "development" ? "/auth/dev/token/re-issue" : "/auth/token/re-issue";
            const response = await Apis.post(
                authUrl,
                {},
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                queryClient.invalidateQueries({ queryKey: ["isLoggedIn"] });
                queryClient.refetchQueries({ queryKey: ["isLoggedIn"] });

                router.push("/");
            } else {
                alert("회원가입에 실패했습니다.");
                return;
            }
        } catch (error) {
            console.error("Refresh API Error:", error);
            alert("회원가입에 실패했습니다.");
            return;
        }
    };

    // 회원가입
    const { mutate: signup } = useSignupMutation({
        onSuccess: onSuccessSignup,
    });

    // 소셜 회원가입
    const { mutate: socialSignup } = useCreateMutation(onSocialSignupApi, "socialSignup", {
        onSuccess: onSuccessSignup,
    });

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!validateBasicInfo()) return;
            const { level, occupation, domains, visitSource } = formData;
            const requestData: SignupRequest | SocialSignupRequest = {
                ...formData,
                authorLevelId: level,
                occupationId: occupation,
                topicIds: domains,
                visitSourceId: visitSource,
                isAdTermsAgreed: true,
            };

            if (social) {
                socialSignup(requestData as SocialSignupRequest);
            } else {
                signup(requestData as SignupRequest);
            }
        },
        [formData, validateBasicInfo, signup, socialSignup]
    );

    if (results[0].isPending || results[1].isPending || results[2].isPending || results[3].isPending) return <Spinner />;
    if (!results[0].data || !results[1].data || !results[2].data || !results[3].data) return null;
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
