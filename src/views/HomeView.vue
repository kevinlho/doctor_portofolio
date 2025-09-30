<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppHeader from '@/components/AppHeader.vue';
import DoctorProfile from './LandingPage/DoctorProfile.vue';
import DoctorIntro from './LandingPage/DoctorIntro.vue';
import ClinicalPost from './LandingPage/ClinicalPost.vue';
import MedicalService from './LandingPage/MedicalService.vue';
import DoctorEducation from './LandingPage/DoctorEducation.vue';
import DoctorBlog from './LandingPage/DoctorBlog.vue';
import ClinicLocation from './LandingPage/ClinicLocation.vue';
import AppFooter from '@/components/AppFooter.vue';

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
      <DoctorProfile id="doctor-profile" />
      <!-- <DoctorIntro id="doctor-intro" /> -->
      <ClinicalPost id="clinical-post" />
      <!-- <MedicalService id="medical-service" /> -->
      <DoctorEducation id="doctor-education" />
      <!-- <DoctorBlog id="doctor-blog" /> -->
      <ClinicLocation id="clinic-location" />
    </div>
    <AppFooter />
  </div>
</template>
