<template lang="">
  <section class="container">
    <div class="alert alert-danger" v-if="!inValid">Invalid credentials</div>
    <h1 class="large text-primary">Sign In</h1>
    <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
    <form class="form" @submit.prevent="loginForm">
      <div class="form-group">
        <input
          type="email"
          placeholder="Email Address"
          v-model="login.email"
          name="email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          v-model="login.password"
          name="password"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Login" />
    </form>
    <p class="my-1">
      Don't have an account?
      <router-link :to="{ name: 'Register' }">Sign Up</router-link>
    </p>
    {{ login }}
  </section>
</template>
<!-- vue3 -->
<!-- <script>
import { ref } from "vue";
export default {
  name: "Login",
  setup() {
    const login = ref({
      email: "",
      password: "",
    });
    const loginForm = () => {
      console.log("Login", login);
    };
    return {
      login,
      loginForm,
    };
  },
};
</script> -->
<!-- vue2 -->

<script>
import { loginService } from "@/app/auth/services/auth.service";

export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      inValid: true,
    };
  },
  methods: {
    async loginForm() {
      this.error = {};
      try {
        const result = await loginService(this.login);
        if (result) {
          this.inValid = true;
          this.$router.push({ name: "Dashboard" });
        }
      } catch (error) {
        console.log("error.errors.msg", error);
        this.inValid = false;
      }
    },
  },
};
</script>
<style lang=""></style>
