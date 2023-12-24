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

@media not all and (min-resolution: 0.001dpcm) {
	@supports (-webkit-appearance: none) and (display: flow-root) {
		.card {
			position: relative;
			display: flex;
			flex-direction: column;
			border-radius: var(--rounded-box, 1rem /* 16px */);
		}

		.card.image-full::before {
			background-color: #27004f;
			opacity: 0.5;
		}

		.card:focus {
			outline: 2px solid transparent;
			outline-offset: 2px;
		}
		.card figure {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.card.image-full {
			display: grid;
		}
		.card.image-full:before {
			position: relative;
			content: '';
			z-index: 10;
			border-radius: var(--rounded-box, 1rem /* 16px */);
			--tw-bg-opacity: 1;
			background-color: var(
				--fallback-n,
				oklch(var(--n) / var(--tw-bg-opacity))
			);
			opacity: 0.75;
		}
		.card.image-full:before,
		.card.image-full > * {
			grid-column-start: 1;
			grid-row-start: 1;
		}
		.card.image-full:before,
		.card.image-full > * {
			grid-column-start: 1;
			grid-row-start: 1;
		}
		.card.image-full > figure img {
			height: 100%;
			object-fit: cover;
		}
		.card.image-full > .card-body {
			position: relative;
			z-index: 20;
			--tw-text-opacity: 1;
			color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
		}
		.card :where(figure:first-child) {
			overflow: hidden;
			border-start-start-radius: inherit;
			border-start-end-radius: inherit;
			border-end-start-radius: unset;
			border-end-end-radius: unset;
		}
		.card :where(figure:last-child) {
			overflow: hidden;
			border-start-start-radius: unset;
			border-start-end-radius: unset;
			border-end-start-radius: inherit;
			border-end-end-radius: inherit;
		}
		.card:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 2px;
		}
		.card.bordered {
			border-width: 1px;
			--tw-border-opacity: 1;
			border-color: var(
				--fallback-b2,
				oklch(var(--b2) / var(--tw-border-opacity))
			);
		}
		.card.compact .card-body {
			padding: 1rem /* 16px */;
			font-size: 0.875rem /* 14px */;
			line-height: 1.25rem /* 20px */;
		}
		.card.image-full :where(figure) {
			overflow: hidden;
			border-radius: inherit;
		}
	}
}

@media (min-width: 375) {
	@supports (-webkit-appearance: none) and (display: flow-root) {
		#best-seller-card {
			width: 11rem;
			height: 100%;
		}
	}
}
</style>
