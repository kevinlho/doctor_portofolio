<script setup>
const services = [
  {
    title: "General Health Check-Ups",
    description:
      "Regular health check-ups help detect potential issues early, ensuring timely treatment, better.",
    icon: "/assets/icons/checkup.svg",
  },
  {
    title: "Stress & Lifestyle Counseling",
    description:
      "Personalized counseling to manage stress, improve sleep, build healthy habits, and create a balanced lifestyle.",
    icon: "/assets/icons/meditation.svg",
  },
  {
    title: "Referral to Specialists",
    description:
      "Accurate assessments with timely referrals to trusted medical specialists, ensuring you receive expert care",
    icon: "/assets/icons/referral.svg",
  },
];
</script>

<template>
  <section class="bg-[#f4f4f4] relative py-20 px-4 md:px-8 overflow-hidden">
    <!-- Background SVG -->
    <img
      src="/assets/bg/about-vector.svg"
      alt="Background"
      class="absolute left-0 top-0 max-w-xl opacity-10 pointer-events-none select-none hidden md:block"
    />
    <img
      src="/assets/bg/about-vector.svg"
      alt="Background"
      class="absolute right-0 top-0 max-w-xl opacity-10 pointer-events-none select-none hidden md:block rotate-180"
    />

    <!-- Container -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12 text-black">Medical Services I Provide</h2>

      <!-- Cards -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white rounded-2xl p-6 text-left shadow hover:shadow-lg transition duration-300"
        >
          <div class="bg-gray-100 p-4 rounded-md inline-block mb-4">
            <img :src="service.icon" :alt="service.title" class="w-8 h-8" />
          </div>
          <h3 class="text-lg font-bold mb-2">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <a href="#" class="text-sm font-semibold text-black hover:text-blue-600 flex items-center gap-1">
            READ MORE <i class="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>