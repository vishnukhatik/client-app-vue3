<template lang="">
  <section class="container">
    <a href="profiles.html" class="btn btn-light">Back To Profiles</a>

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
import ProfileUser from "@/app/profiles/components/profile/ProfileUser.vue";
import ProfileBio from "@/app/profiles/components/profile/ProfileBio.vue";
import ProfileEducation from "@/app/profiles/components/profile/ProfileEducation.vue";
import ProfileExperience from "@/app/profiles/components/profile/ProfileExperience.vue";
import ProfileRepos from "@/app/profiles/components/profile/ProfileRepos.vue";
import ProfileSkill from "@/app/profiles/components/profile/ProfileSkill.vue";
export default {
  components: {
    ProfileUser,
    ProfileBio,
    ProfileEducation,
    ProfileExperience,
    ProfileRepos,
    ProfileSkill,
  },
};
</script>
<style lang=""></style>
