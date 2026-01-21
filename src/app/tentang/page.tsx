"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Award, Heart, Shield, Users, Target, Sparkles } from "lucide-react";

// Timeline data
const timeline = [
    {
        year: "2010",
        title: "Pendirian",
        description: "Contoh6 didirikan dengan visi menjadi klinik kecantikan terkemuka di Indonesia.",
    },
    {
        year: "2014",
        title: "Ekspansi Pertama",
        description: "Membuka cabang kedua dan mulai mengadopsi teknologi laser canggih.",
    },
    {
        year: "2018",
        title: "Sertifikasi Internasional",
        description: "Memperoleh sertifikasi dari American Academy of Aesthetic Medicine.",
    },
    {
        year: "2022",
        title: "Era Digital",
        description: "Meluncurkan platform reservasi online dan telemedicine consultation.",
    },
    {
        year: "2024",
        title: "Hari Ini",
        description: "Melayani lebih dari 50.000 pasien dengan tim 15+ dokter spesialis.",
    },
];

// Values data
const values = [
    {
        icon: Heart,
        title: "Perawatan Holistik",
        description: "Kami percaya kecantikan sejati berasal dari kesehatan kulit yang optimal.",
    },
    {
        icon: Shield,
        title: "Keamanan Utama",
        description: "Semua prosedur menggunakan produk FDA-approved dengan standar medis tertinggi.",
    },
    {
        icon: Users,
        title: "Tim Profesional",
        description: "Dokter dan terapis bersertifikasi dengan pengalaman bertahun-tahun.",
    },
    {
        icon: Target,
        title: "Hasil Natural",
        description: "Fokus pada hasil yang meningkatkan kecantikan alami, bukan mengubahnya.",
    },
    {
        icon: Sparkles,
        title: "Teknologi Terkini",
        description: "Investasi berkelanjutan dalam peralatan dan teknik terbaru.",
    },
    {
        icon: Award,
        title: "Penghargaan",
        description: "Diakui sebagai salah satu klinik estetika terbaik di Asia Tenggara.",
    },
];

// Partner logos (placeholder)
const partners = [
    { name: "Allergan", logo: "https://via.placeholder.com/150x60?text=Allergan" },
    { name: "Merz Aesthetics", logo: "https://via.placeholder.com/150x60?text=Merz" },
    { name: "Galderma", logo: "https://via.placeholder.com/150x60?text=Galderma" },
    { name: "Cynosure", logo: "https://via.placeholder.com/150x60?text=Cynosure" },
    { name: "Candela", logo: "https://via.placeholder.com/150x60?text=Candela" },
    { name: "Lumenis", logo: "https://via.placeholder.com/150x60?text=Lumenis" },
];

export default function TentangPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background pt-20">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-b from-surface-alt-dark to-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 inline-block">
                                    Tentang Kami
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                                    Lebih dari Sekedar<br />
                                    <span className="text-primary">Klinik Kecantikan</span>
                                </h1>
                                <p className="text-text-muted-dark text-lg mb-8 leading-relaxed">
                                    Contoh6 adalah destinasi perawatan estetika premium yang menggabungkan
                                    seni kecantikan dengan ilmu kedokteran modern. Kami berkomitmen untuk
                                    membantu setiap pasien menemukan versi terbaik dari diri mereka.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild className="bg-primary hover:bg-primary-hover text-background px-8 py-3">
                                        <Link href="/reservasi">Konsultasi Gratis</Link>
                                    </Button>
                                    <Button asChild className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background px-8 py-3">
                                        <Link href="/dokter">Tim Dokter</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative h-[400px] lg:h-[500px]">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7EWJQhH780w1CABjxAPBB8eKmlbyYN6fxbW0ypDgPJEFn91XwGn9NXHAmCXQAUUUd0eJu2uTyVJBtdH6OJSYCwkBs8t-2hnXcxDB8Or-FmoLoRxZmmdp3WqkYBaqJpFZaAM-_FH7VUSjXi12kIrR36TxM811kZ4qPwrtEp8HfHavhulHwovNFnAndxFOqYQ7yfigLOYv6zhxR0gRO0bU1ZQcAUnJ5fMaNO3TadmEWGfrK6Q8_uDQVHQ7qzA4Rmp_SzVjKP47CoqN8"
                                    alt="About Contoh6"
                                    className="w-full h-full object-cover"
                                />
                                {/* Stats overlay */}
                                <div className="absolute bottom-6 left-6 right-6 bg-surface-dark/90 backdrop-blur-sm p-6 border border-border-dark">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-2xl font-bold text-primary">14+</p>
                                            <p className="text-xs text-text-muted-dark">Tahun Pengalaman</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-primary">50k+</p>
                                            <p className="text-xs text-text-muted-dark">Pasien Puas</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-primary">15+</p>
                                            <p className="text-xs text-text-muted-dark">Dokter Ahli</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-surface-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="p-8 border border-border-dark">
                                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mb-6">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Visi Kami</h3>
                                <p className="text-text-muted-dark leading-relaxed">
                                    Menjadi pusat estetika terdepan di Asia Tenggara yang dikenal dengan
                                    standar kualitas tertinggi, inovasi berkelanjutan, dan hasil yang
                                    mengubah hidup pasien kami.
                                </p>
                            </div>
                            <div className="p-8 border border-border-dark">
                                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mb-6">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Misi Kami</h3>
                                <p className="text-text-muted-dark leading-relaxed">
                                    Memberikan perawatan estetika personal dengan pendekatan holistik,
                                    menggunakan teknologi terkini, dan didukung oleh tim profesional
                                    yang berdedikasi untuk kesejahteraan setiap pasien.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 inline-block">
                                Nilai-Nilai Kami
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                                Mengapa Memilih Contoh6?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="p-6 bg-surface-dark border border-border-dark hover:border-primary/30 transition-colors">
                                    <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-text-muted-dark text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline / History */}
                <section className="py-20 bg-surface-alt-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 inline-block">
                                Sejarah
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                                Perjalanan Kami
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-dark transform md:-translate-x-1/2" />

                            <div className="space-y-12">
                                {timeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary transform -translate-x-1/2 z-10" />

                                        {/* Content */}
                                        <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                            <span className="text-3xl font-bold text-primary">{item.year}</span>
                                            <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-muted-dark">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Spacer for alternating layout */}
                                        <div className="hidden md:block md:w-1/2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-20 bg-surface-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 inline-block">
                                Kolaborasi
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                                Partner & Sertifikasi
                            </h2>
                            <p className="text-text-muted-dark max-w-2xl mx-auto">
                                Kami bekerja sama dengan brand dan institusi terkemuka dunia untuk
                                memberikan layanan terbaik bagi pasien kami.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                            {partners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-surface-alt-dark border border-border-dark flex items-center justify-center h-24 hover:border-primary/30 transition-colors"
                                >
                                    <span className="text-text-muted-dark font-medium text-center">
                                        {partner.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-4">
                            Mulai Perjalanan Kecantikan Anda
                        </h2>
                        <p className="text-background/80 mb-8 max-w-2xl mx-auto">
                            Jadwalkan konsultasi gratis dengan tim dokter kami dan temukan
                            perawatan yang tepat untuk Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-bold">
                                <Link href="/reservasi">Reservasi Sekarang</Link>
                            </Button>
                            <Button asChild className="bg-transparent border border-white text-white hover:bg-white hover:text-primary px-8 py-3">
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
