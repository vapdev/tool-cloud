<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { SunIcon, MoonIcon } from "@radix-icons/vue"
import { menuGroups } from "./data/menuGroups"

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle("dark")
}
</script>

<template>
  <div class="flex justify-between">
    <Menubar class="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu v-for="(group, index) in menuGroups" :key="index">
        <MenubarTrigger class="font-bold"> {{ group.trigger }} </MenubarTrigger>
        <MenubarContent>
          <template v-for="(item, i) in group.content" :key="i">
            <MenubarItem v-if="item.type === 'item'">
              {{ item.label }}
            </MenubarItem>
            <MenubarSeparator v-else />
          </template>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <div class="flex items-center space-x-2">
      <Button variant="ghost" @click="toggleDarkMode">
        <template v-if="darkMode">
          <SunIcon class="h-5 w-5" />
        </template>
        <template v-if="!darkMode">
          <MoonIcon class="h-5 w-5" />
        </template>
      </Button>
    </div>
  </div>
</template>
