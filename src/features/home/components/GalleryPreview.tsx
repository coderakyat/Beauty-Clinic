"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
    { id: "results", label: "Real Results" },
    { id: "clinic", label: "Our Clinic" },
];

const resultsImages = [
    { src: "/gallery/acne-before.jpg", alt: "Acne Treatment Before" },
    { src: "/gallery/acne-after.jpg", alt: "Acne Treatment After" },
    { src: "/gallery/aging-after.jpg", alt: "Anti-Aging Result" },
];

const clinicImages = [
    { src: "/gallery/reception.jpg", alt: "Reception Area" },
    { src: "/gallery/treatment-room.jpg", alt: "Treatment Room" },
    { src: "/gallery/exterior.jpg", alt: "Clinic Exterior" },
];

export function GalleryPreview() {
    const [activeTab, setActiveTab] = useState("results");

    const images = activeTab === "results" ? resultsImages : clinicImages;

    return (
        <section className="py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                            Visualizing Perfection
                        </h2>
                        <p className="text-gray-300">See the transformative results and our luxurious facilities.</p>
                    </div>

                    <div className="flex bg-white/10 p-1 rounded-full backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                                    activeTab === tab.id
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-gray-300 hover:text-white"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((item, index) => (
                        <div key={index} className="aspect-square relative rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors cursor-pointer group">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-white text-secondary hover:bg-gray-100">
                        <Link href="/galeri">View Full Gallery</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
