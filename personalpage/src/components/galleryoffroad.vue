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
  { src: '/images/offroad/Offroad01.jpg' },
  { src: '/images/offroad/Offroad02.jpg' },
  { src: '/images/offroad/Offroad03.jpg' },
  { src: '/images/offroad/Offroad04.jpg' },
  { src: '/images/offroad/Offroad05.jpg' }
])

function getItemStyle(index) {
  const styles = [
    { flex: '1 1 45%', height: '150px' },
    { flex: '1 1 30%', height: '150px' },
    { flex: '1 1 40%', height: '150px' },
    { flex: '1 1 30%', height: '150px' },
    { flex: '1 1 30%', height: '185px' }
  ]
  return styles[index] || { flex: '1 1 45%', height: '150px' }
}
</script>