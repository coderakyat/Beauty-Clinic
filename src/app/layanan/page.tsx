
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/features/services";
import { Clock } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background">
                {/* Header */}
                <section className="bg-muted/30 py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Our Treatments
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our comprehensive menu of aesthetic services, tailored to enhance your natural beauty.
                        </p>
                    </div>
                </section>

                {/* Categories & Items */}
                <div className="container mx-auto px-4 py-16 space-y-20">
                    {services.map((category) => (
                        <section key={category.id} id={category.id} className="scroll-mt-24">
                            <div className="mb-8 border-b pb-4">
                                <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                                    {category.category}
                                </h2>
                                <p className="text-muted-foreground">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((service) => (
                                    <Card key={service.id} className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                                        <div className="relative h-48 w-full bg-muted">
                                            <Image
                                                src={(service as any).image || "/services/placeholder.jpg"}
                                                alt={service.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-xl font-heading text-primary">
                                                {service.name}
                                            </CardTitle>
                                            <CardDescription className="flex items-center gap-1 mt-2">
                                                <Clock className="w-4 h-4" /> {service.duration}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-1">
                                            <p className="text-muted-foreground mb-4">
                                                {service.description}
                                            </p>
                                            <p className="text-lg font-semibold text-foreground">
                                                {service.price}
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild className="w-full">
                                                <Link href="/reservasi">Book Now</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
