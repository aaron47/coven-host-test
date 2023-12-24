<script setup lang="ts">
const props = defineProps<{ bestSeller: BestSeller }>();
</script>

<template>
	<div class="card md:w-80 shadow-xl image-full sm:w-44">
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

.card {
	-webkit-width: 11rem;
	width: 11rem;
	-webkit-height: 100%;
	height: 100%;
}

@media (min-width: 767px) {
	.card {
		-webkit-width: 20rem;
		width: 20rem;
		-webkit-height: 100%;
		height: 100%;
	}
}
</style>
