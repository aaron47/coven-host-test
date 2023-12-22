<script setup lang="ts">
const props = defineProps<{ bestSeller: BestSeller }>();
</script>

<template>
	<div id="best-seller-card" class="card md:w-80 shadow-xl image-full sm:w-44">
		<figure>
			<img :src="bestSeller.image" :alt="bestSeller.name" />
		</figure>
		<div class="card-body flex justify-center items-center h-full">
			<span class="text-base">{{ bestSeller.name }}</span>
			<span class="text-lg font-semibold">{{ bestSeller.price }} Tokens</span>
		</div>
	</div>
</template>

<style scoped>
.card.image-full::before {
	background-color: #27004f;
	opacity: 0.5;
}

@supports (-webkit-touch-callout: none) {
	@media (min-width: 767px) {
		#best-seller-card {
			width: 20rem; /* 320px */
		}
	}

	@media (min-width: 375px) {
		#best-seller-card {
			width: 11rem;
		}
	}
}
</style>
