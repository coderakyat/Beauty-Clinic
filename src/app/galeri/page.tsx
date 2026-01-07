"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { galleryItems } from "@/features/gallery";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

export default function GalleryPage() {
    const [filter, setFilter] = useState<"all" | "before-after" | "facility">("all");

    const filteredItems = galleryItems.filter(
        (item) => filter === "all" || item.type === filter
    );

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background">
                {/* Header */}
                <section className="bg-muted/30 py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Gallery & Real Results
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Witness the transformations and explore our state-of-the-art facilities.
                        </p>
                    </div>
                </section>

                {/* Filter Tabs */}
                <section className="container mx-auto px-4 py-8">
                    <div className="flex justify-center gap-4 mb-12">
                        <Button
                            variant={filter === "all" ? "default" : "outline"}
                            onClick={() => setFilter("all")}
                            className="rounded-full"
                        >
                            All
                        </Button>
                        <Button
                            variant={filter === "before-after" ? "default" : "outline"}
                            onClick={() => setFilter("before-after")}
                            className="rounded-full"
                        >
                            Real Results
                        </Button>
                        <Button
                            variant={filter === "facility" ? "default" : "outline"}
                            onClick={() => setFilter("facility")}
                            className="rounded-full"
                        >
                            Our Clinic
                        </Button>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <Card key={item.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all">
                                <CardContent className="p-0">
                                    {item.type === "before-after" ? (
                                        <div className="relative group">
                                            <div className="grid grid-cols-2 h-[300px]">
                                                <div className="relative border-r overflow-hidden">
                                                    <Image
                                                        src={(item as any).imageBefore}
                                                        alt={`${item.title} - Before`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <span className="absolute bottom-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded font-bold">Before</span>
                                                </div>
                                                <div className="relative overflow-hidden">
                                                    <Image
                                                        src={(item as any).imageAfter}
                                                        alt={`${item.title} - After`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <span className="absolute bottom-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded font-bold">After</span>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-white">
                                                <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                                <span className="inline-block mt-3 px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative group">
                                            <div className="h-[300px] relative overflow-hidden">
                                                <Image
                                                    src={(item as any).image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-6 bg-white">
                                                <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
