<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <navbar-component />
  <landing-component />
  <footer-component />
</template>

<script>
import NavbarComponent from "@/app/core/components/layout/Navbar.vue";
import LandingComponent from "@/app/core/components/layout/Landing.vue";
import FooterComponent from "@/app/core/components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    NavbarComponent,
    LandingComponent,
    FooterComponent,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
