<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>
<template>
	<nav
		class="bg-black bg-opacity-30 h-20 md:flex items-center md:justify-evenly sm:justify-between absolute top-0 w-screen sm:p-6 md:p-0 sm:hidden">
		<NuxtLink to="/">
			<div class="flex items-center space-x-5">
				<img
					class="md:h-14 md:w-full sm:h-10"
					src="~/assets/logo4.png"
					alt="Coven Logo" />
			</div>
		</NuxtLink>

		<button @click="toggleMenu" class="md:hidden sm:visible">
			<Icon name="ic:baseline-menu" />
		</button>

		<ul
			class="sm:hidden md:flex sm:flex-col md:flex-row md:visible items-center justify-end h-full text-sm md:text-lg">
			<li>
				<NuxtLink
					to="/"
					class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100"
					active-class="text-purple-400">
					Home
				</NuxtLink>
			</li>
			<li>
				<NuxtLink
					to="/store"
					class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100">
					Store
				</NuxtLink>
			</li>

			<li>
				<NuxtLink
					to="/history"
					class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100">
					History
				</NuxtLink>
			</li>
			<li>
				<NuxtLink
					to="/discord"
					class="text-white px-4 hover:text-purple-400 transition ease-in-out delay-100">
					Discord
				</NuxtLink>
			</li>
		</ul>

		<button
			class="bg-black text-white font-semibold py-2 px-4 md:text-lg sm:text-xs rounded-full border-2 border-purple-500/50 shadow-md hover:bg-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 transition-all ease-in delay-50 sm:hidden md:flex">
			Login With Discord
		</button>
	</nav>

	<MobileNavMenu class="sm:block md:hidden"/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Poppins:wght@300&display=swap');

a {
	font-family: 'Poppins', sans-serif;
}

button {
	font-family: 'Poppins', sans-serif;
}

h1 {
	font-family: 'Poppins', sans-serif;
}
</style>
