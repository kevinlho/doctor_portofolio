<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppHeader from '@/components/AppHeader.vue';
import DoctorProfile from './LandingPage/DoctorProfile.vue';
import DoctorIntro from './LandingPage/DoctorIntro.vue';
import MedicalService from './LandingPage/MedicalService.vue';
import DoctorQualification from './LandingPage/DoctorQualification.vue';
import DoctorBlog from './LandingPage/DoctorBlog.vue';
import ClinicLocation from './LandingPage/ClinicLocation.vue';
import AppFooter from '@/components/AppFooter.vue';

interface Testimonial {
  quote: string
  author: string
  title: string
  gradient: string
}

const testimonials: Testimonial[] = [
  {
    quote: "My mission is to treat every patient with care, respect, and the highest standard of medical knowledge",
    author: "Robel Roy",
    title: "USY",
    gradient: "from-blue-900 via-blue-800 to-indigo-900"
  },
  {
    quote: "Excellence in healthcare comes from combining compassion with cutting-edge medical expertise",
    author: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    gradient: "from-purple-900 via-purple-800 to-indigo-900"
  },
  {
    quote: "Our commitment is to provide personalized care that puts patients first in every decision we make",
    author: "Michael Chen",
    title: "Healthcare Director",
    gradient: "from-teal-900 via-blue-800 to-cyan-900"
  },
  {
    quote: "Innovation in medicine means never stopping our pursuit of better outcomes for those we serve",
    author: "Dr. Emily Watson",
    title: "Research Lead",
    gradient: "from-slate-900 via-gray-800 to-blue-900"
  }
]

const stickyHeader = ref(false)
const handleScroll = () => {
  stickyHeader.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <div class="bg-[#02172e]">
    <AppHeader :sticky="stickyHeader" />
    <!-- Padding to prevent content being covered -->
    <div :class="stickyHeader ? 'pt-[72px]' : ''">
      <DoctorProfile/>
      <DoctorIntro/>
      <MedicalService/>
      <DoctorQualification/>
      <DoctorBlog/>
      <ClinicLocation/>
    </div>
    <AppFooter/>
  </div>
</template>
