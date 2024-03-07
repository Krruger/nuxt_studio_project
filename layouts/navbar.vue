<template>
  <q-layout view="hHh lpR lFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              href="/"
            />
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-btn flat rounded class="q-mr-xs" href="about">O mnie</q-btn>
        <q-btn flat rounded class="q-mr-xs" href="wpisy">Wpisy</q-btn>
        <q-btn flat rounded class="q-mr-xs" href="kontakt">Kontakt</q-btn>
        <q-btn flat rounded class="q-mr-xs" href="projekty">Projekty</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <NuxtPage />
      <!-- <pre>
    {{ contentQuery }}
  </pre
      > -->
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
const leftDrawerOpen = ref(false);
const contentQuery = ref();
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const { data } = (contentQuery.value = await useAsyncData("about", () =>
  queryContent("/").find()
));
</script>
