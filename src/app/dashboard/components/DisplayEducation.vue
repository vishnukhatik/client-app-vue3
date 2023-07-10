<template lang="">
  <h2 class="my-2">Education Credentials</h2>
  <table class="table">
    <thead>
      <tr>
        <th>School</th>
        <th class="hide-sm">Degree</th>
        <th class="hide-sm">Years</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <DisplayEducationItem />
    </tbody>
  </table>
</template>
<script>
import DisplayEducationItem from "./DisplayEducationItem.vue";

export default {
  name: "App",
  components: {
    DisplayEducationItem,
  },
};
</script>
<style lang=""></style>
