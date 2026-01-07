
import { Button } from "@/components/ui/Button";
import { doctors } from "@/features/doctors";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export function StaffStep({ onNext, onBack }: { onNext: (data: any) => void, onBack: () => void }) {
    const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

    const handleNext = () => {
        if (selectedDoctorId) {
            const doctor = doctors.find(d => d.id === selectedDoctorId);
            onNext({ doctor });
        }
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold">Choose Your Expert</h2>
                <p className="text-muted-foreground">Select a specialist for your consultation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        onClick={() => setSelectedDoctorId(doctor.id)}
                        className={cn(
                            "flex gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 relative bg-white shadow-sm items-center",
                            selectedDoctorId === doctor.id ? "border-primary bg-primary/5" : "border-transparent"
                        )}
                    >
                        {selectedDoctorId === doctor.id && (
                            <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                                <Check className="w-3 h-3" />
                            </div>
                        )}

                        <div className="w-16 h-16 rounded-full bg-muted shrink-0 flex items-center justify-center text-xs text-muted-foreground overflow-hidden">
                            {/* Img would go here */}
                            {doctor.name.charAt(0)}
                        </div>

                        <div className="text-left">
                            <h3 className="font-bold text-base">{doctor.name}</h3>
                            <p className="text-xs text-primary font-medium uppercase">{doctor.specialty}</p>
                            <div className="flex gap-0.5 mt-1">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Option for "Any Doctor" */}
                <div
                    onClick={() => setSelectedDoctorId("any")}
                    className={cn(
                        "flex gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 relative bg-white shadow-sm items-center justify-center min-h-[100px]",
                        selectedDoctorId === "any" ? "border-primary bg-primary/5" : "border-transparent"
                    )}
                >
                    {selectedDoctorId === "any" && (
                        <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                            <Check className="w-3 h-3" />
                        </div>
                    )}
                    <span className="font-medium text-muted-foreground">Any Available Specialist</span>
                </div>
            </div>

            <div className="flex justify-between pt-8 border-t">
                <Button variant="outline" onClick={onBack}>Back</Button>
                <Button onClick={handleNext} disabled={!selectedDoctorId}>
                    Continue
                </Button>
            </div>
        </div>
    );
}
