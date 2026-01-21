"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
    { id: "results", label: "Hasil Nyata" },
    { id: "clinic", label: "Klinik Kami" },
];

const resultsImages = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWyLzS2TPLIB2SSqOLh9JQYsKiH0zOLdGZprQmFsxvC--z9a_nWvsCSYx0kqddovoXPYwgWl36LkcQdeneuNAPFAZQ8PBUkNsmeAn5c23g61NHqUFOrXRBcFCpXoTV31x55oE0AFRs1FPbxJuM9DtewY1rgeJtMyt9fRXV_GAzg25_GZvMTQ0cOmQTCAz_5EhnsujV3u_1gaPWXiMeUjJV3cVfPAsmNF6JNCfETxit9OMPmRm3FCXt1oUXZi-QuvbuvJhjSfWoC-r",
        alt: "Hasil perawatan kulit",
        label: "Perawatan Jerawat"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASj1ivvyO86J41kVD9LX16E4J5Q84E9hq3OUM0HfopHO8SFzD1k1ynujAcWWdIOHgkWJ43MwbF53JqQQZgsZ51abUHEyGXT-qU-KNFIVbu4duRDVr6W9sYfSeTOyxFMIJ2ut3YXLh4PcTOTkFn2BsWKZR-5dovSRs4iQ-ie6_pHSkkdNpJc_1POUWig4AZVHdO7EG0ZPDkY8kkbbX0ChgkeZgRW_twjv8PQlgmBS2qIbrdsB_lTn6TAg-y5-MGxq-Q2D0-NVFpSUyF",
        alt: "Hasil wajah bercahaya",
        label: "Glow Booster"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkqFUsUi7UQlsLzuQxgwIr9OVXDWl5ftOt-0R2SbM8ulXTkPtdorhAXi7J5gCLlHKeMSKo1crkS210LqLYkb7Fdp1uhg8tpUzTSotmn3_f9v8o1E85GQ2Z08ei54BtomFL9zobJ9CMDe4rRSCOfcM5Nr7nRVOsz34Spe-BDygZqU1ZIFVMpoaA3pEDDxG08mFZnN3ytYJpyGAOpfWk16UFm1dZR7xg9-6AOIo85m9lIJwgYjubJaW3XXgrhIeyBXQuUtNHYl21viym",
        alt: "Hasil anti-penuaan",
        label: "Face Lift"
    },
];

const clinicImages = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWyLzS2TPLIB2SSqOLh9JQYsKiH0zOLdGZprQmFsxvC--z9a_nWvsCSYx0kqddovoXPYwgWl36LkcQdeneuNAPFAZQ8PBUkNsmeAn5c23g61NHqUFOrXRBcFCpXoTV31x55oE0AFRs1FPbxJuM9DtewY1rgeJtMyt9fRXV_GAzg25_GZvMTQ0cOmQTCAz_5EhnsujV3u_1gaPWXiMeUjJV3cVfPAsmNF6JNCfETxit9OMPmRm3FCXt1oUXZi-QuvbuvJhjSfWoC-r",
        alt: "Area Resepsionis",
        label: "Resepsionis"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASj1ivvyO86J41kVD9LX16E4J5Q84E9hq3OUM0HfopHO8SFzD1k1ynujAcWWdIOHgkWJ43MwbF53JqQQZgsZ51abUHEyGXT-qU-KNFIVbu4duRDVr6W9sYfSeTOyxFMIJ2ut3YXLh4PcTOTkFn2BsWKZR-5dovSRs4iQ-ie6_pHSkkdNpJc_1POUWig4AZVHdO7EG0ZPDkY8kkbbX0ChgkeZgRW_twjv8PQlgmBS2qIbrdsB_lTn6TAg-y5-MGxq-Q2D0-NVFpSUyF",
        alt: "Ruang Perawatan",
        label: "Ruang Perawatan"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkqFUsUi7UQlsLzuQxgwIr9OVXDWl5ftOt-0R2SbM8ulXTkPtdorhAXi7J5gCLlHKeMSKo1crkS210LqLYkb7Fdp1uhg8tpUzTSotmn3_f9v8o1E85GQ2Z08ei54BtomFL9zobJ9CMDe4rRSCOfcM5Nr7nRVOsz34Spe-BDygZqU1ZIFVMpoaA3pEDDxG08mFZnN3ytYJpyGAOpfWk16UFm1dZR7xg9-6AOIo85m9lIJwgYjubJaW3XXgrhIeyBXQuUtNHYl21viym",
        alt: "Eksterior Klinik",
        label: "Eksterior"
    },
];

export function GalleryPreview() {
    const [activeTab, setActiveTab] = useState("results");

    const images = activeTab === "results" ? resultsImages : clinicImages;

    return (
        <section className="py-24 bg-gradient-to-b from-background to-surface-alt-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Tabs */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Visualisasi Kesempurnaan
                        </h2>
                        <p className="text-text-muted-dark">
                            Lihat hasil transformasi dan fasilitas mewah kami.
                        </p>
                    </div>

                    {/* Tab Toggle */}
                    <div className="mt-6 md:mt-0 bg-surface-dark p-1 inline-flex border border-border-dark">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "py-2 px-6 text-sm transition-colors font-medium",
                                    activeTab === tab.id
                                        ? "bg-primary text-background shadow-md"
                                        : "text-text-muted-dark hover:text-foreground"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid with Staggered Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "overflow-hidden h-80 relative group",
                                index === 1 && "md:mt-8" // Stagger middle item
                            )}
                        >
                            <img
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={item.src}
                            />
                            {/* Hover Overlay with Label */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-display text-lg tracking-widest uppercase border border-white px-4 py-2">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Full Gallery Button */}
                <div className="flex justify-center mt-12">
                    <Button asChild className="bg-surface-dark border border-border-dark text-foreground py-2 px-6 text-sm font-medium hover:bg-surface-alt-dark transition-colors">
                        <Link href="/galeri">Lihat Galeri Lengkap</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
