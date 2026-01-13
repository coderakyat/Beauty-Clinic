
"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-start overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center">
            {/* Premium Gradient Overlay for better text legibility & depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-black/20" /> {/* General dimmer */}

            <div className="container relative z-10 px-4 md:px-6 text-left text-white">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight text-white drop-shadow-lg leading-[1.1]">
                        Unveil Your <br />
                        <span className="text-primary italic">True Radiance</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 drop-shadow-sm font-light leading-relaxed max-w-[600px]">
                        Experience world-class aesthetic treatments tailored to your unique beauty.
                        Where science meets art in a sanctuary of luxury.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 border-0 h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105">
                            <Link href="/reservasi">Reservasi Sekarang</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white h-12 px-8 text-lg rounded-full backdrop-blur-sm transition-all duration-300">
                            <Link href="/layanan">Lihat Layanan</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
