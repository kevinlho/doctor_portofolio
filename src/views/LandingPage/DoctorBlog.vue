<script setup lang="ts">
interface BlogPost {
  title: string
  date: string
  category: string
  image: string
}

const posts: BlogPost[] = [
  {
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    category: "Event",
    image: "/assets/photo/temp_img.jpg",
  },
  {
    title: "Healthy Habits for Busy Professionals",
    date: "11 March 2025",
    category: "Event",
    image: "/assets/photo/temp_img.jpg",
  },
  {
    title: "Ask the Doctor Real Answers, Real Care",
    date: "11 March 2025",
    category: "Event",
    image: "/assets/photo/temp_img.jpg",
  },
]
</script>

<template>
  <section class="bg-[#f8fcff] py-20 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-black">
        Your Health, My Words
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
        >
          <img :src="post.image" :alt="post.title" class="w-full h-60 object-cover" />
          <div class="p-6 flex flex-col justify-between flex-1">
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-3 text-left text-gray-900">
                {{ post.title }}
              </h3>
              <div class="flex items-center text-sm text-gray-500 gap-4">
                <div class="flex items-center gap-1">
                  <i class="fas fa-calendar-alt text-gray-400"></i>
                  {{ post.date }}
                </div>
                <div class="flex items-center gap-1">
                  <i class="fas fa-tag text-gray-400"></i>
                  {{ post.category }}
                </div>
              </div>
            </div>
            <div class="mt-6">
              <button class="w-full bg-[#011d36] hover:bg-[#02253e] text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition">
                READ MORE <i class="fas fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>