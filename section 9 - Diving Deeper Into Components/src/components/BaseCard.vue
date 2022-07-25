<template>
  <div>
    <header v-if="$slots.mainHeader">
      <!-- check if we recieve data from specific slot -->
      <slot name="mainHeader">
        <!-- <h2>: fallback; ne s'affiche pas, sauf `<template v-slot:mainHeader>` n'est pas appelé 
        <h2>the Default</h2> -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.info("header slot: ", this.$slots.mainHeader);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>