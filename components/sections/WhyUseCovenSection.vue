<script setup lang="ts">
import verified from '~/assets/verified.png';
import check from '~/assets/check.png';
import support from '~/assets/support.png';


const covenFeatures: CovenFeature[] = [
	{
		title: 'Security',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
		icon: verified,
	},
	{
		title: 'Ease Of Use',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
		icon: check,
	},
	{
		title: '24/7 Support',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
		icon: support,
	},
];
</script>

<template>
	<section
		id="why-use-coven-section"
		class="flex flex-col items-center justify-center min-h-screen background-black w-screen sm:p-4">
		<h1 class="md:text-4xl sm:text-xl text-white font-semibold text-center">
			What is coven.lol and why you should use it
		</h1>

		<p class="text-center text-white text-clip p-12">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ab fugit
			corrupti excepturi esse asperiores assumenda aliquam!
		</p>

		<div class="flex md:space-y-0 md:flex-row sm:space-y-4 sm:flex-col md:space-x-16 md:p-12">
			<CovenFeatureCard
				v-for="(covenFeature, index) in covenFeatures"
				:coven-feature="covenFeature"
				:key="index" />
		</div>
	</section>
</template>

<style scoped>
.background-black {
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 0.3) 0%,
		rgba(0, 0, 0, 0.9) 100%
	);
}
</style>
