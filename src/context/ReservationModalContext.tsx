"use client";

import * as React from "react";

interface ReservationModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ReservationModalContext = React.createContext<ReservationModalContextType | undefined>(undefined);

export function ReservationModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ReservationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ReservationModalContext.Provider>
    );
}

export function useReservationModal() {
    const context = React.useContext(ReservationModalContext);
    if (context === undefined) {
        throw new Error("useReservationModal must be used within a ReservationModalProvider");
    }
    return context;
}
