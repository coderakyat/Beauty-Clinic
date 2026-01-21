"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Before/After transformation data
const transformations = [
    {
        id: "t1",
        title: "Focused Laser Treatment",
        sessions: "5 Sessions",
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWyLzS2TPLIB2SSqOLh9JQYsKiH0zOLdGZprQmFsxvC--z9a_nWvsCSYx0kqddovoXPYwgWl36LkcQdeneuNAPFAZQ8PBUkNsmeAn5c23g61NHqUFOrXRBcFCpXoTV31x55oE0AFRs1FPbxJuM9DtewY1rgeJtMyt9fRXV_GAzg25_GZvMTQ0cOmQTCAz_5EhnsujV3u_1gaPWXiMeUjJV3cVfPAsmNF6JNCfETxit9OMPmRm3FCXt1oUXZi-QuvbuvJhjSfWoC-r",
        after: "https://lh3.googleusercontent.com/aida-public/AB6AXuASj1ivvyO86J41kVD9LX16E4J5Q84E9hq3OUM0HfopHO8SFzD1k1ynujAcWWdIOHgkWJ43MwbF53JqQQZgsZ51abUHEyGXT-qU-KNFIVbu4duRDVr6W9sYfSeTOyxFMIJ2ut3YXLh4PcTOTkFn2BsWKZR-5dovSRs4iQ-ie6_pHSkkdNpJc_1POUWig4AZVHdO7EG0ZPDkY8kkbbX0ChgkeZgRW_twjv8PQlgmBS2qIbrdsB_lTn6TAg-y5-MGxq-Q2D0-NVFpSUyF",
    },
];

// Gallery categories and items
const galleryCategories = [
    { id: "all", label: "All" },
    { id: "treatments", label: "Treatments" },
    { id: "interiors", label: "Interiors" },
    { id: "technology", label: "Technology" },
];

