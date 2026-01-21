"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { services } from "@/features/services";
import { Clock, User, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Flatten all service items with category info
const allServices = services.flatMap((category) =>
    category.items.map((item) => ({
        ...item,
        category: category.category,
        categoryId: category.id,
    }))
);

// Category tabs
const categories = [
    { id: "all", label: "All Services" },
    { id: "facial-treatments", label: "Facial Care" },
    { id: "laser-treatments", label: "Laser & Light" },
    { id: "body-treatments", label: "Body Contouring" },
    { id: "injectables", label: "Injectables" },
];

// Service images from reference
const serviceImages: Record<string, string> = {
    "f1": "https://lh3.googleusercontent.com/aida-public/AB6AXuDmPt4hkKCVhjRBkDVap5HUkHmGjMoLSepGILx0zRUDtG227NV_hgwwOXW7m9SZ8xAfTBU5Bd-lLxHa73OMMKNYXgjczYvrwyq4-mhekx5klzv5NTMEgmECiSVJkyNNLodz5D0tewdWkltk3QAjkgB-J7b4E76DKsk4aTfRbyb1_eUEuY8ZCQoGRfNfIXjzsSzffV3pYJBbuYlx3Vuv627nhe9ae7ssOKB1VYULHDWomEeBcRDpt3WguIhqjK_3sRLywGLBaDH8C5Xg",
    "f2": "https://lh3.googleusercontent.com/aida-public/AB6AXuDmPt4hkKCVhjRBkDVap5HUkHmGjMoLSepGILx0zRUDtG227NV_hgwwOXW7m9SZ8xAfTBU5Bd-lLxHa73OMMKNYXgjczYvrwyq4-mhekx5klzv5NTMEgmECiSVJkyNNLodz5D0tewdWkltk3QAjkgB-J7b4E76DKsk4aTfRbyb1_eUEuY8ZCQoGRfNfIXjzsSzffV3pYJBbuYlx3Vuv627nhe9ae7ssOKB1VYULHDWomEeBcRDpt3WguIhqjK_3sRLywGLBaDH8C5Xg",
    "f3": "https://lh3.googleusercontent.com/aida-public/AB6AXuDmPt4hkKCVhjRBkDVap5HUkHmGjMoLSepGILx0zRUDtG227NV_hgwwOXW7m9SZ8xAfTBU5Bd-lLxHa73OMMKNYXgjczYvrwyq4-mhekx5klzv5NTMEgmECiSVJkyNNLodz5D0tewdWkltk3QAjkgB-J7b4E76DKsk4aTfRbyb1_eUEuY8ZCQoGRfNfIXjzsSzffV3pYJBbuYlx3Vuv627nhe9ae7ssOKB1VYULHDWomEeBcRDpt3WguIhqjK_3sRLywGLBaDH8C5Xg",
    "l1": "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZEMU_c0s2erH6hGS6vq0aR_11Iq0vKrzq8iP4N4zDpzEIRZtnTitpjr-ZO39-0QpDgpzSSDBKk8cIVjTH0_ccmq70Cp58eDO24t3cy-Cr6KfHdQIJo1erebYvtHtK8aTxwYvt9bD9HwatGtTSGp245Liu8uwypHOvQI3HAoFFs0NoLRlmmmwo6xC52GVS-VRRoW_lAyALQ6H0S4lPN8Ja9v4TsoQpcAO6jipg0AnYiPCyE6EAgy9-qjMXRSH6eJGYpIf9N07ftFE",
    "l2": "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZEMU_c0s2erH6hGS6vq0aR_11Iq0vKrzq8iP4N4zDpzEIRZtnTitpjr-ZO39-0QpDgpzSSDBKk8cIVjTH0_ccmq70Cp58eDO24t3cy-Cr6KfHdQIJo1erebYvtHtK8aTxwYvt9bD9HwatGtTSGp245Liu8uwypHOvQI3HAoFFs0NoLRlmmmwo6xC52GVS-VRRoW_lAyALQ6H0S4lPN8Ja9v4TsoQpcAO6jipg0AnYiPCyE6EAgy9-qjMXRSH6eJGYpIf9N07ftFE",
    "i1": "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoSnMMSdO4Y5-NGofjwi82DTb3z1WKJo85vKL3jztxIPDjl709GeSCrz5at7uI7scxZBsMUBTZEHRy-MjI4E8Xpi7dLS0xjkmYSwAPwCuMejLcymir0FVijDLR_LbuvVmk89GzXXRiS88nSAXFwnDS8FsD6vHuFvzHFWQRCdEQE4rodJhsxnXKadOeV7K1g1LyBgeTsxbWJ4wiJyGdtzKl1cG5kIIa9LwdwqHsiw0hqpsvHauhK0U0yDfNpGvxlVnEUWHSaA-HLaF",
    "i2": "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoSnMMSdO4Y5-NGofjwi82DTb3z1WKJo85vKL3jztxIPDjl709GeSCrz5at7uI7scxZBsMUBTZEHRy-MjI4E8Xpi7dLS0xjkmYSwAPwCuMejLcymir0FVijDLR_LbuvVmk89GzXXRiS88nSAXFwnDS8FsD6vHuFvzHFWQRCdEQE4rodJhsxnXKadOeV7K1g1LyBgeTsxbWJ4wiJyGdtzKl1cG5kIIa9LwdwqHsiw0hqpsvHauhK0U0yDfNpGvxlVnEUWHSaA-HLaF",
    "i3": "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoSnMMSdO4Y5-NGofjwi82DTb3z1WKJo85vKL3jztxIPDjl709GeSCrz5at7uI7scxZBsMUBTZEHRy-MjI4E8Xpi7dLS0xjkmYSwAPwCuMejLcymir0FVijDLR_LbuvVmk89GzXXRiS88nSAXFwnDS8FsD6vHuFvzHFWQRCdEQE4rodJhsxnXKadOeV7K1g1LyBgeTsxbWJ4wiJyGdtzKl1cG5kIIa9LwdwqHsiw0hqpsvHauhK0U0yDfNpGvxlVnEUWHSaA-HLaF",
    "b1": "https://lh3.googleusercontent.com/aida-public/AB6AXuCb5rSz93is0poDriJWorKKrRWqgLvlVK9NQYR7jhc5B8AUjIY4ocZd9BdV_MZT1m3hvUi3YitIUWVe_beogBlFfY3gQQzndNn7Htvcc77G6_kVddC4swTFBG6oF7bNzsSsC8Nu7TEqjbXalqy_AVZePSYYOBfRfNBadDyM2GwCZy3OpQpc0qVpdZ8j7MFY7sqB9OO3eJVm2YmB-Pt9RJsA7h3oYtdjqw0Mkwgn1lIh_NX_ds7V-RINfyvyLohlnOr3GUw_MeN2DHR4",
    "b2": "https://lh3.googleusercontent.com/aida-public/AB6AXuCb5rSz93is0poDriJWorKKrRWqgLvlVK9NQYR7jhc5B8AUjIY4ocZd9BdV_MZT1m3hvUi3YitIUWVe_beogBlFfY3gQQzndNn7Htvcc77G6_kVddC4swTFBG6oF7bNzsSsC8Nu7TEqjbXalqy_AVZePSYYOBfRfNBadDyM2GwCZy3OpQpc0qVpdZ8j7MFY7sqB9OO3eJVm2YmB-Pt9RJsA7h3oYtdjqw0Mkwgn1lIh_NX_ds7V-RINfyvyLohlnOr3GUw_MeN2DHR4",
};

// Feature highlights for each service
const serviceFeatures: Record<string, string[]> = {
    "f1": ["Deep Hydration", "Pro Glow Mask", "Instant Results", "Safe for All Skin"],
    "f2": ["Pore Cleansing", "Anti-Inflammatory", "Reduces Acne", "Gentle Formula"],
    "f3": ["24K Gold Leaf", "Anti-Aging", "Lifting & Firming", "Luxury Experience"],
    "l1": ["Pigmentation", "Acne Scars", "Skin Texture", "Zero Downtime"],
    "l2": ["Even Skin Tone", "IPL Technology", "Quick Session", "Safe Treatment"],
    "i1": ["FDA Approved", "Wrinkle Reduction", "Immediate Results", "Safe for Sensitive"],
    "i2": ["Volume Restore", "Natural Results", "Long Lasting", "Minimal Downtime"],
    "i3": ["Deep Hydration", "Skin Repair", "DNA Salmon", "Premium Quality"],
    "b1": ["Non-Surgical", "Permanent Fat Loss", "Safe & Effective", "Clinically Proven"],
    "b2": ["Skin Tightening", "RF Technology", "Body Contouring", "No Downtime"],
};

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices = activeCategory === "all"
        ? allServices
        : allServices.filter((s) => s.categoryId === activeCategory);

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background pt-20">
                {/* Hero Section */}
                <section className="py-20 text-center bg-gradient-to-b from-surface-alt-dark to-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 inline-block">
                            Our Expertise
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                            Signature Treatments
                        </h1>
                        <p className="text-lg text-text-muted-dark max-w-2xl mx-auto">
                            Discover our curated selection of aesthetic procedures, designed to enhance your natural
                            beauty with precision and care.
                        </p>
                    </div>
                </section>

                {/* Category Filter Tabs */}
                <section className="border-b border-border-dark sticky top-20 bg-background z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium whitespace-nowrap border transition-all",
                                        activeCategory === cat.id
                                            ? "bg-primary text-background border-primary"
                                            : "bg-transparent text-text-muted-dark border-border-dark hover:border-primary hover:text-primary"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        {filteredServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={cn(
                                    "grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border-dark overflow-hidden",
                                    index % 2 === 1 && "lg:flex-row-reverse"
                                )}
                            >
                                {/* Image Side */}
                                <div className={cn(
                                    "relative h-64 lg:h-auto lg:min-h-[400px]",
                                    index % 2 === 1 && "lg:order-2"
                                )}>
                                    <img
                                        src={serviceImages[service.id] || service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content Side */}
                                <div className={cn(
                                    "bg-surface-dark p-8 lg:p-12 flex flex-col justify-center",
                                    index % 2 === 1 && "lg:order-1"
                                )}>
                                    {/* Category & Duration */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                            {service.category}
                                        </span>
                                        <div className="flex items-center gap-4 text-text-muted-dark text-sm">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {service.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                                        {service.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-text-muted-dark mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {(serviceFeatures[service.id] || []).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-primary" />
                                                <span className="text-sm text-text-muted-dark">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <span className="text-xs text-text-muted-dark uppercase tracking-wider">Starting from</span>
                                            <p className="text-2xl font-bold text-primary">{service.price}</p>
                                        </div>
                                        <Button asChild className="bg-primary hover:bg-primary-hover text-background px-6 py-3">
                                            <Link href="/reservasi">Book Appointment →</Link>
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
                            Not sure what you need?
                        </h2>
                        <p className="text-text-muted-dark mb-8 max-w-2xl mx-auto">
                            Book a comprehensive skin analysis with our dermatologists. We'll assess your skin condition
                            and recommend a personalized treatment plan just for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background px-8 py-3">
                                <Link href="/reservasi">Schedule Consultation</Link>
                            </Button>
                            <Button asChild className="bg-primary hover:bg-primary-hover text-background px-8 py-3">
                                <Link href="https://wa.me/6281234567890">Contact WhatsApp</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
