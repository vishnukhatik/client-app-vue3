<template>
  <p class="bg-dark text-white p-1 text-center">
    &copy; {{ currentYear }} All Right Reserved.Designed by
    <em>Vishnu Khatik VK</em>
  </p>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style></style>