const galleryItems = [
    {
        id: "g1",
        title: "Hydrafacial Deluxe",
        description: "Deep Cleansing & Hydration",
        category: "treatments",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmPt4hkKCVhjRBkDVap5HUkHmGjMoLSepGILx0zRUDtG227NV_hgwwOXW7m9SZ8xAfTBU5Bd-lLxHa73OMMKNYXgjczYvrwyq4-mhekx5klzv5NTMEgmECiSVJkyNNLodz5D0tewdWkltk3QAjkgB-J7b4E76DKsk4aTfRbyb1_eUEuY8ZCQoGRfNfIXjzsSzffV3pYJBbuYlx3Vuv627nhe9ae7ssOKB1VYULHDWomEeBcRDpt3WguIhqjK_3sRLywGLBaDH8C5Xg",
        tall: true,
    },
    {
        id: "g2",
        title: "Serenity Lounge",
        description: "Peaceful recovery zone",
        category: "interiors",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDcxBxOtMYaWSwIUrEIYuMO0tiTF-9cVEW8ZFeynjSeKXaL7eApNl4vFzVE5r1YdB6tmp6t9T0993k0IP8w3hdFYJXWifjr2OB0um0DuEfv90nWxPHvYUKLjT2GVh0ymQDPwiF_fT8IWRihhzUtpruxQ2ayiNj8NOD0xPov_42bccDq3HsI6DJAKooNT6GRTdfU22yPqyeV_4bbQxPtJ5YHvkGsc2sl8JB8nWTqX1VIxvCqPfF9DarG9rBs8z8ZRiryQKpKw0EuEK",
        tall: false,
    },
    {
        id: "g3",
        title: "Premium Products",
        description: "Used in our skincare",
        category: "technology",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZEMU_c0s2erH6hGS6vq0aR_11Iq0vKrzq8iP4N4zDpzEIRZtnTitpjr-ZO39-0QpDgpzSSDBKk8cIVjTH0_ccmq70Cp58eDO24t3cy-Cr6KfHdQIJo1erebYvtHtK8aTxwYvt9bD9HwatGtTSGp245Liu8uwypHOvQI3HAoFFs0NoLRlmmmwo6xC52GVS-VRRoW_lAyALQ6H0S4lPN8Ja9v4TsoQpcAO6jipg0AnYiPCyE6EAgy9-qjMXRSH6eJGYpIf9N07ftFE",
        tall: false,
    },
    {
        id: "g4",
        title: "Precision Laser",
        description: "Advanced dermatology tech",
        category: "technology",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoSnMMSdO4Y5-NGofjwi82DTb3z1WKJo85vKL3jztxIPDjl709GeSCrz5at7uI7scxZBsMUBTZEHRy-MjI4E8Xpi7dLS0xjkmYSwAPwCuMejLcymir0FVijDLR_LbuvVmk89GzXXRiS88nSAXFwnDS8FsD6vHuFvzHFWQRCdEQE4rodJhsxnXKadOeV7K1g1LyBgeTsxbWJ4wiJyGdtzKl1cG5kIIa9LwdwqHsiw0hqpsvHauhK0U0yDfNpGvxlVnEUWHSaA-HLaF",
        tall: true,
    },
    {
        id: "g5",
        title: "Expert Consultation",
        description: "Personalized treatment plans",
        category: "treatments",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7EWJQhH780w1CABjxAPBB8eKmlbyYN6fxbW0ypDgPJEFn91XwGn9NXHAmCXQAUUUd0eJu2uTyVJBtdH6OJSYCwkBs8t-2hnXcxDB8Or-FmoLoRxZmmdp3WqkYBaqJpFZaAM-_FH7VUSjXi12kIrR36TxM811kZ4qPwrtEp8HfHavhulHwovNFnAndxFOqYQ7yfigLOYv6zhxR0gRO0bU1ZQcAUnJ5fMaNO3TadmEWGfrK6Q8_uDQVHQ7qzA4Rmp_SzVjKP47CoqN8",
        tall: true,
    },
    {
        id: "g6",
        title: "Holistic Wellness",
        description: "Mind and body balance",
        category: "interiors",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb5rSz93is0poDriJWorKKrRWqgLvlVK9NQYR7jhc5B8AUjIY4ocZd9BdV_MZT1m3hvUi3YitIUWVe_beogBlFfY3gQQzndNn7Htvcc77G6_kVddC4swTFBG6oF7bNzsSsC8Nu7TEqjbXalqy_AVZePSYYOBfRfNBadDyM2GwCZy3OpQpc0qVpdZ8j7MFY7sqB9OO3eJVm2YmB-Pt9RJsA7h3oYtdjqw0Mkwgn1lIh_NX_ds7V-RINfyvyLohlnOr3GUw_MeN2DHR4",
        tall: false,
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [sliderPosition, setSliderPosition] = useState(50);

    const filteredItems = activeCategory === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1 pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-surface-alt-dark via-surface-dark to-background overflow-hidden">
                    {/* Decorative leaf */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                            <ellipse cx="50" cy="50" rx="30" ry="45" />
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="inline-block px-3 py-1 bg-primary text-background text-xs font-bold uppercase tracking-wider mb-4">
                                World Class Care
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
                                Timeless Beauty<br />
                                <span className="text-primary italic">through Science</span>
                            </h1>
                            <p className="text-text-muted-dark mb-8">
                                Explore our gallery of real results. Where artistic vision meets medical precision to reveal your natural radiance.
                            </p>

                            {/* Navigation Arrows */}
                            <div className="flex gap-2">
                                <button className="w-10 h-10 border border-border-dark flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-primary text-background flex items-center justify-center hover:bg-primary-hover transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transformations Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                                    Transformations
                                </h2>
                                <p className="text-gray-600">
                                    Drag the slider to reveal the results of our Focused Laser treatment.
                                </p>
                            </div>
                            <Link
                                href="#"
                                className="text-primary font-medium flex items-center gap-1 hover:underline"
                            >
                                View all case studies
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Before/After Slider */}
                        {transformations.map((item) => (
                            <div key={item.id} className="relative">
                                <div className="relative h-[400px] overflow-hidden">
                                    {/* After Image (Background) */}
                                    <img
                                        src={item.after}
                                        alt="After treatment"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    {/* Before Image (Clipped) */}
                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ width: `${sliderPosition}%` }}
                                    >
                                        <img
                                            src={item.before}
                                            alt="Before treatment"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                                        />

                                        {/* Before Label */}
                                        <span className="absolute bottom-4 left-4 px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase">
                                            Before
                                        </span>
                                    </div>

                                    {/* After Label */}
                                    <span className="absolute bottom-4 right-4 px-3 py-1 bg-primary text-background text-xs font-bold uppercase">
                                        After
                                    </span>

                                    {/* Slider Handle */}
                                    <div
                                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                                        style={{ left: `${sliderPosition}%` }}
                                    >
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-gray-300 flex items-center justify-center shadow-lg">
                                            <div className="flex gap-0.5">
                                                <ChevronLeft className="w-3 h-3 text-gray-600" />
                                                <ChevronRight className="w-3 h-3 text-gray-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Invisible Slider Input */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={sliderPosition}
                                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                                    />
                                </div>

                                <p className="text-center text-gray-500 text-sm mt-4">
                                    Patient treated with {item.title} - {item.sessions}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Clinic Experience Gallery */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                                The Clinic Experience
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Discover our state-of-the-art facilities and detailed procedure results.
                            </p>

                            {/* Category Tabs */}
                            <div className="flex justify-center gap-2">
                                {galleryCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={cn(
                                            "px-4 py-2 text-sm font-medium transition-all border",
                                            activeCategory === cat.id
                                                ? "bg-gray-900 text-white border-gray-900"
                                                : "bg-white text-gray-600 border-gray-300 hover:border-gray-900"
                                        )}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Masonry Grid */}
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="break-inside-avoid group cursor-pointer"
                                >
                                    <div className={cn(
                                        "relative overflow-hidden bg-gray-200",
                                        item.tall ? "h-80" : "h-56"
                                    )}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="py-4">
                                        <h3 className="font-display font-bold text-gray-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-12">
                            <button className="text-primary font-medium flex items-center gap-1 mx-auto hover:underline">
                                Load more moments
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-4">
                            Ready to start your journey?
                        </h2>
                        <p className="text-background/80 mb-8 max-w-2xl mx-auto">
                            Schedule a personalized consultation with our aesthetics and discover the treatment plan tailored just for you.
                        </p>
                        <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-bold">
                            <Link href="/reservasi">
                                Book Consultation
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
