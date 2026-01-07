
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";

export function DateTimeStep({ onNext, onBack }: { onNext: (data: any) => void, onBack: () => void }) {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Simple mock dates (next 7 days)
    const dates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return {
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            date: d.getDate(),
            full: d.toDateString()
        };
    });

    const timeSlots = [
        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
    ];

    const handleNext = () => {
        if (selectedDate !== null && selectedTime) {
            onNext({
                date: dates[selectedDate].full,
                time: selectedTime
            });
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-heading font-bold">Preferred Time</h2>
                <p className="text-muted-foreground">Select a date and time that works for you.</p>
            </div>

            {/* Date Selection */}
            <div>
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" /> Select Date
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                    {dates.map((d, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedDate(idx)}
                            className={cn(
                                "flex-shrink-0 w-16 h-20 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all",
                                selectedDate === idx
                                    ? "bg-primary text-white border-primary shadow-md scale-105"
                                    : "bg-white border-gray-200 hover:border-primary/50"
                            )}
                        >
                            <span className="text-xs font-medium uppercase opacity-80">{d.day}</span>
                            <span className="text-xl font-bold">{d.date}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Selection */}
            <div>
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Select Time
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                                "py-2 px-3 rounded-lg text-sm border transition-all",
                                selectedTime === time
                                    ? "bg-primary text-white border-primary shadow-sm"
                                    : "bg-white border-gray-200 hover:border-primary/50 text-foreground"
                            )}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-between pt-8 border-t">
                <Button variant="outline" onClick={onBack}>Back</Button>
                <Button onClick={handleNext} disabled={selectedDate === null || !selectedTime}>
                    Continue
                </Button>
            </div>
        </div>
    );
}
