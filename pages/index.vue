<template>
  <div class="ml-20">
    <div>
      <NuxtLayout :name="post"></NuxtLayout>
    </div>
    <div class="flex justify-center w-10/12 ml-14">
      <div class="grid grid-cols-3 gap-x-10 gap-y-1 size-3/5">
        <NuxtLayout :name="cardLayout" v-for="id in 3" :key="id"></NuxtLayout>
      </div>
    </div>
  </div>
</template>

<script setup>
const cardLayout = "cardlayout";
const post = "post";
</script>

<style lang="scss" scoped></style>
