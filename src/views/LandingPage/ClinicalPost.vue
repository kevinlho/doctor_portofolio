<script setup>
import cp01 from '/assets/clinicalpost/cp01.png';

const post = [
  {
    id: 1,
    imgPlaceholder: cp01,
    title: "Mikroligasi Varikokel",
    description: [
      "Mikroligasi varikokel dilakukan dengan sayatan kecil di area inguinal untuk mencapai pembuluh darah yang mengalami pelebaran. Dengan bantuan mikroskop bedah beresolusi tinggi, dokter dapat membedakan struktur penting seperti arteri, vena, dan vas deferens sehingga hanya pembuluh vena yang bermasalah yang akan diikat tanpa mengganggu jaringan sehat.",
      "Keunggulan mikroligasi dibanding metode lain adalah risiko kekambuhan lebih rendah, pemulihan lebih cepat, serta tingkat keberhasilan tinggi dalam meningkatkan kesuburan pria. Setelah prosedur, pasien biasanya dapat kembali beraktivitas dalam waktu singkat dengan nyeri yang minimal.",
      "Jika Anda mengalami gejala varikokel atau memiliki masalah kesuburan, jangan ragu untuk berkonsultasi dengan dokter spesialis urologi. Penanganan yang tepat dapat meningkatkan kualitas hidup serta peluang kesuburan Anda di masa depan."
    ]
  },
];

const getDesc = (desc) => {
  if(desc.length > 75) {
    return desc.substring(0, 75) + '...';
  }
  return desc;
}
</script>

<template>
  <section class="bg-[#f4f4f4] relative py-20 px-4 md:px-8 overflow-hidden">
    <!-- Container -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12 text-black">Clinical Post</h2>

      <!-- Cards -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, index) in post" :key="index"
          class="bg-white rounded-2xl p-6 text-left shadow hover:shadow-lg transition duration-300">
          <div class="bg-gray-100 p-4 rounded-md inline-block mb-4">
            <img :src="p.imgPlaceholder" :alt="p.title" class="inset-0 w-full h-full object-cover" />
          </div>
          <h3 class="text-lg font-bold mb-2 text-black">{{ p.title }}</h3>
          <p class="text-gray-600 mb-4">{{ getDesc(p.description[0]) }}</p>
          <RouterLink :to="{ name: 'clinicalpost', params: { id: p.id }}">
            <div class="text-sm font-semibold text-black hover:text-blue-600 flex items-center gap-1">
              READ MORE <i class="fas fa-arrow-up-right-from-square"></i>
            </div>
            Blog
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>