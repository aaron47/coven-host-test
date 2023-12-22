<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import TrustpilotRating from '../TrustpilotRating.vue';

const carousel_items: UserReview[] = [
	{
		userName: 'nami',
		userReview:
			'Website is trustworthy, genuine and simple to use. Everything went smoothly and the purchase was quick and hassle free. The owners of the site are very helpful and quick to answer any queries or concerns that you may have about the store. The only information I had to give about my account was the ingame name which is publicly available anyways. If you want a cheaper alternative way to get your favourite skins, then this is the best place to get them. ',
		userImage:
			'https://user-images.trustpilot.com/656776204864160012ebe3ab/73x73.png',
		starCount: 5,
	},
	{
		userName: 'Tim',
		userReview:
			"I don't understand the 1-star reviews, to be honest; everything went smoothly and very, very fast. First, I was unsure if this was really not a scam, but after talking to the owner via ticket, it was clearly not a scam. I received my ordered product almost instantly and never had to give them any private information about the account besides the account's ingame name. I will definitely use this service again, whenever Riot decides to release a banger skin set again.",
		userImage: '',
		starCount: 5,
	},
	{
		userName: 'cat',
		userReview:
			"My experience with this site was great. It's trustworthy, user-friendly, and the purchase process was quick and easy. The owners are responsive to any queries. For a cheap way to get your favorite skins, this site is the best choice :D",
		userImage:
			'https://user-images.trustpilot.com/6438889050fd3e001298b3e6/73x73.png',
		starCount: 5,
	},
	{
		userName: 'max',
		userReview:
			'super legit and quick gifting service. highly recommend to anyone that plays league.',
		userImage:
			'https://user-images.trustpilot.com/614687f969847500121e09d6/73x73.png',
		starCount: 5,
	},
];

const itemsToShow = ref<number>(3);

const updateItemsToShow = () => {
	const width = window.innerWidth;

	if (width < 1024) {
		itemsToShow.value = 1;
	} else {
		itemsToShow.value = 3;
	}
};

onMounted(() => {
	updateItemsToShow(); // Set initial value when component mounts
	window.addEventListener('resize', updateItemsToShow); // Add resize listener
});
</script>

<template>
	<section
		id="coven-user-reviews-carousel-section"
		class="flex flex-col justify-center w-screen min-h-screen md:space-y-8 sm:space-y-6">
		<div class="text-center">
			<h1 class="text-4xl text-white font-semibold">Our reviews</h1>
		</div>

		<span class="text-center text-2xl text-white">
			See what our customers are saying about coven.lol
		</span>
		<TrustpilotRating />

		<Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500">
			<Slide v-for="(item, index) in carousel_items" :key="index">
				<ReviewCard :userReview="item" />
			</Slide>

			<template #addons>
				<Pagination />
				<Navigation />
			</template>
		</Carousel>
	</section>
</template>

<style scoped>
#coven-user-reviews-carousel-section {
	background: #000000
		radial-gradient(circle at center, #1e1138 0%, hsl(0, 12%, 8%) 100%);
}
</style>
