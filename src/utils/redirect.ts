export const redirectToWhatsapp = () => {
    const EMC_WA = "+62881080779977"; // Ganti dengan nomor WhatsApp tujuan
    const message = encodeURIComponent("Halo, Saya mau berkonsultasi dengan dokter Isaac Deswanto Sp.Urology.");
    const whatsappUrl = `https://wa.me/${EMC_WA}?text=${message}`;
    window.open(whatsappUrl, "_blank");
}
