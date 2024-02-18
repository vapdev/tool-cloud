<script setup lang="ts">
import { sidebarGroups } from "./sidebarGroups"
</script>

<template>
  <div :class="'pb-12'">
    <div class="space-y-4 py-4">
      <div
        v-for="(group, index) in sidebarGroups"
        :key="index"
        class="px-3 py-2"
      >
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
          {{ group.title }}
        </h2>
        <div class="space-y-1">
          <Button
            v-for="(item, index) in group.items"
            :key="index"
            variant="ghost"
            class="w-full justify-start"
          >
            <!-- ... -->
            {{ item }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
