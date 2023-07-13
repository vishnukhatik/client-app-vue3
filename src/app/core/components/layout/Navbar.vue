<template>
  <nav class="navbar bg-dark">
    <h1>
      <router-link :to="{ name: 'Landing' }"
        ><i class="fas fa-code"></i> {{ logo }}</router-link
      >
    </h1>
    <ul>
      <li><router-link :to="{ name: 'Profiles' }">Developers</router-link></li>
      <li><router-link :to="{ name: 'Register' }">Register</router-link></li>
      <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { navbarProps } from "../../../utils/props";

export default {
  name: "Navbar",
  props: { ...navbarProps },
  components: {},
};
</script>

<style></style>
