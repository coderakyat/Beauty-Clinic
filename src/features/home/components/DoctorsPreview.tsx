
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Dermatologist",
        image: "/doctors/dr-sarah.jpg",
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Aesthetic Surgeon",
        image: "/doctors/dr-michael.jpg",
    },
    {
        name: "Dr. Emily Davis",
        specialty: "Skin Specialist",
        image: "/doctors/dr-emily.jpg",
    },
];

export function DoctorsPreview() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        Meet Our Experts
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our team of board-certified dermatologists and aesthetic specialists are dedicated
                        to providing safe, effective, and personalized treatments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <Card key={index} className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all">
                            <div className="relative h-[350px] bg-muted overflow-hidden">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader className="text-center pt-6 pb-2">
                                <h3 className="text-xl font-heading font-bold">{doctor.name}</h3>
                                <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                            </CardHeader>
                            <CardContent className="text-center pb-6">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/dokter">View Profile</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Link href="/dokter">See All Specialists</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
