<template>
  <nav class="navbar bg-dark">
    <h1>
      <router-link :to="{ name: 'Landing' }"
        ><i class="fas fa-code"></i> {{ logo }}</router-link
      >
    </h1>
    <ul>
      <li><router-link :to="{ name: 'Profiles' }">Developers</router-link></li>
      <li>
        <router-link :to="{ name: 'Register' }" v-if="!isAuthenticated"
          >Register</router-link
        >
      </li>
      <li>
        <router-link to="" v-if="isAuthenticated" @click="logout">
          Logout
        </router-link>
        <router-link v-else :to="{ name: 'Login' }"> Login </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navbarProps } from "../../../utils/props";

export default {
  name: "Navbar",
  props: { ...navbarProps },
  components: {},
  data() {
    return {
      isAuthenticated: false,
    };
  },
  computed: {},
  watch: {
    $route(value) {
      console.log("value: " + value);
      console.log(
        'localStorage.getItem("client-token");',
        localStorage.getItem("client-token")
      );
      this.isAuthenticated = localStorage.getItem("client-token")
        ? true
        : false;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("client-token");
      this.isAuthenticated = localStorage.getItem("client-token")
        ? true
        : false;
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style></style>
