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
	-webkit-width: 11rem !important; 
	width: 11rem !important;
	-webkit-height: 11rem !important;
	height: 11rem !important;
}

@media (min-width: 767px) {
	.card {
		-webkit-width: 20rem !important;
		width: 20rem !important;
		-webkit-height: 20rem !important;
		height: 20rem !important;
	}
}
</style>
