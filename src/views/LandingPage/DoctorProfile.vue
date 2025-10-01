<template>
    <section class="text-white overflow-hidden">
        <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4 py-16 md:py-24">

            <!-- Left: Text Content -->
            <div class="flex-1 text-center md:text-left md:ml-10">
                <h1 class="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                    dr. Isaac Ardianson Deswanto <br />
                    BMedSc, SpU, FICS
                    <br />
                    <span class="text-blue-400">— Urological Surgery</span>
                </h1>

                <p class="text-gray-300 text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Dr. Isaac is a highly experienced and compassionate urologist, dedicated to providing expert care and improving patient well-being with advanced surgical techniques and modern treatment methods.
        </p>


                <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <button
                        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
                        BOOK APPOINTMENT <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                    <button
                        class="border border-white hover:border-blue-500 hover:text-blue-500 text-white font-semibold py-3 px-6 rounded-md transition">
                        VIEW SCHEDULE <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>

            <!-- Right: Doctor Image -->
            <div class="flex-1 relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <div
                    class="absolute -top-8 -left-8 w-full h-full bg-blue-600 rounded-3xl blur-2xl opacity-40 z-0 hidden md:block">
                </div>
                <img src="/assets/photo/profile.png" alt="Dr. Isaac Deswanto" class="relative z-10 w-full" />
            </div>
        </div>
    </section>
</template>