<script setup>
import { redirectToWhatsapp } from '@/utils/redirect'
import { ref, defineProps } from 'vue'
const props = defineProps({
  sticky: Boolean
})

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const onClickAppointment = () => {
  redirectToWhatsapp()
}
</script>

<template>
  <!-- Main Header -->
  <header :class="[
    'px-6 py-4 w-full transition-all z-50',
    sticky ? 'fixed top-0 left-0 bg-white shadow-lg' : 'relative bg-transparent'
  ]">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="/assets/icon/ic_rupiahcepat.png" alt="Meditics Logo" class="w-6 h-6" />
        <span :class="['font-bold text-xl', sticky ? 'text-black' : 'text-white']">Dr Isaac Deswanto</span>
      </div>

      <!-- Desktop Navigation -->
      <nav :class="[
        'hidden lg:flex gap-6 text-sm font-semibold',
        sticky ? 'text-black' : 'text-white'
      ]">
        <a href="#" class="hover:text-blue-600">HOME</a>
        <a href="#" class="hover:text-blue-600">ABOUT</a>
        <a href="#" class="hover:text-blue-600">SERVICES</a>
        <a href="#" class="hover:text-blue-600">PAGES</a>
        <a href="#" class="hover:text-blue-600">BLOG</a>
        <a href="#" class="hover:text-blue-600">CONTACT</a>
      </nav>

      <!-- CTA & Hamburger -->
      <div class="flex items-center gap-4">
        <button
          class="hidden lg:block bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2 hover:bg-lime-300 transition"
          @click="onClickAppointment()">
          BOOK AN APPOINTMENT
        </button>
        <button @click="toggleMobileMenu" class="p-2 rounded bg-gray-100 hover:bg-gray-200 lg:hidden">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div v-if="mobileMenuOpen" class="fixed inset-0 bg-white z-40 flex flex-col justify-between px-6 pt-4 pb-6 lg:hidden">
    <!-- Navigation links -->
    <div class="flex flex-col space-y-4 text-sm font-semibold text-gray-800">
      <a href="#" class="hover:text-blue-600">HOME</a>
      <a href="#" class="hover:text-blue-600">ABOUT</a>
      <a href="#" class="hover:text-blue-600">SERVICES</a>
      <a href="#" class="hover:text-blue-600">PAGES</a>
      <a href="#" class="hover:text-blue-600">BLOG</a>
      <a href="#" class="hover:text-blue-600">CONTACT</a>
    </div>

    <!-- Social Links -->
    <div class="pt-8">
      <p class="font-bold mb-2 text-black">Follow us</p>
      <div class="flex gap-3">
        <a href="#" class="border border-gray-300 rounded-full p-2 hover:bg-gray-100 text-gray-800">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="border border-gray-300 rounded-full p-2 hover:bg-gray-100 text-gray-800">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="border border-gray-300 rounded-full p-2 hover:bg-gray-100 text-gray-800">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="border border-gray-300 rounded-full p-2 hover:bg-gray-100 text-gray-800">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</template>