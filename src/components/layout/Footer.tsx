"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useReservationModal } from "@/context/ReservationModalContext";

export function Footer() {
    const { openModal } = useReservationModal();

    return (
        <footer className="bg-background border-t border-border-dark pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <span className="font-display font-bold text-2xl text-primary block mb-6">
                            Contoh6
                        </span>
                        <p className="text-sm text-text-muted-dark leading-relaxed">
                            Klinik kecantikan premium dengan layanan terbaik dan teknologi terkini untuk perawatan kulit Anda.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
                            Layanan
                        </h3>
                        <ul className="space-y-3 text-sm text-text-muted-dark">
                            <li>
                                <Link href="/layanan" className="hover:text-primary transition-colors">
                                    Perawatan Wajah
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-primary transition-colors">
                                    Terapi Laser
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-primary transition-colors">
                                    Anti-Penuaan
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-primary transition-colors">
                                    Konsultasi Dokter
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
                            Link Cepat
                        </h3>
                        <ul className="space-y-3 text-sm text-text-muted-dark">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/dokter" className="hover:text-primary transition-colors">
                                    Tim Dokter
                                </Link>
                            </li>
                            <li>
                                <Link href="/galeri" className="hover:text-primary transition-colors">
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={openModal}
                                    className="hover:text-primary transition-colors text-left"
                                >
                                    Reservasi
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
                            Kontak Kami
                        </h3>
                        <ul className="space-y-3 text-sm text-text-muted-dark">
                            <li>Jl. Kecantikan Indah No. 123, Jakarta</li>
                            <li>+62 812-3456-7890</li>
                            <li>info@beautyclinic.com</li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <Link
                                href="#"
                                className="text-text-muted-dark hover:text-primary transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-text-muted-dark hover:text-primary transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-text-muted-dark hover:text-primary transition-colors"
                            >
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-text-muted-dark">
                        © {new Date().getFullYear()} Contoh6. Hak cipta dilindungi.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-text-muted-dark">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Kebijakan Privasi
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Syarat & Ketentuan
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
