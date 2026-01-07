
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import {
    AuthStep,
    ServiceStep,
    StaffStep,
    DateTimeStep,
    SummaryStep
} from "@/features/reservation";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, title: "Login/Register" },
    { id: 2, title: "Select Service" },
    { id: 3, title: "Choose Expert" },
    { id: 4, title: "Date & Time" },
    { id: 5, title: "Confirmation" },
];

export default function ReservationPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        user: null, // Would store user info
        service: null,
        doctor: null,
        date: null,
        time: null,
    });

    const nextStep = (data?: any) => {
        if (data) {
            setBookingData((prev) => ({ ...prev, ...data }));
        }
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="flex min-h-screen flex-col bg-muted/30">
            <Navbar />
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-heading font-bold text-center mb-8">Book Your Appointment</h1>

                    {/* Progress Indicator */}
                    <div className="hidden md:flex justify-between items-center mb-12 relative">
                        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center gap-2 bg-muted/30 px-3">
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                                    currentStep >= step.id ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                                )}>
                                    {step.id}
                                </div>
                                <span className={cn(
                                    "text-xs font-medium",
                                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                                )}>{step.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Progress */}
                    <div className="md:hidden text-center mb-8 text-sm font-medium text-muted-foreground">
                        Step {currentStep} of {steps.length}: <span className="text-primary">{steps[currentStep - 1].title}</span>
                    </div>

                    {/* Step Content */}
                    <div className="bg-background rounded-2xl shadow-sm border p-6 md:p-8">
                        {currentStep === 1 && <AuthStep onNext={nextStep} />}
                        {currentStep === 2 && <ServiceStep onNext={nextStep} onBack={prevStep} />}
                        {currentStep === 3 && <StaffStep onNext={nextStep} onBack={prevStep} />}
                        {currentStep === 4 && <DateTimeStep onNext={nextStep} onBack={prevStep} />}
                        {currentStep === 5 && <SummaryStep bookingData={bookingData} onBack={prevStep} />}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
