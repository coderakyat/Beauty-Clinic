"use client";

import { useReservationModal } from "@/context/ReservationModalContext";
import { useState } from "react";
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const services = [
    { id: 1, name: "Perawatan Wajah", price: "Rp 350.000" },
    { id: 2, name: "Terapi Laser", price: "Rp 1.200.000" },
    { id: 3, name: "Anti-Penuaan", price: "Rp 2.500.000" },
    { id: 4, name: "Pembentukan Tubuh", price: "Rp 3.000.000" },
];

const timeSlots = [
    "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
];

export function ReservationModal() {
    const { isOpen, closeModal } = useReservationModal();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // In a real app, this would submit to an API
        setStep(3); // Go to success step
    };

    const handleClose = () => {
        closeModal();
        // Reset form after animation
        setTimeout(() => {
            setStep(1);
            setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "" });
        }, 300);
    };

    const isStep1Valid = formData.name && formData.phone && formData.email;
    const isStep2Valid = formData.service && formData.date && formData.time;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-surface-dark border border-border-dark w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border-dark">
                                <h2 className="font-display text-xl font-bold text-primary">
                                    {step === 3 ? "Reservasi Berhasil!" : "Reservasi Sekarang"}
                                </h2>
                                <button
                                    onClick={handleClose}
                                    className="text-text-muted-dark hover:text-foreground transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Progress Indicator */}
                            {step < 3 && (
                                <div className="px-6 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`flex-1 h-1 rounded ${step >= 1 ? "bg-primary" : "bg-border-dark"}`} />
                                        <div className={`flex-1 h-1 rounded ${step >= 2 ? "bg-primary" : "bg-border-dark"}`} />
                                    </div>
                                    <p className="text-xs text-text-muted-dark mt-2">
                                        Langkah {step} dari 2
                                    </p>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6">
                                {/* Step 1: Personal Info */}
                                {step === 1 && (
                                    <div className="space-y-4">
                                        <h3 className="font-medium text-foreground mb-4">Informasi Pribadi</h3>

                                        <div>
                                            <label className="text-sm text-text-muted-dark mb-1 block">Nama Lengkap</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted-dark" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Masukkan nama Anda"
                                                    className="w-full pl-10 pr-4 py-3 bg-background border border-border-dark text-foreground placeholder:text-text-muted-dark focus:border-primary focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm text-text-muted-dark mb-1 block">Nomor Telepon</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted-dark" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="08xx-xxxx-xxxx"
                                                    className="w-full pl-10 pr-4 py-3 bg-background border border-border-dark text-foreground placeholder:text-text-muted-dark focus:border-primary focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm text-text-muted-dark mb-1 block">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted-dark" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="email@contoh.com"
                                                    className="w-full pl-10 pr-4 py-3 bg-background border border-border-dark text-foreground placeholder:text-text-muted-dark focus:border-primary focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            onClick={() => setStep(2)}
                                            disabled={!isStep1Valid}
                                            className="w-full mt-4 bg-primary hover:bg-primary-hover text-background font-bold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Lanjutkan
                                        </Button>
                                    </div>
                                )}

                                {/* Step 2: Service & Schedule */}
                                {step === 2 && (
                                    <div className="space-y-4">
                                        <h3 className="font-medium text-foreground mb-4">Pilih Layanan & Jadwal</h3>

                                        <div>
                                            <label className="text-sm text-text-muted-dark mb-1 block">Layanan</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-background border border-border-dark text-foreground focus:border-primary focus:outline-none transition-colors"
                                            >
                                                <option value="">Pilih layanan</option>
                                                {services.map((service) => (
                                                    <option key={service.id} value={service.name}>
                                                        {service.name} - {service.price}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-sm text-text-muted-dark mb-1 block">Tanggal</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted-dark" />
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleInputChange}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className="w-full pl-10 pr-4 py-3 bg-background border border-border-dark text-foreground focus:border-primary focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm text-text-muted-dark mb-2 block">Waktu</label>
                                            <div className="grid grid-cols-5 gap-2">
                                                {timeSlots.map((time) => (
                                                    <button
                                                        key={time}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, time })}
                                                        className={`py-2 text-sm border transition-colors ${formData.time === time
                                                                ? "bg-primary text-background border-primary"
                                                                : "bg-background text-foreground border-border-dark hover:border-primary"
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3 mt-4">
                                            <Button
                                                onClick={() => setStep(1)}
                                                variant="outline"
                                                className="flex-1 bg-transparent border-border-dark text-foreground hover:border-primary"
                                            >
                                                Kembali
                                            </Button>
                                            <Button
                                                onClick={handleSubmit}
                                                disabled={!isStep2Valid}
                                                className="flex-1 bg-primary hover:bg-primary-hover text-background font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Konfirmasi
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Success */}
                                {step === 3 && (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                            Reservasi Berhasil!
                                        </h3>
                                        <p className="text-text-muted-dark text-sm mb-6">
                                            Terima kasih, {formData.name}! Reservasi Anda untuk <strong className="text-primary">{formData.service}</strong> pada tanggal <strong className="text-primary">{formData.date}</strong> pukul <strong className="text-primary">{formData.time}</strong> telah dikonfirmasi.
                                        </p>
                                        <p className="text-xs text-text-muted-dark mb-6">
                                            Kami akan menghubungi Anda di {formData.phone} untuk konfirmasi lebih lanjut.
                                        </p>
                                        <Button
                                            onClick={handleClose}
                                            className="bg-primary hover:bg-primary-hover text-background font-bold px-8"
                                        >
                                            Tutup
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
