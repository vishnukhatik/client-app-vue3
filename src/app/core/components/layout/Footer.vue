<template>
  <div class="bg-dark text-white p-1 text-center">
    &copy; {{ currentYear }} All Right Reserved.Designed by
    <em>Vishnu Khatik VK</em>
  </div>
</template>

<script setup>
import { computed } from "vue";
const currentYear = computed(() => new Date().getFullYear());
</script>

<style></style>
