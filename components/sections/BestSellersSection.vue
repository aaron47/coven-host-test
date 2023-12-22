<script setup lang="ts">
const bestSellers: BestSeller[] = [
	{
		name: 'LoL Winterblessed 2023 Pass',
		image:
			'https://d392eissrffsyf.cloudfront.net/storeImages/bundles/69900896.png',
		price: 990,
	},
  {
    name: 'Winterblessed Camille',
    image:
        'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/164/164031.jpg',
    price: 810,
  },
	{
		name: 'Remix Rumble Pass+: Act 1',
		image:
			'https://d392eissrffsyf.cloudfront.net/storeImages/bundles/33300205.png',
		price: 780,
	}
	,
];
</script>

<template>
	<section
		id="coven-best-sellers-section"
		class="flex flex-col items-center justify-center min-h-screen space-y-8 w-screen p-12">
		<h1 class="text-4xl text-white font-semibold">Our Best Sellers</h1>

		<div class="flex sm:justify-center sm:items-center sm:flex-col lg:flex-row md:flex-col md:space-x-0 sm:space-x-0 md:space-y-4 sm:space-y-12 lg:space-y-0 lg:space-x-12">
			<BestSellerCard
				v-for="(bestSeller, index) in bestSellers"
				:bestSeller="bestSeller"
				:key="index" />
		</div>
	</section>
</template>

<style scoped>
#coven-best-sellers-section {
	background: #000000
		radial-gradient(circle at center, #1e1138 0%, hsl(0, 12%, 8%) 100%);
}
</style>
