"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Dokter Kulit",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDp9hGwcNEfxyadoJKwuSKlOk6Wn8EXY0HLut3kdWWPvDTywI5wAPd_zZ64SIZr1jKkTTOmjXgOSmGhSZBX_fN2cEoIp6oyleDflFBNW3JqORKjeukMLo4VivMXaq9jO56-9HSYjgUPdjQELMMMcIuAlpxBbSbzqeFRZzYYTHIdEUPPp74B56_pvNCO41INd5qRjXbhVV-m7jxUef68vp22JujfKTwEmKFAXbJwW7m1rUuatu54F_WE2pMuWMCBaup-1xwY1Ba5j2m",
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Dokter Bedah Estetika",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ57z14NBvxFFyvXOx8o39c2H5b_a8NWKGlNJBbVYr3hXLi_ppBh2FUyi_Z2PPtKwDVzkmOisxJrIQg6rBJIYN9NGJ9xvKfZDmkS5Cn_fSZhDOn0cO0LmkLRZxutYps7ootoWjQJ57iBWYnQhgLLjhdmXV-n_AUShQ0souuHJprN_JyErUwagInPOb83SFJqLN9_9oHlLjpywerPVWFpgsmewqyxgcb8T3sNJjUXaMlAkICHNgv73y40vz3Dys5DlnPGxJQ1I03r2j",
    },
    {
        name: "Dr. Emily Davis",
        specialty: "Spesialis Kulit",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB82aZrSJEXbMJ9HN8fjaR0ueokKz2EGTPxM0kxUcw6SXx9eTGetN9Fdobjwq1uVVb0zInRR3KEDi_MqC-LAzemx48lDW-23bUPBXtOmJcDNdBSi5YqF-YhBVsgeN4T7hiSmqmAoW32wg6099VA195yJKhRhE3ti8ZQx_D98AgKI9KUz8PkY7Uu1C0U0f9Z31d1iT8_Yhd6Uq9VmySfX7GkAI0TKxnpPU8G7xkI3gYUcPcWzdC22LJr1Sjq4W_1X7Pn38xvEG92-aA4",
    },
];

export function DoctorsPreview() {
    return (
        <section className="py-24 bg-surface-alt-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                        Kenali Para Ahli Kami
                    </h2>
                    <p className="text-text-muted-dark">
                        Tim dokter kulit dan spesialis estetika bersertifikat kami berdedikasi
                        untuk memberikan perawatan yang aman, efektif, dan personal.
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="text-center group">
                            {/* Doctor Image */}
                            <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden">
                                <img
                                    alt={doctor.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    src={doctor.image}
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4" />
                            </div>

                            {/* Doctor Info */}
                            <h3 className="font-display text-xl font-bold text-foreground">
                                {doctor.name}
                            </h3>
                            <p className="text-primary text-sm font-medium mb-3">
                                {doctor.specialty}
                            </p>
                            <Link
                                href="/dokter"
                                className="text-xs text-text-muted-dark hover:text-primary uppercase tracking-wider transition-colors"
                            >
                                Lihat Profil
                            </Link>
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <div className="text-center mt-12">
                    <Button asChild variant="outline" className="bg-transparent border border-gray-400 text-foreground hover:border-primary hover:text-primary py-2 px-6 text-sm transition-all">
                        <Link href="/dokter">Lihat Semua Spesialis</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
