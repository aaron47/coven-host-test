<script setup lang="ts">
const props = defineProps<{ covenFeature: CovenFeature }>();
</script>

<template>
	<div class="md:max-w-sm sm:max-w-md">
		<div class="flex flex-col text-center items-center space-y-4 text-white">
			<div class="benefits-card-icon">
				<img :src="covenFeature.icon!" :alt="covenFeature.title" width="60px" />
			</div>
			<div class="mx-5 my-3 space-y-2">
				<h3 class="md:text-3xl sm:text-lg">{{ covenFeature.title }}</h3>
				<p class="md:text-xl sm:text-xs">
					{{ covenFeature.description }}
				</p>
			</div>
		</div>
	</div>
</template>
