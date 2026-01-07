
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Facial Treatments",
        description: "Rejuvenate your skin with our signature deep-cleansing and hydrating facials.",
        price: "Starts from IDR 350k",
        image: "/services/placeholder.jpg",
    },
    {
        title: "Laser Therapy",
        description: "Advanced laser solutions for acne scars, pigmentation, and skin resurfacing.",
        price: "Starts from IDR 1.2M",
        image: "/services/placeholder.jpg",
    },
    {
        title: "Anti-Aging",
        description: "Botox and fillers administered by expert professionals for a youthful look.",
        price: "Starts from IDR 2.5M",
        image: "/services/placeholder.jpg",
    },
    {
        title: "Body Contouring",
        description: "Non-invasive fat reduction and body shaping treatments.",
        price: "Starts from IDR 3M",
        image: "/services/placeholder.jpg",
    },
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Discover a curated selection of treatments designed to enhance your natural beauty
                        and boost your confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background overflow-hidden">
                            <div className="relative h-40 bg-muted">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                                <p className="font-semibold text-primary">{service.price}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" asChild className="p-0 h-auto font-semibold">
                                    <Link href="/layanan" className="group flex items-center">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Link href="/layanan">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
