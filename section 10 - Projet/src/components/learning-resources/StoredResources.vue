<template>
  <ul>
    <learning-resources
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    >
    </learning-resources>
  </ul>
</template>

<script>
import LearningResourcesVue from "./LearningResources.vue";
export default {
  components: {
    "learning-resources": LearningResourcesVue,
  },
  props: ["resources"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>