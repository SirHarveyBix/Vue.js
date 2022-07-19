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
  emits: ["toogle-favorite"],
  // emits: {
  //   "toogle-favorite": function (id) {
  //     //validator
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("missing ID");
  //       return false;
  //     }
  //   },
  // },
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
  },
};
</script>