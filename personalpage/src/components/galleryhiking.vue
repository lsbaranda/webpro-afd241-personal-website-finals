<template>
    <div class="gallery-wrapper">
        <div class="collage">
            <div
        v-for="(photo, index) in photos"
        :key="index"
        class="collage-item"
        :style="getItemStyle(index)"
      >
        <img :src="photo.src" :alt="'Photo ' + (index + 1)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const photos = ref([
  { src: '/images/hike/Hike01.jpg' },
  { src: '/images/hike/Hike02.jpg' },
  { src: '/images/hike/Hike03.jpg' },
  { src: '/images/hike/Hike04.jpg' },
  { src: '/images/hike/Hike05.jpg' }
])

function getItemStyle(index) {
  const styles = [
    { flex: '1 1 10%', height: '400px' },
    { flex: '1 1 60%', height: '400px' },
    { flex: '1 1 40%', height: '250px' },
    { flex: '1 1 30%', height: '250px' },
    { flex: '1 1 30%', height: '200px' }
  ]
  return styles[index] || { flex: '1 1 45%', height: '150px' }
}
</script>