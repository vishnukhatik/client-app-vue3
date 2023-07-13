<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <div>
    <navbar-component />
    <section class="main-h">
      <router-view></router-view>
    </section>
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from "@/app/core/components/layout/Navbar.vue";
import FooterComponent from "@/app/core/components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
.main-h {
  height: calc(100vh - 58px);
  max-height: calc(100vh - 58px);
  min-height: calc(100vh - 58px);
  overflow: auto;
}
</style>
