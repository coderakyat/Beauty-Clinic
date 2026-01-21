"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Extended doctor data with more details matching reference
const doctorsData = [
    {
        id: "dr-sarah",
        name: "Dr. Sarah Johnson",
        specialty: "Dermatologist",
        role: "HEAD DERMATOLOGIST",
        credentials: "Sp.KK, FINSDV, FAADV",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDp9hGwcNEfxyadoJKwuSKlOk6Wn8EXY0HLut3kdWWPvDTywI5wAPd_zZ64SIZr1jKkTTOmjXgOSmGhSZBX_fN2cEoIp6oyleDflFBNW3JqORKjeukMLo4VivMXaq9jO56-9HSYjgUPdjQELMMMcIuAlpxBbSbzqeFRZzYYTHIdEUPPp74B56_pvNCO41INd5qRjXbhVV-m7jxUef68vp22JujfKTwEmKFAXbJwW7m1rUuatu54F_WE2pMuWMCBaup-1xwY1Ba5j2m",
        bio: "Dengan pengalaman lebih dari 15 tahun di bidang dermatologi estetika, Dr. Sarah memimpin tim medis kami dengan fokus pada perawatan kulit holistik. Beliau dikenal dengan pendekatannya yang personal dan hasil yang natural.",
        stats: [
            { value: "15+", label: "Tahun Pengalaman" },
            { value: "5k+", label: "Pasien Puas" },
        ],
    },
    {
        id: "dr-michael",
        name: "Dr. Michael Chen",
        specialty: "Aesthetic Surgeon",
        role: "AESTHETIC SURGEON",
        credentials: "Sp.BP-RE, MARS",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ57z14NBvxFFyvXOx8o39c2H5b_a8NWKGlNJBbVYr3hXLi_ppBh2FUyi_Z2PPtKwDVzkmOisxJrIQg6rBJIYN9NGJ9xvKfZDmkS5Cn_fSZhDOn0cO0LmkLRZxutYps7ootoWjQJ57iBWYnQhgLLjhdmXV-n_AUShQ0souuHJprN_JyErUwagInPOb83SFJqLN9_9oHlLjpywerPVWFpgsmewqyxgcb8T3sNJjUXaMlAkICHNgv73y40vz3Dys5DlnPGxJQ1I03r2j",
        bio: "Spesialis dalam bedah estetika wajah dan kontur tubuh. Dr. Michael menggabungkan teknik bedah presisi dengan seni estetika untuk menciptakan proporsi yang harmonis dan alami.",
        stats: [
            { value: "12+", label: "Tahun Pengalaman" },
            { value: "100%", label: "Dedikasi" },
        ],
    },
    {
        id: "dr-emily",
        name: "Dr. Emily Davis",
        specialty: "Skin Specialist",
        role: "LASER SPECIALIST",
        credentials: "Dipl. AAAM, CIBTAC",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB82aZrSJEXbMJ9HN8fjaR0ueokKz2EGTPxM0kxUcw6SXx9eTGetN9Fdobjwq1uVVb0zInRR3KEDi_MqC-LAzemx48lDW-23bUPBXtOmJcDNdBSi5YqF-YhBVsgeN4T7hiSmqmAoW32wg6099VA195yJKhRhE3ti8ZQx_D98AgKI9KUz8PkY7Uu1C0U0f9Z31d1iT8_Yhd6Uq9VmySfX7GkAI0TKxnpPU8G7xkI3gYUcPcWzdC22LJr1Sjq4W_1X7Pn38xvEG92-aA4",
        bio: "Ahli dalam teknologi laser canggih dan perawatan skin non-bedah. Dr. Emily berdedikasi untuk membantu pasien mengatasi masalah pigmentasi, bekas jerawat, dan perawatan anti dengan teknologi terkini.",
        stats: [
            { value: "8+", label: "Sertifikasi Global" },
            { value: "Top", label: "Rated Expert" },
        ],
    },
];

export default function DoctorsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background pt-20">
                {/* Hero Section */}
                <section className="py-20 text-center bg-gradient-to-b from-surface-alt-dark to-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 inline-block">
                            Professional Team
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                            Tim Dokter Kami
                        </h1>
                        <p className="text-lg text-text-muted-dark max-w-2xl mx-auto">
                            Bertemu dengan para ahli estetika bersertifikat yang menggabungkan seni dan ilmu
                            medis untuk mewujudkan kecantikan ideal Anda.
                        </p>
                    </div>
                </section>

                {/* Doctors List - Alternating Layout */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-0">
                        {doctorsData.map((doctor, index) => (
                            <div
                                key={doctor.id}
                                className={cn(
                                    "grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-border-dark",
                                    index === 0 && "border-t"
                                )}
                            >
                                {/* Image Side */}
                                <div className={cn(
                                    "relative h-[400px] lg:h-[500px]",
                                    index % 2 === 1 && "lg:order-2"
                                )}>
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content Side */}
                                <div className={cn(
                                    "bg-surface-dark p-8 lg:p-12 flex flex-col justify-center",
                                    index % 2 === 1 && "lg:order-1"
                                )}>
                                    {/* Role Label */}
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                        {doctor.role}
                                    </span>

                                    {/* Name */}
                                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
                                        {doctor.name}
                                    </h2>

                                    {/* Credentials */}
                                    <p className="text-primary text-sm mb-6">
                                        {doctor.credentials}
                                    </p>

                                    {/* Bio */}
                                    <p className="text-text-muted-dark mb-8 leading-relaxed">
                                        {doctor.bio}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex gap-12 mb-8">
                                        {doctor.stats.map((stat, idx) => (
                                            <div key={idx}>
                                                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                                <p className="text-xs text-text-muted-dark uppercase tracking-wider">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <div>
                                        <Button asChild className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background px-6 py-3">
                                            <Link href="/reservasi">Booking Konsultasi</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-surface-alt-dark">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                            Siap untuk Konsultasi?
                        </h2>
                        <p className="text-text-muted-dark mb-8 max-w-2xl mx-auto">
                            Jadwalkan pertemuan dengan tim dokter kami untuk analisis kulit mendalam dan rencana perawatan yang dipersonalisasi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background px-8 py-3">
                                <Link href="/reservasi">Buat Janji Temu</Link>
                            </Button>
                            <Button asChild className="bg-primary hover:bg-primary-hover text-background px-8 py-3">
                                <Link href="https://wa.me/6281234567890">Hubungi WhatsApp</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
