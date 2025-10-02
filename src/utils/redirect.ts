export const redirectToWhatsapp = () => {
    const EMC_WA = "+62881080779977"; // Ganti dengan nomor WhatsApp tujuan
    const message = encodeURIComponent("Halo, Saya mau berkonsultasi dengan dokter Isaac Deswanto Sp.Urology.");
    const whatsappUrl = `https://wa.me/${EMC_WA}?text=${message}`;
    window.open(whatsappUrl, "_blank");
}

export const redirectToInstagram = () => {
    const instagramUrl = "https://www.instagram.com/dr.isaacdeswanto";
    window.open(instagramUrl, "_blank");
}

export const redirectToTikTok = () => {
    const tiktokUrl = "https://www.tiktok.com/@dr.isaacdeswanto";
    window.open(tiktokUrl, "_blank");
}

export const redirectToYouTube = () => {
    const youtubeUrl = "https://www.youtube.com/@drisaacurologi";
    window.open(youtubeUrl, "_blank");
}