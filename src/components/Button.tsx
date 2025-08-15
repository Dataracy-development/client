/**
 * label: 버튼 라벨
 * onClick: 버튼 클릭 이벤트
 * type: 버튼 타입
 * disabled: 버튼 비활성화 여부
 * className: 버튼 추가 className
 */
interface ButtonProps {
    label: React.ReactNode;
    onClick?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "button" | "reset" | undefined;
    disabled?: boolean;
    className?: string;
    ref?: React.RefObject<HTMLButtonElement>;
}

export default function Button({ label, onClick, type = "button", disabled = false, className = "", ref }: ButtonProps) {
    return (
        <button ref={ref} className={`bg-secondary text-white text-button rounded-xl h-[50px] hover:bg-[#e6576f] ${className}`} onClick={onClick} type={type} disabled={disabled}>
            {label}
        </button>
    );
}
