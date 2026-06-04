<template>
  <v-card rounded="lg" :color="color" variant="tonal">
    <v-card-text class="d-flex align-center justify-space-between">
      <div>
        <div class="text-h3 font-weight-bold">{{ value }}</div>
        <div class="text-subtitle-1">{{ title }}</div>
      </div>
      <v-icon :icon="icon" size="48"/>
    </v-card-text>
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