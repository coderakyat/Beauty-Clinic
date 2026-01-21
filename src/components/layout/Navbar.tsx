"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useReservationModal } from "@/context/ReservationModalContext";

const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Dokter", href: "/dokter" },
    { name: "Galeri", href: "/galeri" },
    { name: "Tentang", href: "/tentang" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    const { openModal } = useReservationModal();

    // Prevent scrolling when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 z-60 w-full bg-background/90 backdrop-blur-md border-b border-border-dark transition-all duration-300">
                <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-2 z-60 flex-shrink-0" onClick={() => setIsOpen(false)}>
                        <span className="font-display text-2xl font-bold tracking-wide text-primary">
                            Contoh6
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-foreground"
                                        : "text-text-muted-dark"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            onClick={openModal}
                            className="bg-primary hover:bg-primary-hover text-background font-bold py-2 px-6 text-sm transition-transform transform hover:scale-105 shadow-glow"
                        >
                            Reservasi Sekarang
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex items-center md:hidden text-foreground z-60 p-2 hover:text-primary focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay - Outside of header for proper stacking */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-55 bg-background md:hidden"
                    >
                        {/* Header spacer */}
                        <div className="h-20" />

                        {/* Decorative gradient accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <nav className="relative flex flex-col space-y-2 px-6 pt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block text-xl font-display font-semibold py-4 px-4 rounded-xl transition-all duration-200",
                                            pathname === item.href
                                                ? "text-primary bg-primary/15 border-l-4 border-primary"
                                                : "text-foreground hover:text-primary hover:bg-surface-dark"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navigation.length * 0.08 + 0.1, duration: 0.3 }}
                                className="pt-6 pb-8"
                            >
                                <Button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openModal();
                                    }}
                                    className="w-full bg-primary hover:bg-primary-hover text-background font-bold text-lg h-14 shadow-glow"
                                >
                                    Reservasi Sekarang
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
