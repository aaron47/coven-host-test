<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>
<template>
	<nav class="bg-black/50 absolute top-0 w-full md:p-0">
		<div
			class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-evenly sm:justify-between">
			<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img src="~/assets/logo4.png" class="h-8" alt="Flowbite Logo" />
			</a>
			<button
				@click="toggleMenu"
				type="button"
				class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-purple-800 dark:focus:ring-gray-600"
				aria-controls="navbar-hamburger"
				aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15" />
				</svg>
			</button>
			<div class="w-full" :class="{ flex: isMenuOpen, hidden: !isMenuOpen }">
				<ul
					class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 mobile-menu-items-background dark:border-gray-700 w-full">
					<li>
						<NuxtLink
							to="/"
							class="block py-2 px-3 text-white bg-purple-700 rounded dark:bg-purple-600">
							Home
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/store"
							class="block py-2 px-3 text-gray-900 rounded dark:text-gray-400 hover:bg-purple-400 hover:text-white">
							Store
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/history"
							class="block py-2 px-3 text-gray-900 rounded dark:text-gray-400 hover:bg-purple-400 hover:text-white">
							History
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/discord"
							class="block py-2 px-3 text-gray-900 rounded dark:text-gray-400 hover:bg-purple-400 hover:text-white">
							Discord
						</NuxtLink>
					</li>

					<li>
						<NuxtLink
							to="/discord"
							class="block py-2 px-3 text-white rounded hover:bg-purple-400 hover:text-white border-2 border-purple-500/50 hover:bg-purple-500/30">
							Login With Discord
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.mobile-menu-items-background {
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 0.3) 0%,
		rgba(0, 0, 0, 0.9) 100%
	);
}
</style>
