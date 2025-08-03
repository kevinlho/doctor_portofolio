<template>
  <section class="relative bg-white text-gray-800 py-16 px-4 md:px-8 overflow-hidden">
    <!-- Background SVG -->
    <img
      src="/assets/bg/about-vector.svg"
      alt="Background"
      class="absolute right-0 top-0 max-w-xl opacity-10 pointer-events-none select-none hidden md:block"
    />

    <!-- Container -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
      <!-- Time For Meet Card -->
      <div class="bg-gradient-to-br from-[#052146] to-[#09275e] text-white rounded-2xl w-full max-w-sm overflow-hidden shadow-lg flex flex-col">
        <div class="px-6 py-6 flex flex-col items-center text-center">
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 w-full text-center">
            Time For Meet
          </h3>

          <!-- Monday – Friday -->
          <div class="mb-6">
            <p class="text-base font-semibold">Monday – Friday</p>
            <p class="text-sm text-white/70">9:00 PM – 06:00 PM</p>
          </div>

          <!-- Separator -->
          <div class="w-full h-px bg-white/20 my-2"></div>

          <!-- Saturday – Sunday -->
          <div class="mb-6">
            <p class="text-base font-semibold">Saturday – Sunday</p>
            <p class="text-sm text-white/70">9:00 PM – 06:00 PM</p>
          </div>
        </div>

        <!-- Emergency -->
        <div class="bg-[#1263ff] text-center py-4 px-6 mt-auto">
          <p class="text-sm font-medium">For Emergency Care</p>
          <p class="text-lg font-semibold">+208-6666-0112</p>
        </div>
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
            holistic, evidence-based medical care. With over 12 years of experience, I’ve had the privilege of treating
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
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition flex items-center gap-2"
            >
              SEND MESSAGE <i class="fas fa-arrow-up-right-from-square"></i>
            </button>
            <button
              class="border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-md transition flex items-center gap-2"
            >
              VIDEO CALL <i class="fas fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
