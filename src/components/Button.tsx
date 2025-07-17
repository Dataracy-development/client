/**
 * label: 버튼 라벨
 * onClick: 버튼 클릭 이벤트
 * type: 버튼 타입
 * btnType: 버튼 스타일 타입
 * size: 버튼 크기
 * icLeft: 왼쪽 아이콘
 * icRight: 오른쪽 아이콘
 * disabled: 버튼 비활성화 여부
 * className: 버튼 추가 className
 */
interface ButtonProps {
    label: React.ReactNode;
    onClick: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "button" | "reset" | undefined;
    btnType?: "primary" | "secondary" | "line_red" | "line" | "minimal";
    size?: "large" | "medium" | "small";
    icLeft?: React.ReactNode;
    icRight?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export default function Button({ label, onClick, type = "button", btnType = "primary", size = "large", icLeft, icRight, disabled = false, className = "" }: ButtonProps) {
    const buttonStyles = {
        primary:
            "bg-gradient-to-r from-[#636ae8] to-[#7c82f0] text-white border border-transparent hover:shadow-lg transform hover:scale-[1.02] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none",
        secondary: "bg-gray-800 text-white border border-transparent hover:bg-gray-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed",
        line_red: "bg-white text-red-500 border border-red-500 hover:bg-red-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed",
        line: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed",
        minimal: "bg-white text-gray-700 border border-transparent hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
    };

    const buttonSizeStyles = {
        large: "px-6 h-14 text-lg font-semibold",
        medium: "px-4 h-12 text-base font-medium",
        small: "px-3 h-10 text-sm font-medium",
    };

    return (
        <button
            className={`rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${buttonStyles[btnType]} ${buttonSizeStyles[size]} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {icLeft}
            {label}
            {icRight}
        </button>
    );
}
