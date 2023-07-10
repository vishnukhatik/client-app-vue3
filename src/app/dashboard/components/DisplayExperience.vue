<template lang="">
  <h2 class="my-2">Experience Credentials</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Company</th>
        <th class="hide-sm">Title</th>
        <th class="hide-sm">Years</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <DisplayExperienceItem />
    </tbody>
  </table>
</template>
<script>
import DisplayExperienceItem from "./DisplayExperienceItem.vue";

export default {
  name: "App",
  components: {
    DisplayExperienceItem,
  },
};
</script>
<style lang=""></style>
