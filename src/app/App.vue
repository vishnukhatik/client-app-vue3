<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <div>
    <navbar-component />
    <section>
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
  height: calc(100vh - 42px);
  max-height: calc(100vh - 42px);
  min-height: calc(100vh - 42px);
  overflow: auto;
}
</style>
