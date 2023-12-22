<!-- <script setup lang="ts">

const state = reactive<{
  sid?: string
}>
({
  sid: undefined
});

onMounted(async () => {
  state.sid = "i was finally called...";

});

</script>

<template>
  <div>
    <template v-if="state.sid">
      <NuxtPage />
    </template>
    <template v-else>
      not logged in
    </template>
  </div>
</template> -->

<template>
	<Navbar />
	<NuxtPage />
  <Footer />
</template>
