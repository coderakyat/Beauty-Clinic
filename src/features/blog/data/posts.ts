export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: string;
    category: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "rahasia-kulit-glowing",
        title: "5 Rahasia Kulit Glowing Alami yang Wajib Kamu Coba",
        excerpt: "Ingin kulit glowing tanpa bahan kimia keras? Simak tips perawatan alami yang bisa kamu lakukan di rumah.",
        content: `
      <p>Memiliki kulit glowing adalah impian banyak orang. Namun, tidak semua orang ingin menggunakan bahan kimia keras pada wajah mereka. Berikut adalah 5 rahasia kulit glowing alami yang bisa kamu coba:</p>
      
      <h2>1. Minum Air Putih yang Cukup</h2>
      <p>Hidrasi adalah kunci. Pastikan kamu minum setidaknya 8 gelas air sehari untuk menjaga kelembapan kulit dari dalam.</p>
      
      <h2>2. Tidur yang Cukup</h2>
      <p>Saat tidur, kulit melakukan regenerasi. Kurang tidur dapat membuat kulit terlihat kusam dan lelah.</p>
      
      <h2>3. Gunakan Masker Alami</h2>
      <p>Bahan-bahan seperti madu, lidah buaya, dan mentimun bisa menjadi masker alami yang ampuh menenangkan dan mencerahkan kulit.</p>
      
      <h2>4. Lindungi dari Sinar Matahari</h2>
      <p>Selalu gunakan sunscreen, bahkan saat cuaca mendung. Sinar UV adalah musuh utama penuaan dini.</p>
      
      <h2>5. Kelola Stres</h2>
      <p>Stres dapat memicu masalah kulit seperti jerawat. Temukan cara untuk rileks, seperti yoga atau meditasi.</p>
    `,
        author: "dr. Amelia Santoso",
        date: "2023-10-15",
        image: "/images/blog/glowing-skin.jpg", // Placeholder image path
        category: "Tips Kecantikan",
    },
    {
        id: "2",
        slug: "manfaat-treatment-laser",
        title: "Mengenal Manfaat Treatment Laser untuk Peremajaan Kulit",
        excerpt: "Treatment laser kini semakin populer. Apa saja manfaatnya dan apakah aman untuk semua jenis kulit?",
        content: `
      <p>Treatment laser telah menjadi salah satu prosedur estetika paling diminati untuk mengatasi berbagai masalah kulit. Teknologi ini menggunakan energi cahaya yang terfokus untuk memperbaiki struktur kulit.</p>

      <h2>Apa itu Treatment Laser?</h2>
      <p>Prosedur ini bekerja dengan cara merangsang produksi kolagen baru dan mengangkat sel-sel kulit mati atau rusak.</p>

      <h2>Manfaat Utama</h2>
      <ul>
        <li>Menyamarkan garis halus dan kerutan.</li>
        <li>Menghilangkan bekas jerawat dan flek hitam.</li>
        <li>Meratakan warna kulit.</li>
        <li>Mengencangkan kulit yang kendur.</li>
      </ul>

      <h2>Apakah Aman?</h2>
      <p>Jika dilakukan oleh dokter profesional, treatment laser sangat aman. Konsultasikan kondisi kulitmu terlebih dahulu sebelum memutuskan untuk menjalani prosedur ini.</p>
    `,
        author: "dr. Budi Kusuma",
        date: "2023-11-02",
        image: "/images/blog/laser-treatment.jpg", // Placeholder image path
        category: "Treatment",
    },
    {
        id: "3",
        slug: "tren-kecantikan-2024",
        title: "Tren Kecantikan 2024: Natural Look is Back!",
        excerpt: "Simak prediksi tren kecantikan di tahun 2024 yang akan didominasi oleh tampilan natural dan minimalis.",
        content: `
      <p>Tahun 2024 diprediksi akan menjadi tahun kembalinya 'Natural Look'. Orang-orang mulai meninggalkan makeup tebal dan beralih ke perawatan kulit yang intensif untuk mendapatkan tampilan 'woke up like this'.</p>

      <h2>Skinimalism</h2>
      <p>Konsep less is more akan semakin digemari. Rutinitas skincare yang panjang dan rumit akan digantikan oleh produk multifungsi yang efektif.</p>

      <h2>Makeup No-Makeup</h2>
      <p>Penggunaan foundation tebal akan berkurang, digantikan oleh tinted moisturizer atau hanya concealer untuk menutupi kekurangan spesifik.</p>

      <h2>Fokus pada Kesehatan Kulit</h2>
      <p>Investasi terbesar bukan pada produk dekoratif, melainkan pada kesehatan kulit itu sendiri melalui treatment rutin dan gaya hidup sehat.</p>
    `,
        author: "Sarah Wijaya",
        date: "2023-12-20",
        image: "/images/blog/natural-look.jpg", // Placeholder image path
        category: "Tren",
    },
];
