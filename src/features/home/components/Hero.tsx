
"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center">
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white drop-shadow-md">
                        Unveil Your True Radiance
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-200 drop-shadow-sm font-light">
                        Experience world-class aesthetic treatments tailored to your unique beauty.
                        Where science meets art in a sanctuary of luxury.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 border-0">
                            <Link href="/reservasi">Reservasi Sekarang</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                            <Link href="/layanan">Lihat Layanan</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
