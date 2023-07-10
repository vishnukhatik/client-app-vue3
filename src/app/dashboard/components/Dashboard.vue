<template lang="">
  <section class="container">
    <h1 class="large text-primary">Dashboard</h1>
    <p class="lead"><i class="fas fa-user"></i> Welcome John Doe</p>
    <DashboardAction />
    <DisplayExperience />
    <DisplayEducation />
    <div class="my-2">
      <button class="btn btn-danger">
        <i class="fas fa-user-minus"></i>

        Delete My Account
      </button>
    </div>
  </section>
</template>
<script>
import DashboardAction from "./DashboardAction.vue";
import DisplayEducation from "./DisplayEducation.vue";
import DisplayExperience from "./DisplayExperience.vue";
export default {
  name: "Dashboard",
  components: {
    DashboardAction,
    DisplayEducation,
    DisplayExperience,
  },
};
</script>
<style lang=""></style>
