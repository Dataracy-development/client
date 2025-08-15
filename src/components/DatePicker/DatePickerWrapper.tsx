import "flatpickr/dist/themes/material_green.css";
import { useState } from "react";
import Flatpickr from "react-flatpickr";

interface DateRangePickerProps {
    label?: string;
    isRequired?: boolean;
    onChange?: (startDate: Date | null, endDate: Date | null) => void;
    placeholder?: string;
}

export default function DateRangePicker({ label = "분석 기간", isRequired = false, onChange, placeholder = "YYYY-MM-DD" }: DateRangePickerProps) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleStartDateChange = (dates: Date[]) => {
        const newStartDate = dates[0] || null;
        setStartDate(newStartDate);
        onChange?.(newStartDate, endDate);
    };

    const handleEndDateChange = (dates: Date[]) => {
        const newEndDate = dates[0] || null;
        setEndDate(newEndDate);
        onChange?.(startDate, newEndDate);
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                    {isRequired && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Flatpickr
                        key={`start-${startDate?.getTime() || "empty"}`}
                        onChange={handleStartDateChange}
                        options={{
                            dateFormat: "Y-m-d",
                            allowInput: true,
                            clickOpens: true,
                            disableMobile: false,
                        }}
                        className="w-full h-11 px-3 border border-n400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={placeholder}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 4.34503H14.375V3.09503H13.125V4.34503H6.875V3.09503H5.625V4.34503H5C4.3125 4.34503 3.75 4.90753 3.75 5.59503V15.595C3.75 16.2825 4.3125 16.845 5 16.845H15C15.6875 16.845 16.25 16.2825 16.25 15.595V5.59503C16.25 4.90753 15.6875 4.34503 15 4.34503ZM15 15.595H5V7.47003H15V15.595Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>

                <span className="text-gray-500 text-lg">~</span>

                <div className="relative flex-1">
                    <Flatpickr
                        key={`end-${endDate?.getTime() || "empty"}`}
                        onChange={handleEndDateChange}
                        options={{
                            dateFormat: "Y-m-d",
                            allowInput: true,
                            clickOpens: true,
                            disableMobile: false,
                            minDate: startDate || undefined,
                        }}
                        className="w-full h-11 px-3 border border-n400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={placeholder}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 4.34503H14.375V3.09503H13.125V4.34503H6.875V3.09503H5.625V4.34503H5C4.3125 4.34503 3.75 4.90753 3.75 5.59503V15.595C3.75 16.2825 4.3125 16.845 5 16.845H15C15.6875 16.845 16.25 16.2825 16.25 15.595V5.59503C16.25 4.90753 15.6875 4.34503 15 4.34503ZM15 15.595H5V7.47003H15V15.595Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
