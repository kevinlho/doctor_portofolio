<script setup>
import { navItems } from '@/router/navigation'
import { redirectToInstagram, redirectToTikTok, redirectToWhatsapp, redirectToYouTube } from '@/utils/redirect'
import { ref, defineProps, watch } from 'vue'

const props = defineProps({
  sticky: Boolean
})

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// simple scroll lock
watch(mobileMenuOpen, (val) => {
  if (val) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
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
        <img src="/assets/icon/ic_logo.png" alt="" class="w-9 h-9" />
        <span :class="['font-bold text-xl', sticky ? 'text-black' : 'text-white']">Dr Isaac Deswanto</span>
      </div>

      <!-- Desktop Navigation -->
      <nav :class="[
        'hidden lg:flex gap-6 text-sm font-semibold',
        sticky ? 'text-black' : 'text-white'
      ]">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="hover:text-blue-500">
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- CTA & Hamburger -->
      <div class="flex items-center gap-4">
        <button
          class="hidden lg:block bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2 hover:bg-lime-300 transition"
          @click="redirectToWhatsapp()">
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
  <div v-if="mobileMenuOpen" class="fixed inset-0 bg-white z-[9999] flex flex-col px-6 pt-4 pb-6 lg:hidden">
    <div class="flex items-center justify-between mb-6">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="/assets/icon/ic_logo.png" alt="" class="w-9 h-9" />
        <span class="font-bold text-xl text-black">Dr Isaac Deswanto</span>
      </div>

      <button @click="toggleMobileMenu" class="p-2 rounded bg-gray-100 hover:bg-gray-200 lg:hidden">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Navigation links -->
    <div class="flex flex-col space-y-4 text-sm font-semibold text-gray-800">
      <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="hover:text-blue-500"
        @click="mobileMenuOpen = false">
        {{ item.label }}
      </RouterLink>
    </div>

    <!-- Social Links -->
    <div class="pb-12 mt-auto">
      <p class="font-bold mb-2 text-black">Follow us</p>
      <div class="flex gap-3">
        <button @click="redirectToInstagram" class="bg-[#1B2C47] hover:bg-blue-600 p-3 rounded-md">
          <ion-icon name="logo-instagram"></ion-icon>
        </button>

        <button @click="redirectToTikTok" class="bg-[#1B2C47] hover:bg-blue-600 p-3 rounded-md">
          <ion-icon name="logo-tiktok"></ion-icon>
        </button>

        <button @click="redirectToYouTube" class="bg-[#1B2C47] hover:bg-blue-600 p-3 rounded-md">
          <ion-icon name="logo-youtube"></ion-icon>
        </button>
      </div>
    </div>
  </div>
</template>