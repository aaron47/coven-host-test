<template>
	<p class="flex sm:flex-col lg:flex-row sm:space-y-4 items-center place-content-center md:text-lg sm:text-base w-full">
		Rated 4.6 <img class="w-8 h-8 p-0 mx-2" src="~/assets/purple-star.png" alt="Purple Star Trust Pilot Rating"> out of
		5 based on&nbsp;
		<a href="https://www.trustpilot.com/review/coven.lol" target="_blank" class="btn text-black py-2 px-3 rounded-full md:text-lg mx-2 sm:text-base">
			&#9733; Trustpilot &rarr;
		</a>
	</p>
</template>

<style scoped>
.btn {
	background: linear-gradient(
		90deg,
		#c4acec 10%,
		#e7a6ec 40%,
		#e8aaef 60%,
		#c4a7e7 90%
	);
}

.btn:hover {
	transform: scale(1.1);
	transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
