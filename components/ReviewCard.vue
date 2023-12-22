<script setup lang="ts">
import placeholderImage from '~/assets/pfp_placeholder.png';
const props = defineProps<{ userReview: UserReview }>();
</script>

<template>
	<div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#101010] p-4">
		<div class="flex flex-col items-center jusitfy-center">
			<div class="flex items-center space-x-36">
				<div class="flex items-center">
					<img
						:src="userReview.userImage || placeholderImage"
						:alt="userReview.userName"
						class="w-12 h-12 rounded-full mr-2" />

					<h3 class="text-purple-700 font-bold md:text-xl sm:text-base">
						{{ userReview.userName }}
					</h3>
				</div>

				<div>
					<div class="flex">
					<template v-for="i in userReview.starCount">
							<svg
								class="text-purple-500 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.049 2.927c.396-1.14 1.956-1.14 2.352 0l1.11 3.196a1 1 0 0 0 .95.691h3.367c1.14 0 1.611 1.463.777 2.212l-2.727 2.073a1 1 0 0 0-.36.885l.64 3.639c.14 1.095-1.056 1.923-2.012 1.413L10 13.011l-3.084 1.915c-.956.51-2.152-.318-2.012-1.413l.64-3.639a1 1 0 0 0-.36-.885L3.457 9.026c-.834-.749-.363-2.212.777-2.212h3.367a1 1 0 0 0 .95-.691l1.11-3.196z" />
							</svg>
						</template>
					</div>
				</div>
			</div>

			<hr class="border border-gray-400/25 my-4 w-full" />

			<p class="text-white md:text-base mb-4 sm:text-sm">
				{{ userReview.userReview }}
			</p>
		</div>
	</div>
</template>
