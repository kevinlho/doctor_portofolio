<script setup lang="ts">
// Dummy data
const qualifications = [
  {
    university: "Universitas Indonesia",
    date: "2007 - 2013",
    degree: "Faculty of Medicine",
  },
  {
    university: "University of Melbourne",
    date: "2010 - 2011",
    degree: "Bachelor of Medical Science ( BMedSc )",
  },
  {
    university: "Cipto Mangunkusumo Hospital",
    date: "2016 - 2020",
    degree: "Urology Resident",
  }
];
</script>

<template>
  <section class="bg-gray-100 py-16 px-4 md:px-8 relative overflow-hidden">
    <!-- Background SVG Decorations (optional) -->
    <img src="/assets/bg/about-vector.svg"
      class="absolute bottom-0 left-0 max-w-xs opacity-10 pointer-events-none select-none" alt="Left decoration" />
    <img src="/assets/bg/about-vector.svg"
      class="absolute top-0 right-0 max-w-xs opacity-10 pointer-events-none select-none" alt="Right decoration" />

    <div class="max-w-4xl mx-auto relative z-10 text-center">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">My Qualification & Awards</h2>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 gap-6">
        <div v-for="(q, index) in qualifications" :key="index"
          class="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
          <!-- University & Date -->
          <div class="text-left">
            <p class="text-lg font-semibold text-gray-900">{{ q.university }}</p>
            <p class="text-sm text-gray-600">{{ q.date }}</p>
          </div>

          <!-- Degree -->
          <div class="text-left">
            <p class="text-base font-bold text-gray-800">{{ q.degree }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
