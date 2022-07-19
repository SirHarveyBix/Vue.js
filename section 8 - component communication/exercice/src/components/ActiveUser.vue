<template>
  <h2>Username : {{ username }}</h2>
  <h3>Age : {{ age }}</h3>
</template>

<script>
export default {
  props: { username: String, age: String },
};
</script>

<style>
</style>