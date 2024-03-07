<template>
  <div class="q-pa-md row items-start q-gutter-md rounded-xl">
    <q-card
      v-ripple
      class="my-box rounded-xl cursor-pointer q-hoverable"
      flat
      bordered
      href="/about"
      @click="router.push({ path: '/about' })"
    >
      <span class="q-focus-helper shadow-up-12"></span>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        class="min-h-2"
        href="/about"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </div>
      </q-card-section>

      <q-card-actions>
        <div class="text-caption p-2">DATA</div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
const router = useRouter();
</script>
<style></style>
