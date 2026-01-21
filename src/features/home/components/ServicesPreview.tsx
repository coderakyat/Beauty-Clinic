"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Perawatan Wajah",
        description: "Segarkan kulit Anda dengan facial pembersihan mendalam dan hidrasi khas kami.",
        price: "Mulai dari Rp 350rb",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmPt4hkKCVhjRBkDVap5HUkHmGjMoLSepGILx0zRUDtG227NV_hgwwOXW7m9SZ8xAfTBU5Bd-lLxHa73OMMKNYXgjczYvrwyq4-mhekx5klzv5NTMEgmECiSVJkyNNLodz5D0tewdWkltk3QAjkgB-J7b4E76DKsk4aTfRbyb1_eUEuY8ZCQoGRfNfIXjzsSzffV3pYJBbuYlx3Vuv627nhe9ae7ssOKB1VYULHDWomEeBcRDpt3WguIhqjK_3sRLywGLBaDH8C5Xg",
    },
    {
        title: "Terapi Laser",
        description: "Solusi laser canggih untuk bekas jerawat, pigmentasi, dan peremajaan kulit.",
        price: "Mulai dari Rp 1.2jt",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZEMU_c0s2erH6hGS6vq0aR_11Iq0vKrzq8iP4N4zDpzEIRZtnTitpjr-ZO39-0QpDgpzSSDBKk8cIVjTH0_ccmq70Cp58eDO24t3cy-Cr6KfHdQIJo1erebYvtHtK8aTxwYvt9bD9HwatGtTSGp245Liu8uwypHOvQI3HAoFFs0NoLRlmmmwo6xC52GVS-VRRoW_lAyALQ6H0S4lPN8Ja9v4TsoQpcAO6jipg0AnYiPCyE6EAgy9-qjMXRSH6eJGYpIf9N07ftFE",
    },
    {
        title: "Anti-Penuaan",
        description: "Botox dan filler yang diberikan oleh profesional ahli untuk tampilan awet muda.",
        price: "Mulai dari Rp 2.5jt",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoSnMMSdO4Y5-NGofjwi82DTb3z1WKJo85vKL3jztxIPDjl709GeSCrz5at7uI7scxZBsMUBTZEHRy-MjI4E8Xpi7dLS0xjkmYSwAPwCuMejLcymir0FVijDLR_LbuvVmk89GzXXRiS88nSAXFwnDS8FsD6vHuFvzHFWQRCdEQE4rodJhsxnXKadOeV7K1g1LyBgeTsxbWJ4wiJyGdtzKl1cG5kIIa9LwdwqHsiw0hqpsvHauhK0U0yDfNpGvxlVnEUWHSaA-HLaF",
    },
    {
        title: "Pembentukan Tubuh",
        description: "Perawatan pengurangan lemak non-invasif dan pembentukan tubuh yang disesuaikan untuk Anda.",
        price: "Mulai dari Rp 3jt",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb5rSz93is0poDriJWorKKrRWqgLvlVK9NQYR7jhc5B8AUjIY4ocZd9BdV_MZT1m3hvUi3YitIUWVe_beogBlFfY3gQQzndNn7Htvcc77G6_kVddC4swTFBG6oF7bNzsSsC8Nu7TEqjbXalqy_AVZePSYYOBfRfNBadDyM2GwCZy3OpQpc0qVpdZ8j7MFY7sqB9OO3eJVm2YmB-Pt9RJsA7h3oYtdjqw0Mkwgn1lIh_NX_ds7V-RINfyvyLohlnOr3GUw_MeN2DHR4",
    },
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                        Layanan Premium Kami
                    </h2>
                    <p className="text-text-muted-dark">
                        Temukan pilihan perawatan terbaik yang dirancang untuk meningkatkan kecantikan alami dan kepercayaan diri Anda.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-surface-dark overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/30"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    src={service.image}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-text-muted-dark mb-4 line-clamp-3">
                                    {service.description}
                                </p>
                                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-4">
                                    {service.price}
                                </p>
                                <Link
                                    href="/layanan"
                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
                                >
                                    Selengkapnya
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button asChild variant="outline" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background font-bold py-3 px-8 transition-all">
                        <Link href="/layanan">Lihat Semua Layanan</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
