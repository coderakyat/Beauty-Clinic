import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReservationModalProvider } from "@/context/ReservationModalContext";
import { ReservationModal } from "@/components/reservation/ReservationModal";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-exo2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contoh6 | Klinik Estetika Mewah",
  description: "Rasakan seni kecantikan di Contoh6. Dokter profesional, teknologi canggih, dan layanan premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased transition-colors duration-300",
          exo2.variable
        )}
      >
        <ReservationModalProvider>
          {children}
          <ReservationModal />
        </ReservationModalProvider>
      </body>
    </html>
  );
}
