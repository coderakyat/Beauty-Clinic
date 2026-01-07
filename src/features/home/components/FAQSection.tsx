
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";

export function FAQSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Freuently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How do I make a reservation?</AccordionTrigger>
                                <AccordionContent>
                                    You can make a reservation directly through our website by clicking the "Reservasi Sekarang" button, or by contacting us via WhatsApp.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>What brands of products do you use?</AccordionTrigger>
                                <AccordionContent>
                                    We use only premium, FDA-approved products from top international brands to ensure safety and effectiveness.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is there a consultation fee?</AccordionTrigger>
                                <AccordionContent>
                                    We offer a complimentary initial consultation for new clients to discuss your skin goals and recommend the best treatments.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Visit Our Sanctuary</h2>
                        <div className="bg-background rounded-xl overflow-hidden shadow-lg h-[300px] relative">
                            {/* Map Placeholder */}
                            <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
                                Google Maps Placeholder
                            </div>
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="opacity-0" // Hide until real URL is used
                            ></iframe>
                        </div>
                        <div className="text-muted-foreground">
                            <p><strong>Opening Hours:</strong> Mon - Sun: 10:00 AM - 08:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
