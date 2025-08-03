<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings';
import LoadingScreen from './components/LoadingScreen.vue';

const settings = useSettingsStore()

// Start loading
settings.setLoading(true)

setTimeout(() => {
  // Stop loading
  settings.setLoading(false)
}, 1000)

</script>

<template>
  <!-- Show loading screen when isLoading is true -->
  <LoadingScreen v-if="settings.isLoading" />
  <RouterView v-if="!settings.isLoading"/>
</template>
