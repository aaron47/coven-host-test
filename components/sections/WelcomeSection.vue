<template>
	<section
		id="coven-welcome-section"
		class="flex flex-col items-center justify-center min-h-screen w-screen sm:p-6">
		<div class="text-center">
			<h1
				class="md:text-4xl font-bold text-white uppercase tracking-wide sm:text-lg sm:font-bold md:font-normal">
				Elevate your Collection with Unbeatable Discounts.
			</h1>
			<h3 class="mt-4 md:text-2xl sm:text-sm text-white">
				High quality and easy to use shop for summoners.
			</h3>
			<button
				class="mt-6 bg-black text-white font-semibold py-2 px-4 rounded-full border-2 border-purple-500/50 shadow-md hover:bg-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 transition-all ease-in delay-50">
				Log in with Discord
			</button>
		</div>
	</section>
</template>

<style scoped>
#coven-welcome-section {
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.7),
			rgba(76, 0, 153, 0.4)
		),
		url('~/assets/bg_cropped.webp') no-repeat center center;
	background-size: cover;
	background-attachment: scroll; /* Change from 'fixed' to 'scroll' */
	min-height: 100vh; /* Adjust based on your layout needs */
}

/* Optional: Responsive adjustments for smaller screens */
@media (max-width: 767px) {
	#coven-welcome-section {
		background-size: contain; /* Adjust size to better fit mobile screens */
		min-height: 100vh; /* Adjust minimum height for mobile screens */
	}
}
</style>
