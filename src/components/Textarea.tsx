import { forwardRef } from "react";

/**
 * label: 라벨
 * value: 값
 * onChange: 값 변경 이벤트
 * placeholder: 플레이스홀더
 * name: 이름
 * isRequired: 필수 여부
 * isErr: 에러 여부
 * errMsg: 에러 메시지
 * disabled: 비활성화 여부
 * maxLength: 최대 길이
 * rows: 행 수
 * onKeyDown: 키 다운 이벤트
 * onKeyUp: 키 업 이벤트
 * onFocus: 포커스 이벤트
 * onBlur: 블러 이벤트
 * resize: 리사이즈 가능 여부
 */
interface PropsType {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    name?: string;
    isRequired?: boolean;
    isErr?: boolean;
    errMsg?: string;
    disabled?: boolean;
    maxLength?: number;
    rows?: number;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    resize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, PropsType>(
    (
        { label = "", value, onChange, placeholder, isErr = false, errMsg, name, isRequired = false, disabled = false, maxLength, rows = 4, onKeyDown, onKeyUp, onFocus, onBlur, resize = false },
        ref
    ) => {
        return (
            <div className="flex-1">
                {label !== "" && (
                    <div className="mb-2 text-sm font-semibold text-gray-700">
                        {label}
                        {isRequired && <span className="text-red-500 ml-1">*</span>}
                    </div>
                )}

                <div className={`w-full rounded-lg border ${isErr ? "border-error" : "border-n400"}`}>
                    <textarea
                        ref={ref}
                        className={`w-full rounded-lg border-none text-base font-inter focus:outline-none placeholder:text-[#757575] bg-white p-4 ${isErr ? "!border-error" : ""} ${
                            resize ? "" : "resize-none"
                        }`}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        maxLength={maxLength}
                        name={name}
                        rows={rows}
                    />
                </div>
                {isErr && <div className="text-error text-caption mt-1">{errMsg}</div>}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export default Textarea;
