
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for About Image - normally would use next/image with a real src */}
                        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
                            <span className="text-lg">About Us Image</span>
                        </div>
                        {/* <Image src="/about-image.jpg" alt="About Beuty Clinic" fill className="object-cover" /> */}
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                            The Art of Ageless Beauty
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Beuty Clinic, we believe that beauty is a personal journey.
                            Our vision is to provide a sanctuary where advanced medical science meets
                            luxury hospitality. With state-of-the-art technology and a team of
                            certified dermatologists, we are dedicated to revealing your natural radiance.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">✓</span>
                                <span className="text-foreground">Certified Medical Professionals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">✓</span>
                                <span className="text-foreground">Advanced FDA-Approved Technology</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">✓</span>
                                <span className="text-foreground">Private and Luxurious Atmosphere</span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Button asChild variant="default">
                                <Link href="/about">More About Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
