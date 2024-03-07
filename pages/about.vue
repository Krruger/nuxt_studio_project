<template>
  <div class="p-4">
    <h1 class="text-4xl text-gray-900 dark:text-black font-bold">
      {{ title }}
    </h1>
    <p class="py-5 tracking-tight text-gray-500 md:text-lg dark:text-black">
      {{ description }}
    </p>
    <nuxt-content :document="about" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const contentQuery = ref();
const title = ref();
const about = ref("about");
const description = ref();
onMounted(async () => {
  contentQuery.value = await useAsyncData("about", () =>
    queryContent("/").find()
  );
  await console.log(contentQuery.value["data"][0]["title"]);
  title.value = contentQuery.value["data"][0]["title"];
  description.value = contentQuery.value["data"][0]["description"];
});
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
