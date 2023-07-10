<template lang="">
  <section class="container">
    <h1 class="large text-primary">Developers</h1>
    <p class="lead">
      <i class="fab fa-connectdevelop"></i> Browse and connect with developers
    </p>
    <div class="profiles">
      <ProfileCard />
    </div>
  </section>
</template>
<script>
import ProfileCard from "@/app/profiles/components/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
};
</script>
<style lang=""></style>
