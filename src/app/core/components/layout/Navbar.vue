<template>
  <nav class="navbar bg-dark">
    <h1>
      <a href="#"><i class="fas fa-code"></i> {{ logo }}</a>
    </h1>
    <ul>
      <li><a href="#">Developers</a></li>
      <li><a href="#">Register</a></li>
      <li><a href="#">Login</a></li>
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
