<template>
  <div
    v-for="d in data"
    class="q-pa-md row items-start q-gutter-md flex justify-center w-11/12"
  >
    <q-card flat bordered class="my-card w-7/12 rounded-xl">
      <q-card-section>
        <div class="text-4xl text-gray-900 dark:text-black font-bold">
          {{ d.title }}
        </div>
      </q-card-section>
      <div class="relative mx-auto rounded-3xl overflow-hidden">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          class="max-h-40"
          href="/about"
        />
      </div>
      <q-card-section
        class="q-pt-none line-clamp-3 m-1 text-justify text-base subpixel-antialiased md:font-serif"
        style="max-height: 70px"
      >
        <!-- {{ data[0].body.children }} -->
        {{ d.body.children[1].children[0].value }}
      </q-card-section>

      <q-separator inset />

      <q-card-actions class="flex justify-between">
        <div class="text-caption p-2">{{ data[0].date }}</div>

        <div class="text-caption p-2">{{ page }}</div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("post", () => queryContent("posts").find());
</script>

<style lang="scss" scoped></style>
