"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const products = [
    {
        id: 1,
        name: "Brightening Serum",
        description: "Serum pencerah dengan Vitamin C untuk kulit glowing",
        price: "Rp 450.000",
        category: "Serum",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmPt4hkKCVhjRBkDVap5HUkHmGjMoLSepGILx0zRUDtG227NV_hgwwOXW7m9SZ8xAfTBU5Bd-lLxHa73OMMKNYXgjczYvrwyq4-mhekx5klzv5NTMEgmECiSVJkyNNLodz5D0tewdWkltk3QAjkgB-J7b4E76DKsk4aTfRbyb1_eUEuY8ZCQoGRfNfIXjzsSzffV3pYJBbuYlx3Vuv627nhe9ae7ssOKB1VYULHDWomEeBcRDpt3WguIhqjK_3sRLywGLBaDH8C5Xg",
    },
    {
        id: 2,
        name: "Hydrating Moisturizer",
        description: "Pelembab intensif dengan Hyaluronic Acid",
        price: "Rp 385.000",
        category: "Moisturizer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZEMU_c0s2erH6hGS6vq0aR_11Iq0vKrzq8iP4N4zDpzEIRZtnTitpjr-ZO39-0QpDgpzSSDBKk8cIVjTH0_ccmq70Cp58eDO24t3cy-Cr6KfHdQIJo1erebYvtHtK8aTxwYvt9bD9HwatGtTSGp245Liu8uwypHOvQI3HAoFFs0NoLRlmmmwo6xC52GVS-VRRoW_lAyALQ6H0S4lPN8Ja9v4TsoQpcAO6jipg0AnYiPCyE6EAgy9-qjMXRSH6eJGYpIf9N07ftFE",
    },
    {
        id: 3,
        name: "Anti-Aging Night Cream",
        description: "Krim malam dengan Retinol untuk regenerasi kulit",
        price: "Rp 650.000",
        category: "Cream",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoSnMMSdO4Y5-NGofjwi82DTb3z1WKJo85vKL3jztxIPDjl709GeSCrz5at7uI7scxZBsMUBTZEHRy-MjI4E8Xpi7dLS0xjkmYSwAPwCuMejLcymir0FVijDLR_LbuvVmk89GzXXRiS88nSAXFwnDS8FsD6vHuFvzHFWQRCdEQE4rodJhsxnXKadOeV7K1g1LyBgeTsxbWJ4wiJyGdtzKl1cG5kIIa9LwdwqHsiw0hqpsvHauhK0U0yDfNpGvxlVnEUWHSaA-HLaF",
    },
    {
        id: 4,
        name: "Gentle Cleanser",
        description: "Pembersih lembut untuk semua jenis kulit",
        price: "Rp 275.000",
        category: "Cleanser",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb5rSz93is0poDriJWorKKrRWqgLvlVK9NQYR7jhc5B8AUjIY4ocZd9BdV_MZT1m3hvUi3YitIUWVe_beogBlFfY3gQQzndNn7Htvcc77G6_kVddC4swTFBG6oF7bNzsSsC8Nu7TEqjbXalqy_AVZePSYYOBfRfNBadDyM2GwCZy3OpQpc0qVpdZ8j7MFY7sqB9OO3eJVm2YmB-Pt9RJsA7h3oYtdjqw0Mkwgn1lIh_NX_ds7V-RINfyvyLohlnOr3GUw_MeN2DHR4",
    },
    {
        id: 5,
        name: "Sunscreen SPF 50+",
        description: "Perlindungan maksimal dari sinar UV",
        price: "Rp 320.000",
        category: "Sunscreen",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWyLzS2TPLIB2SSqOLh9JQYsKiH0zOLdGZprQmFsxvC--z9a_nWvsCSYx0kqddovoXPYwgWl36LkcQdeneuNAPFAZQ8PBUkNsmeAn5c23g61NHqUFOrXRBcFCpXoTV31x55oE0AFRs1FPbxJuM9DtewY1rgeJtMyt9fRXV_GAzg25_GZvMTQ0cOmQTCAz_5EhnsujV3u_1gaPWXiMeUjJV3cVfPAsmNF6JNCfETxit9OMPmRm3FCXt1oUXZi-QuvbuvJhjSfWoC-r",
    },
    {
        id: 6,
        name: "Eye Cream",
        description: "Krim mata untuk lingkaran hitam dan kerutan",
        price: "Rp 425.000",
        category: "Eye Care",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASj1ivvyO86J41kVD9LX16E4J5Q84E9hq3OUM0HfopHO8SFzD1k1ynujAcWWdIOHgkWJ43MwbF53JqQQZgsZ51abUHEyGXT-qU-KNFIVbu4duRDVr6W9sYfSeTOyxFMIJ2ut3YXLh4PcTOTkFn2BsWKZR-5dovSRs4iQ-ie6_pHSkkdNpJc_1POUWig4AZVHdO7EG0ZPDkY8kkbbX0ChgkeZgRW_twjv8PQlgmBS2qIbrdsB_lTn6TAg-y5-MGxq-Q2D0-NVFpSUyF",
    },
];

export function ProductsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener("scroll", checkScrollButtons);
            return () => ref.removeEventListener("scroll", checkScrollButtons);
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 bg-surface-alt-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                        <span className="text-xs font-bold text-primary border border-primary/40 px-3 py-1 uppercase tracking-widest mb-4 inline-block">
                            Produk Kami
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Produk <span className="text-primary">Skincare</span> Pilihan
                        </h2>
                        <p className="text-text-muted-dark max-w-xl">
                            Rangkaian produk perawatan kulit premium yang dipilih oleh para ahli kami untuk hasil terbaik.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={cn(
                                "w-10 h-10 flex items-center justify-center border transition-all",
                                canScrollLeft
                                    ? "border-primary text-primary hover:bg-primary hover:text-background"
                                    : "border-border-dark text-text-muted-dark cursor-not-allowed"
                            )}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={cn(
                                "w-10 h-10 flex items-center justify-center border transition-all",
                                canScrollRight
                                    ? "border-primary text-primary hover:bg-primary hover:text-background"
                                    : "border-border-dark text-text-muted-dark cursor-not-allowed"
                            )}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Products Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="shrink-0 w-72 group"
                        >
                            {/* Product Card */}
                            <div className="bg-surface-dark border border-border-dark overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <span className="absolute top-3 left-3 bg-primary/90 text-background text-xs font-bold px-2 py-1">
                                        {product.category}
                                    </span>
                                    {/* Quick Add Button */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button className="bg-primary hover:bg-primary-hover text-background font-bold flex items-center gap-2">
                                            <ShoppingBag className="w-4 h-4" />
                                            Lihat Detail
                                        </Button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-text-muted-dark mb-3 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <p className="text-primary font-bold text-lg">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products */}
                <div className="text-center mt-8">
                    <Button variant="outline" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background font-bold py-3 px-8">
                        Lihat Semua Produk
                    </Button>
                </div>
            </div>
        </section>
    );
}
