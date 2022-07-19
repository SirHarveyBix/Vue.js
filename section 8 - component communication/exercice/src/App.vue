<template>
  <active-user :username="username" :age="age"></active-user>
  <user-data @change-value="changeValue"></user-data>
</template>

<script>
export default {
  data() {
    return {
      username: "Harvey",
      age: "17",
    };
  },
  methods: {
    changeValue(newUser, newAge) {
      console.log(newUser, newAge);
      this.username = newUser;
      this.age = newAge;
    },
  },
};
</script>

<style>
</style>