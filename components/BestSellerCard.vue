<script setup lang="ts">
const props = defineProps<{ bestSeller: BestSeller }>();
</script>

<template>
  <div class="custom-card">
    <figure class="card-figure">
      <img :src="bestSeller.image" :alt="bestSeller.name" />
      <div class="card-overlay">
        <div class="card-body">
          <span class="card-title">{{ bestSeller.name }}</span>
          <span class="card-price">{{ bestSeller.price }} Tokens</span>
        </div>
      </div>
    </figure>
  </div>
</template>

<style scoped>
.custom-card {
  width: 11rem;
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-figure {
  position: relative;
  width: 100%;
  height: auto;
}

.card-figure img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.5rem;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #27004f;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  color: white; /* Set text color to white for visibility */
  text-align: center;
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
