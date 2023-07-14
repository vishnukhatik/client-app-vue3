<template lang="">
  <section class="container">
    <router-link :to="{ name: 'Profiles' }" class="btn btn-light"
      >Back To Profiles</router-link
    >

    <div class="profile-grid my-1">
      <!-- Top ProfileUser -->
      <ProfileUser />
      <!-- About -->
      <div class="profile-about bg-light p-2">
        <!-- Profile Bio -->
        <ProfileBio />
        <div class="line"></div>
        <!-- Profile Skill set -->
        <ProfileSkill />
      </div>

      <!-- Experience -->
      <ProfileExperience />
      <!-- Education -->
      <ProfileEducation />
      <!-- Github -->
      <ProfileRepos />
    </div>
  </section>
</template>
<script>
import ProfileUser from "@/app/profile/components/ProfileUser.vue";
import ProfileBio from "@/app/profile/components//ProfileBio.vue";
import ProfileEducation from "@/app/profile/components/ProfileEducation.vue";
import ProfileExperience from "@/app/profile/components/ProfileExperience.vue";
import ProfileRepos from "@/app/profile/components/ProfileRepos.vue";
import ProfileSkill from "@/app/profile/components/ProfileSkill.vue";
export default {
  components: {
    ProfileUser,
    ProfileBio,
    ProfileEducation,
    ProfileExperience,
    ProfileRepos,
    ProfileSkill,
  },
  data() {
    return {
      // profile: this.$route.query.id,
    };
  },
  methods: {},
};
</script>
<style lang=""></style>
