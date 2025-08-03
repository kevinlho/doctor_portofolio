<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="z-50 min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <DotLottieVue src="/assets/lottie/lottie_page_not_found.json" background="transparent" style="width: 200px; height: 200px"
      loop autoplay />
    <p class="text-sm text-gray-500 mb-6 -mt-12">Page not found</p>
    <button @click="goHome" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Go to Home
    </button>
  </div>
</template>

<style scoped>
/* Optional additional styling */
</style>
