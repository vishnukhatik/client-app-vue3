<template lang="">
  <div class="dash-buttons">
    <router-link :to="{ name: 'CreateProfile' }" class="btn btn-light"
      ><i class="fas fa-user-circle text-primary"></i> Edit Profile</router-link
    >
    <router-link :to="{ name: 'AddExperience' }" class="btn btn-light"
      ><i class="fab fa-black-tie text-primary"></i> Add Experience</router-link
    >
    <router-link :to="{ name: 'AddEducation' }" class="btn btn-light"
      ><i class="fas fa-graduation-cap text-primary"></i> Add
      Education</router-link
    >
  </div>
</template>
<script setup></script>
<style lang=""></style>
