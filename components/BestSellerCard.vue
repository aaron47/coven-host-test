<script setup lang="ts">
const props = defineProps<{ bestSeller: BestSeller }>();
</script>

<template>
  <div class="custom-card">
    <figure class="card-figure">
      <img :src="bestSeller.image" :alt="bestSeller.name" />
    </figure>
    <div class="card-body">
      <span class="card-title">{{ bestSeller.name }}</span>
      <span class="card-price">{{ bestSeller.price }} Tokens</span>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  width: 11rem;
  height: auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-figure {
  width: 100%;
  height: auto;
}

.card-figure img {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card-price {
  font-size: 1.25rem;
  font-weight: bold;
}

@media (min-width: 767px) {
  .custom-card {
    width: 20rem;
  }
}
</style>

