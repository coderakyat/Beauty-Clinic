export interface Testimonial {
    id: number;
    name: string;
    treatment: string;
    rating: number;
    quote: string;
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Anisa Rahmawati",
        treatment: "Facial Rejuvenation",
        rating: 5,
        quote: "Hasil yang luar biasa! Kulit saya terasa lebih muda dan bercahaya. Stafnya sangat profesional dan ramah. Sangat merekomendasikan!",
    },
    {
        id: 2,
        name: "Dewi Sartika",
        treatment: "Hydrafacial Treatment",
        rating: 5,
        quote: "Pengalamannya sangat mewah dan menenangkan. Fasilitas klinik benar-benar premium dan hasilnya memuaskan sekali.",
    },
    {
        id: 3,
        name: "Sarah Putri",
        treatment: "Laser Skin Therapy",
        rating: 5,
        quote: "Tim dokter sangat berpengalaman dan detail dalam konsultasi. Saya merasa sangat aman dan puas dengan hasilnya.",
    },
    {
        id: 4,
        name: "Maya Kusuma",
        treatment: "Anti-Aging Treatment",
        rating: 5,
        quote: "Contoh6 adalah klinik kecantikan terbaik yang pernah saya kunjungi. Pelayanannya istimewa dan hasilnya natural.",
    },
    {
        id: 5,
        name: "Rina Permata",
        treatment: "Botox & Filler",
        rating: 5,
        quote: "Sangat puas dengan hasil treatment-nya! Wajah terlihat lebih fresh tanpa berlebihan. Terima kasih Contoh6!",
    },
    {
        id: 6,
        name: "Linda Safitri",
        treatment: "Chemical Peeling",
        rating: 5,
        quote: "Prosesnya nyaman dan cepat. Hasil peeling sangat terlihat, kulit lebih halus dan cerah. Pasti akan kembali lagi!",
    },
];
