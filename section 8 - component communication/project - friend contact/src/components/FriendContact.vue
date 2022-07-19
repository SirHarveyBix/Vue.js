<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? " (favorite)" : "" }}</h2>
    <button @click="toogleDetails()">
      {{ visibleDetails ? "Hide" : "Show" }} Details
    </button>
    <button @click="toogleFavorite()">
      {{ isFavorite ? " Not favorite" : " favorite" }}
    </button>
    <ul v-if="visibleDetails">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toogle-favorite", "delete"],
  data() {
    return {
      visibleDetails: false,
    };
  },
  methods: {
    toogleDetails() {
      this.visibleDetails = !this.visibleDetails;
    },
    toogleFavorite() {
      this.$emit("toogle-favorite", this.id);
    },
    // deleteFriend() {
    //   this.$emit("delete", this.id);
    // },
  },
};
</script>