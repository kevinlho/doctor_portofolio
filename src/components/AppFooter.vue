<script setup>
import { navItems } from '@/router/navigation';
import { redirectToInstagram, redirectToTikTok, redirectToYouTube } from '@/utils/redirect';

</script>

<template>
  <footer class="bg-[#031B34] text-white px-4 py-12">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
      <!-- Logo + Social -->
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-4">
          <img src="/assets/icon/ic_logo.png" alt="" class="w-9 h-9" />
          <h2 class="text-2xl font-bold">Dr. Isaac Deswanto</h2>
        </div>
        <p class="text-sm text-gray-300 mb-6 max-w-sm">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </p>
        <div class="flex items-center gap-4">
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

      <!-- Right Sections -->
      <div class="flex flex-col sm:flex-row gap-10">
        <!-- Nav -->
        <div>
          <h3 class="text-lg font-semibold border-b-2 border-blue-600 inline-block mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li v-for="item in navItems" :key="item.label">
              <RouterLink :to="item.to" class="hover:text-blue-500">
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <!-- <div>
          <h3 class="text-lg font-semibold border-b-2 border-blue-600 inline-block mb-4">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>102/ B Street, New Elephant Road, Sandigo, USA</li>
            <li><span class="text-white font-semibold">Email Us:</span> info@example.com</li>
            <li><span class="text-white font-semibold">Call Now:</span> +208-6666-0112</li>
          </ul>
        </div> -->
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-white/20 my-10"></div>

    <!-- Bottom Section -->
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-6 text-sm text-gray-400">
      <div class="text-center space-y-1">
        <p>
          © <a href="#" class="text-blue-500 hover:underline">Dr. Isaac Deswanto</a> 2025. All Rights Reserved.
        </p>
        <!-- <p class="space-x-4">
          <a href="#" class="hover:underline">Terms of use</a>
          <a href="#" class="hover:underline">Privacy Environmental Policy</a>
        </p> -->
      </div>
    </div>
  </footer>
</template>