"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReservationModal } from "@/context/ReservationModalContext";

export function Hero() {
    const { openModal } = useReservationModal();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Luxury Clinic Interior"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDcxBxOtMYaWSwIUrEIYuMO0tiTF-9cVEW8ZFeynjSeKXaL7eApNl4vFzVE5r1YdB6tmp6t9T0993k0IP8w3hdFYJXWifjr2OB0um0DuEfv90nWxPHvYUKLjT2GVh0ymQDPwiF_fT8IWRihhzUtpruxQ2ayiNj8NOD0xPov_42bccDq3HsI6DJAKooNT6GRTdfU22yPqyeV_4bbQxPtJ5YHvkGsc2sl8JB8nWTqX1VIxvCqPfF9DarG9rBs8z8ZRiryQKpKw0EuEK"
                />
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    {/* Badge */}
                    <span className="inline-block py-1 px-3 bg-primary/20 border border-primary/50 text-primary text-xs font-bold tracking-wider mb-6 uppercase">
                        Klinik Estetika Premium
                    </span>

                    {/* Heading */}
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                        Ungkap <br />
                        <span className="text-primary italic">Kecantikan Alami Anda</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-200 mb-10 max-w-lg font-light leading-relaxed">
                        Rasakan perawatan estetika kelas dunia yang disesuaikan dengan kecantikan unik Anda.
                        Dimana ilmu pengetahuan bertemu seni dalam suasana mewah.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={openModal}
                            className="bg-primary hover:bg-primary-hover text-background font-bold py-3.5 px-8 transition-all shadow-glow flex items-center justify-center"
                        >
                            Reservasi Sekarang
                        </Button>
                        <Button asChild variant="outline" className="bg-transparent border border-gray-300 text-foreground hover:bg-foreground hover:text-background font-medium py-3.5 px-8 transition-all flex items-center justify-center">
                            <Link href="/layanan">Lihat Layanan</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
