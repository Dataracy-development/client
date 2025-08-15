"use client";

import { useCallback } from "react";
export default function SubmitBtn() {
    // const { mutate } = useCreateMutation(createProjectApi, "createProject", {
    //     onSuccess: (data) => {
    //         console.log(data);
    //     },
    //     onError: (error) => {
    //         console.log(error);
    //     },
    // });

    const handleSubmit = useCallback(() => {
        // if (!validateFormData()) return;
        // const request = getDatas();
        // console.log("request", request);
        // // FormData 내용을 콘솔에 출력
        // if (request instanceof FormData) {
        //     console.log("=== handleSubmit Request ===");
        //     for (let [key, value] of request.entries()) {
        //         console.log(`${key}:`, value);
        //     }
        //     console.log("===================");
        // }
        // // mutate(request);
    }, []);

    return (
        <button className="w-fit h-[55px] px-9 text-base font-bold bg-secondary text-white rounded-xl flex items-center gap-2" onClick={handleSubmit}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.3701 0.375C15.9014 0.0625 16.5889 0.5 16.4639 1.125L14.2139 14.625C14.1514 15.125 13.6201 15.4062 13.1826 15.2188L9.30762 13.5625L7.30762 16C6.87012 16.5312 5.99512 16.25 5.99512 15.5V12.9688L13.4951 3.8125C13.6514 3.625 13.4014 3.40625 13.2451 3.5625L4.27637 11.4688L0.932617 10.0625C0.370117 9.84375 0.307617 9.03125 0.870117 8.71875L15.3701 0.375Z"
                    fill="white"
                />
            </svg>
            데이터셋 등록하기
        </button>
    );
}
