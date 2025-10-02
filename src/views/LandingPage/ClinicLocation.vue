<script setup lang="ts">
import { ref } from 'vue'

const locations = [
  { name: 'EMC Tangerang', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6003402107117!2d106.64523067316675!3d-6.18420846058968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9beaae8a477%3A0x501739509e5f571a!2sRS%20EMC%20Tangerang!5e0!3m2!1sen!2sid!4v1754227994947!5m2!1sen!2sid' },
  { name: 'EMC Alam Sutera', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1424381570605!2d106.64841077316771!3d-6.244952661145426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb943335dda1%3A0x1f0d85230dd7bd29!2sRS%20EMC%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1754228053401!5m2!1sen!2sid' },
]

const selectedLocation = ref(locations[0].mapSrc)

function selectLocation(src: string) {
  selectedLocation.value = src
}
</script>

<template>
  <section class="bg-[#f8fcff] py-20 px-4">
    <div class="max-w-4xl mx-auto flex flex-col gap-10 items-start">
      <!-- Left: Title and Map -->
      <div class="w-full">
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-black">Apply for Appointment</h2>
        <!-- Location Buttons -->
        <div class="flex-1 w-full space-y-4 text-black my-4">
          <div class="flex flex-col sm:flex-row gap-3">
            <button v-for="(loc, index) in locations" :key="index" @click="selectLocation(loc.mapSrc)"
              class="px-4 py-2 border rounded-md text-left hover:bg-blue-50 hover:border-blue-500 transition"
              :class="{ 'border-blue-600 bg-blue-100': selectedLocation === loc.mapSrc }">
              {{ loc.name }}
            </button>
          </div>
        </div>

        <!-- Map -->
        <div class="w-full aspect-video rounded-xl overflow-hidden shadow">
          <iframe :src="selectedLocation" width="100%" height="100%" style="border:0;" allowfullscreen="false"
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
