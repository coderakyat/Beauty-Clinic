
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-heading font-bold text-primary mb-4">Beuty Clinic</h3>
                        <p className="text-sm text-gray-300">
                            Klinik kecantikan premium dengan layanan terbaik dan teknologi terkini untuk perawatan kulit Anda.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Layanan</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/layanan" className="hover:text-primary transition-colors">Facial Treatment</Link></li>
                            <li><Link href="/layanan" className="hover:text-primary transition-colors">Laser Therapy</Link></li>
                            <li><Link href="/layanan" className="hover:text-primary transition-colors">Anti-Aging</Link></li>
                            <li><Link href="/layanan" className="hover:text-primary transition-colors">Konsultasi Dokter</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Link Cepat</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                            <li><Link href="/dokter" className="hover:text-primary transition-colors">Tim Dokter</Link></li>
                            <li><Link href="/galeri" className="hover:text-primary transition-colors">Galeri</Link></li>
                            <li><Link href="/reservasi" className="hover:text-primary transition-colors">Reservasi</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Kontak Kami</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>Jl. Kecantikan Indah No. 123, Jakarta</p>
                            <p>+62 812-3456-7890</p>
                            <p>info@beutyclinic.com</p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Link href="#" className="text-gray-300 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-300 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-300 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Beuty Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
