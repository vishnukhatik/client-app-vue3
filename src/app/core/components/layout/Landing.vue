<template>
  <section class="landing">
    <div class="dark-overlay">
      <div class="landing-inner">
        <h1 class="x-large">{{ upprcaseText(propsName) }}</h1>
        <p class="lead">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div class="buttons">
          <a href="register.html" class="btn btn-primary">Sign Up</a>
          <a href="login.html" class="btn btn-light">Login</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingProps } from "../../../utils/props";
export default {
  name: "landing",
  props: { ...landingProps },
  setup() {
    const upprcaseText = (element) => {
      return element.toUpperCase();
    };
    return {
      upprcaseText,
    };
  },
};
</script>

<style></style>
