<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

interface Testimonial {
  quote: string
  author: string
  title: string
  gradient: string
}

const testimonials: Testimonial[] = [
  {
    quote: "My mission is to treat every patient with care, respect, and the highest standard of medical knowledge",
    author: "Robel Roy",
    title: "USY",
    gradient: "from-blue-900 via-blue-800 to-indigo-900"
  },
  {
    quote: "Excellence in healthcare comes from combining compassion with cutting-edge medical expertise",
    author: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    gradient: "from-purple-900 via-purple-800 to-indigo-900"
  },
  {
    quote: "Our commitment is to provide personalized care that puts patients first in every decision we make",
    author: "Michael Chen",
    title: "Healthcare Director",
    gradient: "from-teal-900 via-blue-800 to-cyan-900"
  },
  {
    quote: "Innovation in medicine means never stopping our pursuit of better outcomes for those we serve",
    author: "Dr. Emily Watson",
    title: "Research Lead",
    gradient: "from-slate-900 via-gray-800 to-blue-900"
  }
]

const stickyHeader = ref(false)
const handleScroll = () => {
  stickyHeader.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <div class="bg-[#02172e]">
    <AppHeader :sticky="stickyHeader" />
    <!-- Padding to prevent content being covered -->
    <div :class="stickyHeader ? 'pt-[72px]' : ''">
      <section class="relative bg-white text-gray-800 py-16 px-4 md:px-8 overflow-hidden">
        <!-- Background SVG -->
        <img src="/assets/bg/about-vector.svg" alt="Background"
          class="absolute right-0 top-0 max-w-xl opacity-10 pointer-events-none select-none hidden md:block" />

        <!-- Container -->
        <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <!-- Time For Meet Card -->
          <div
            class="bg-gradient-to-br from-[#052146] to-[#09275e] text-white rounded-2xl w-full max-w-sm overflow-hidden shadow-lg flex flex-col">
            <img src="/assets/icon/ic_rupiahcepat.png" alt="Meditics Logo" class="w-full h-auto" />
          </div>

          <!-- About Me Content -->
          <div class="flex-1 flex flex-col">
            <!-- Top Section Grows -->
            <div class="grow flex flex-col gap-6">
              <!-- Title -->
              <h2 class="text-3xl md:text-4xl font-extrabold">My Journey in Medicine</h2>

              <!-- Paragraphs -->
              <p class="text-gray-600">
                I'm Dr. Tushar Raja a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing
                holistic, evidence-based medical care. With over 12 years of experience, I’ve had the privilege of
                treating
                thousands of patients with empathy, accuracy, and dedication.
              </p>

              <p class="text-gray-600">
                I strongly believe that medicine is not just about treating diseases, but about understanding people,
                building trust, and guiding them toward long-term wellness.
              </p>

              <!-- Motto -->
              <div class="flex items-start gap-2">
                <i class="fas fa-circle-arrow-right text-blue-500 mt-1"></i>
                <p>
                  <strong>Doctor's Motto or Belief:</strong> Healing begins with listening.
                </p>
              </div>
            </div>

            <!-- Button Section Always at Bottom When Space Available -->
            <div class="mt-6">
              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition flex items-center gap-2">
                  SEND MESSAGE <i class="fas fa-arrow-up-right-from-square"></i>
                </button>
                <button
                  class="border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-md transition flex items-center gap-2">
                  VIDEO CALL <i class="fas fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <AppFooter />
  </div>
</template>
