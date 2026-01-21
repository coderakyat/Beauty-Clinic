"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-24 bg-surface-alt-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        {/* Decorative Corner Border */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary hidden md:block" />

                        {/* Main Image Container */}
                        <div className="overflow-hidden shadow-2xl h-[500px]">
                            <img
                                alt="Abstract smooth texture representing skin care"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7EWJQhH780w1CABjxAPBB8eKmlbyYN6fxbW0ypDgPJEFn91XwGn9NXHAmCXQAUUUd0eJu2uTyVJBtdH6OJSYCwkBs8t-2hnXcxDB8Or-FmoLoRxZmmdp3WqkYBaqJpFZaAM-_FH7VUSjXi12kIrR36TxM811kZ4qPwrtEp8HfHavhulHwovNFnAndxFOqYQ7yfigLOYv6zhxR0gRO0bU1ZQcAUnJ5fMaNO3TadmEWGfrK6Q8_uDQVHQ7qzA4Rmp_SzVjKP47CoqN8"
                            />
                        </div>

                        {/* Statistics Card */}
                        <div className="absolute -bottom-6 -right-6 bg-surface-dark p-6 shadow-xl border border-border-dark hidden md:block max-w-xs">
                            <p className="text-primary font-display text-4xl font-bold mb-1">10+</p>
                            <p className="text-text-muted-dark text-sm">Tahun Keunggulan dalam Kedokteran Estetika</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Seni Kecantikan Abadi <span className="text-primary">Contoh6</span>
                        </h2>
                        <p className="text-text-muted-dark mb-8 leading-relaxed">
                            Di Contoh6, kami percaya bahwa kecantikan adalah perjalanan pribadi. Visi kami adalah menyediakan tempat
                            dimana ilmu kedokteran canggih bertemu dengan keramahan mewah. Dengan teknologi mutakhir dan
                            tim dokter kulit bersertifikat, kami berdedikasi untuk mengungkap kecantikan alami Anda.
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                <span className="text-foreground font-medium">Tenaga Medis Profesional Bersertifikat</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                <span className="text-foreground font-medium">Teknologi Canggih Bersertifikat BPOM</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                <span className="text-foreground font-medium">Suasana Pribadi dan Mewah</span>
                            </li>
                        </ul>

                        {/* CTA Link */}
                        <Button variant="link" asChild className="text-primary font-bold hover:text-primary-hover p-0 h-auto group">
                            <Link href="/tentang" className="flex items-center">
                                Selengkapnya Tentang Kami
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
