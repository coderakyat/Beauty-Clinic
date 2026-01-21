"use client";

import { Button } from "@/components/ui/Button";
import { useReservationModal } from "@/context/ReservationModalContext";
import { cn } from "@/lib/utils";

interface ReservationButtonProps {
    children?: React.ReactNode;
    className?: string;
    variant?: "default" | "outline";
}

export function ReservationButton({
    children = "Reservasi Sekarang",
    className,
    variant = "default"
}: ReservationButtonProps) {
    const { openModal } = useReservationModal();

    return (
        <Button
            onClick={openModal}
            variant={variant}
            className={cn(
                variant === "default"
                    ? "bg-primary hover:bg-primary-hover text-background font-bold"
                    : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-background",
                className
            )}
        >
            {children}
        </Button>
    );
}
