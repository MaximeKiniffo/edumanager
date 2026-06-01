<template>
  <v-card rounded="lg" :color="color" variant="tonal">
    <h3>{{ title }}</h3>
    <p>{{ value }}</p>
    <i :class="icon" :style="{ color }"></i>
  </v-card>
</template>

<script setup lang="ts">

defineProps<{
  title: string;
  value: number;
  icon: string;
  color: string;
}>();

</script>