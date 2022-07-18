<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails()">
      {{ visibleDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="visibleDetails">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
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