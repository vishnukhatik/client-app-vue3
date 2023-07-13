<template lang="">
  <section class="container">
    <h1 class="large text-primary">Sign Up</h1>
    <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
    <form class="form" @submit.prevent="registerForm">
      <div class="form-group">
        <input
          type="text"
          placeholder="Name"
          v-model="register.name"
          name="name"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          v-model="register.email"
        />
        <small class="form-text"
          >This site uses Gravatar so if you want a profile image, use a
          Gravatar email</small
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          minLength="6"
          v-model="register.password"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          minLength="6"
          v-model="register.cPassword"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Register" />
    </form>
    <p class="my-1">
      Already have an account?
      <router-link :to="{ name: 'Login' }">Sign In</router-link>
    </p>
  </section>
</template>
<!-- <script>
import { ref } from "vue";
export default {
  name: "Register",
  setup() {
    const register = ref({
       name: "",
        email: "",
        password: "",
        cPassword: "",
    });
    const registerForm = () => {
      console.log("Login", login);
    };
    return {
      register,
      registerForm,
    };
  },
};
</script> -->
<script>
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        cPassword: "",
      },
    };
  },
  methods: {
    registerForm() {
      console.log("registerForm", this.register);
    },
  },
};
</script>
<style lang=""></style>
