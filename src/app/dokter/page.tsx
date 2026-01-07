"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/features/doctors";
import { CalendarDays, Star } from "lucide-react";

export default function DoctorsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background">
                {/* Header */}
                <section className="bg-muted/30 py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Our Medical Experts
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Meet our team of board-certified dermatologists and aesthetic professionals dedicated to your beauty and wellness.
                        </p>
                    </div>
                </section>

                {/* Doctors Grid */}
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctors.map((doctor) => (
                            <Card key={doctor.id} className="overflow-hidden border-0 shadow-lg flex flex-col group hover:shadow-xl transition-all">
                                {/* Doctor Image */}
                                <div className="relative h-[400px] bg-muted w-full overflow-hidden">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Button asChild variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <Link href={`/reservasi`}>Book Appointment</Link>
                                        </Button>
                                    </div>
                                </div>

                                <CardHeader className="pb-2 text-center pt-6">
                                    <h3 className="text-2xl font-heading font-bold">{doctor.name}</h3>
                                    <p className="text-primary font-medium uppercase tracking-wide text-sm">{doctor.specialty}</p>
                                    <p className="text-xs text-muted-foreground">{doctor.role}</p>
                                </CardHeader>

                                <CardContent className="text-center pb-6 flex-1">
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                        {doctor.bio}
                                    </p>

                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                        <CalendarDays className="w-4 h-4" />
                                        <span>Available: {doctor.schedule.join(", ")}</span>
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-0 justify-center pb-8">
                                    {/* Social or additional actions could go here */}
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* CTO Section */}
                <section className="bg-primary text-primary-foreground py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-heading font-bold mb-4">Begin Your Journey With Us</h2>
                        <p className="mb-8 max-w-xl mx-auto opacity-90">Book a consultation with one of our specialists today and discover the best version of yourself.</p>
                        <Button asChild size="lg" variant="secondary" className="font-bold">
                            <Link href="/reservasi">Schedule Consultation</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
