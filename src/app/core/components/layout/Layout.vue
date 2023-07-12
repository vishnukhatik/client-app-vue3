<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <navbar-component />
  <router-view></router-view>
  <footer-component />
</template>

<script>
import NavbarComponent from "@/app/core/components/layout/Navbar.vue";
import FooterComponent from "@/app/core/components/layout/Footer.vue";
export default {
  name: "Layout",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style></style>
