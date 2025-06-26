export default function Label({ children, type = "primary", className }: { children: React.ReactNode; type?: "primary" | "secondary"; className?: string }) {
    return (
        <div className={`w-fit text-[11px] font-normal ${type === "primary" ? "text-[#636ae8] bg-[#f2f2fd]" : "text-white bg-[#636ae8]"} px-1.5 py-[1px] rounded-[10px] ${className}`}>{children}</div>
    );
}
