<script setup lang="ts">
import logo4 from '~/assets/logo4.png';
import logo2 from '~/assets/logo2.png';

const logoToDisplay = ref<string>(logo4);
const termsOfService = ref<string>("Terms Of Service");

const updateLogoToDisplay = () => {
	const width = window.innerWidth;

	if (width < 1024) {
		logoToDisplay.value = logo2;
		termsOfService.value = "TOS";
	} else {
		logoToDisplay.value = logo4;
		termsOfService.value = "Terms Of Service";
	}
};

onMounted(() => {
	updateLogoToDisplay(); // Set initial value when component mounts
	window.addEventListener('resize', updateLogoToDisplay); // Add resize listener
});
</script>
<template>
	<div class="bottom-0 w-screen">
		<nav
			class="bg-black/80 h-20 flex items-center justify-evenly sm:p-8 md:p-0">
			<NuxtLink to="/">
				<div class="flex items-center space-x-5 sm:h-20 sm:w-16">
					<img
						class="md:h-14 md:w-full sm:w-12"
						:src="logoToDisplay"
						alt="Coven Logo" />
				</div>
			</NuxtLink>

			<ul class="flex items-center md:justify-end h-full sm:text-sm md:text-xl">
				<li>
					<NuxtLink
						to="/faq"
						class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100"
						active-class="text-purple-400">
						FAQ
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/terms-of-service"
						class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100">
						{{ termsOfService }}
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/disclaimer"
						class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100">
						Disclaimer
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/contact"
						class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100">
						Contact
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div
			class="bg-black/80 text-white text-center text-xs py-2 font-['Poppins']">
			Copyright ©2023 COVEN.LOL LIMITED. | All Rights Reserved.
		</div>
	</div>
</template>
