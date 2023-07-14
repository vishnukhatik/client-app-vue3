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
        />
        <div class="invalid-feedback" v-if="error.name">{{ error.name }}</div>
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
        <div class="invalid-feedback" v-if="error.email">{{ error.email }}</div>
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          minLength="6"
          v-model="register.password"
        />
        <div class="invalid-feedback" v-if="error.password">
          {{ error.password }}
        </div>
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
<!-- vue3 -->
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
    const error = ref({});
    const registerForm = () => {
        console.log("registerForm", this.register);
      try {
        const result = await registerService(this.register);
        if(result) {
          localStorage.setItem("client-token", result.data.token);
          router.push({
            name: "Dashboard",
          });
        }
      } catch (error) {
        console.log("error", error.response.data.errors);
        error.response.data.errors.filter((e) => {
          console.log("e parameter", e.param);
          console.log("e parameter", e.msg);
          error.value[e.param] = e.msg;
        });
      }
      console.log("error: " + error.value);
    };
    return {
      register,
      registerForm,
    };
  },
};
</script> -->
<!-- vue2 -->
<script>
import { registerService } from "@/app/auth/services/auth.service";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        cPassword: "",
      },
      error: {},
    };
  },
  methods: {
    async registerForm() {
      this.error = {};
      try {
        const result = await registerService(this.register);
        if (result) {
          localStorage.setItem("client-token", result.data.token);
          this.$router.push({ name: "Dashboard" });
        }
      } catch (error) {
        error.response.data.errors.filter((e) => {
          this.error[e.param] = e.msg;
        });
      }
      console.log("error: " + this.error);
    },
  },
};
</script>
<style lang=""></style>
