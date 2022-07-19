<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toogleDetails()">
      {{ visibleDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="visibleDetails">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      visibleDetails: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.me",
      },
    };
  },
  methods: {
    toogleDetails() {
      this.visibleDetails = !this.visibleDetails;
    },
  },
};
</script>