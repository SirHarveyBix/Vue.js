<template>
  <form @submit.prevent="edit">
    <div>
      <label>Username :{{ username }} </label>
      <input type="text" v-model="enteredUsername" />
    </div>
    <div>
      <label>Age :</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <button>edit</button>
  </form>
</template>

<script>
export default {
  props: { username: String, age: String },
  emit: ["change-value"],
  data() {
    return {
      enteredUsername: this.username,
      enteredAge: this.age,
    };
  },
  methods: {
    edit() {
      this.$emit("change-value", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>

<style>
</style>