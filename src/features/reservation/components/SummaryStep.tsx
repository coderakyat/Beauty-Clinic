
import { Button } from "@/components/ui/Button";
import { CheckCircle, Calendar, Clock, User, Scissors } from "lucide-react";

export function SummaryStep({ bookingData, onBack }: { bookingData: any, onBack: () => void }) {
    const isComplete = bookingData.service && bookingData.date && bookingData.time;

    if (!isComplete) {
        return (
            <div className="text-center py-12">
                <p className="text-destructive mb-4">Incomplete booking details.</p>
                <Button onClick={onBack}>Go Back</Button>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-green-700">Booking Summary</h2>
                <p className="text-muted-foreground">Please review your appointment details before confirming.</p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 border space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="p-2 bg-white rounded-md shadow-sm text-primary">
                        <Scissors className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Treatment</h4>
                        <p className="font-bold text-lg">{bookingData.service?.name}</p>
                        <p className="text-sm">{bookingData.service?.duration} • {bookingData.service?.price}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="p-2 bg-white rounded-md shadow-sm text-primary">
                        <User className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Specialist</h4>
                        <p className="font-bold text-lg">{bookingData.doctor?.name || "Any Specialist"}</p>
                        {bookingData.doctor?.specialty && <p className="text-sm">{bookingData.doctor.specialty}</p>}
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-md shadow-sm text-primary">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Date & Time</h4>
                        <p className="font-bold text-lg">{bookingData.date}</p>
                        <p className="text-sm flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {bookingData.time}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full text-lg font-bold shadow-lg shadow-primary/20">
                    Confirm Appointment
                </Button>
                <Button variant="ghost" onClick={onBack} className="w-full">
                    Back to Edit
                </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-4">
                By confirming, you agree to our cancellation policy.
            </p>
        </div>
    );
}
