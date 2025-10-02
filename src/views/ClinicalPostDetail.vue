<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import cp01 from '/assets/clinicalpost/cp01.png'
import cp02 from '/assets/clinicalpost/cp02.png'
import cp03 from '/assets/clinicalpost/cp03.png'
import cp04 from '/assets/clinicalpost/cp04.png'
import cp05 from '/assets/clinicalpost/cp05.png'
import cp06 from '/assets/clinicalpost/cp06.png'
import { redirectToWhatsapp } from '@/utils/redirect'

/* Sticky header */
const stickyHeader = ref(false)
const handleScroll = () => (stickyHeader.value = window.scrollY > 100)
onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

/* Carousel state */
const slides = [cp01, cp02, cp03, cp04, cp05, cp06]
const text = [
  "Mikroligasi varikokel dilakukan dengan sayatan kecil di area inguinal untuk mencapai pembuluh darah yang mengalami pelebaran. Dengan bantuan mikroskop bedah beresolusi tinggi, dokter dapat membedakan struktur penting seperti arteri, vena, dan vas deferens sehingga hanya pembuluh vena yang bermasalah yang akan diikat tanpa mengganggu jaringan sehat.",
  "Keunggulan mikroligasi dibanding metode lain adalah risiko kekambuhan lebih rendah, pemulihan lebih cepat, serta tingkat keberhasilan tinggi dalam meningkatkan kesuburan pria. Setelah prosedur, pasien biasanya dapat kembali beraktivitas dalam waktu singkat dengan nyeri yang minimal.",
  "Jika Anda mengalami gejala varikokel atau memiliki masalah kesuburan, jangan ragu untuk berkonsultasi dengan dokter spesialis urologi. Penanganan yang tepat dapat meningkatkan kualitas hidup serta peluang kesuburan Anda di masa depan."
]
const current = ref(0)
const next = () => (current.value = (current.value + 1) % slides.length)
const prev = () => (current.value = (current.value - 1 + slides.length) % slides.length)
</script>

<template>
  <div class="bg-[#02172e]">
    <AppHeader :sticky="stickyHeader" />

    <div :class="stickyHeader ? 'pt-[72px]' : ''">
      <section class="relative bg-white text-gray-800 py-16 px-4 md:px-8 overflow-hidden">
        <img src="/assets/bg/about-vector.svg" alt=""
          class="absolute right-0 top-0 max-w-xl opacity-10 pointer-events-none hidden md:block" />

        <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
          <!-- Carousel Card -->
          <div class="relative bg-gradient-to-br from-[#052146] to-[#09275e]
                   text-white rounded-2xl w-full max-w-sm overflow-hidden shadow-lg">
            <div class="relative w-full flex justify-center">
              <transition name="fade" mode="out-in">
                <img :key="slides[current]" :src="slides[current]"
                  class="w-auto h-auto max-w-full will-change-opacity" />
              </transition>

              <div class="absolute inset-y-1/2 left-0 flex items-center ml-2">
                <button class="btn btn-circle btn-sm bg-white/40 hover:bg-white/60" @click="prev">❮</button>
              </div>
              <div class="absolute inset-y-1/2 right-0 flex items-center mr-2">
                <button class="btn btn-circle btn-sm bg-white/40 hover:bg-white/60" @click="next">❯</button>
              </div>
            </div>
          </div>

          <!-- About section -->
          <div class="flex-1 flex flex-col">
            <div class="grow flex flex-col gap-6">
              <h2 class="text-3xl md:text-4xl font-extrabold">Mikroligasi varikokel</h2>
              <p v-for="(t, index) in text" class="text-gray-600">
                {{ t }}
              </p>
            </div>

            <div class="mt-6 flex flex-col sm:flex-row gap-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md"
                @click="redirectToWhatsapp()">
                Make Appointment <i class="fas fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.will-change-opacity {
  will-change: opacity;
}
</style>
