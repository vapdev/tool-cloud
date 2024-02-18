<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
</script>

<template>
  <Card class="w-[700px]">
    <CardHeader>
      <CardTitle>Conversor de unidades e medidas</CardTitle>
      <CardDescription>Selecione a categoria e as unidades</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div class="flex w-full mb-4">
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Comprimento" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="comprimento"> Comprimento </SelectItem>
              <SelectItem value="massa"> Massa </SelectItem>
              <SelectItem value="temperatura"> Temperatura </SelectItem>
              <SelectItem value="tempo"> Tempo </SelectItem>
              <SelectItem value="volume"> Volume </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="flex gap-4">
          <div class="w-full">
            <Label for="name">Name</Label>
            <Input
              id="name"
              class="h-16 focus-visible:ring-0"
              placeholder="206,265"
            />
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Grau" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="nuxt"> Nuxt.js </SelectItem>
                <SelectItem value="next"> Next.js </SelectItem>
                <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                <SelectItem value="astro"> Astro </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="w-full">
            <Label for="name">Name</Label>
            <Input
              id="name"
              class="h-16 focus-visible:ring-0"
              placeholder="206,265"
            />
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Grau" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="nuxt"> Nuxt.js </SelectItem>
                <SelectItem value="next"> Next.js </SelectItem>
                <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                <SelectItem value="astro"> Astro </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
</template>
