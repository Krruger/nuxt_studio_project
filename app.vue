<template>
  <div>
    <!-- <img
      src="assets/pattern-randomized.svg?raw=true"
      alt="Preview"
      title="Desktop Preview"
      style="
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        z-index: -1;
      "
    /> -->
    <NuxtLayout :name="navbar"> </NuxtLayout>
      <NuxtLayout :name="footer" />
  </div>
</template>

<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const navbar = "navbar";
const footer = "footer";
</script>
