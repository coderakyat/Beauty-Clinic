"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import { MapPin } from "lucide-react";

export function FAQSection() {
    return (
        <section className="py-24 bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* FAQ Column */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-primary mb-8">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                        <div className="space-y-4">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="border-b border-border-dark pb-4">
                                    <AccordionTrigger className="text-foreground hover:text-primary font-medium">
                                        Bagaimana cara melakukan reservasi?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-text-muted-dark text-sm leading-relaxed">
                                        Anda dapat melakukan reservasi dengan mengklik tombol "Reservasi Sekarang" di
                                        website kami, atau dengan menghubungi resepsionis kami melalui WhatsApp atau telepon.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-b border-border-dark pb-4">
                                    <AccordionTrigger className="text-foreground hover:text-primary font-medium">
                                        Produk merek apa yang Anda gunakan?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-text-muted-dark text-sm leading-relaxed">
                                        Kami hanya menggunakan produk premium, bersertifikat BPOM, dan produk medis
                                        yang disesuaikan dengan kebutuhan kulit tertentu, termasuk merek internasional terbaik.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="border-b border-border-dark pb-4">
                                    <AccordionTrigger className="text-foreground hover:text-primary font-medium">
                                        Apakah ada biaya konsultasi?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-text-muted-dark text-sm leading-relaxed">
                                        Biaya konsultasi awal bervariasi tergantung spesialis. Namun, biaya ini sering
                                        digratiskan jika Anda melanjutkan dengan rencana perawatan di hari yang sama.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* Location Column */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-primary mb-8">
                            Kunjungi Klinik Kami
                        </h2>

                        {/* Map Placeholder */}
                        <div className="bg-background h-64 w-full flex items-center justify-center relative overflow-hidden border border-border-dark">
                            <div className="absolute inset-0 bg-surface-alt-dark opacity-80" />
                            <div className="z-10 text-center">
                                <MapPin className="w-10 h-10 text-text-muted-dark mx-auto mb-2" />
                                <p className="text-text-muted-dark text-sm">Placeholder Google Maps</p>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="mt-4 flex items-center text-sm text-text-muted-dark">
                            <span className="font-bold mr-2 text-primary">Jam Buka:</span>
                            Senin - Minggu: 10:00 - 20:00
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
