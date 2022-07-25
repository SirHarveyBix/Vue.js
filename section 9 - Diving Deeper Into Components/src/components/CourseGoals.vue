<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :goalItem="goal" anotherProp=" ... "></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the Course", "Learn Vue"],
    };
  },
};
</script>

<style>
</style>