<template>
  <div>
    <div class="flex-con type4">
    <span class="title">Guests:</span>
    </div>
    
    <ul>
      <li v-for="guestbooks in guestbooks" :key="guestbooks.id">
        <div class="flex-con type4">
        <p> Visitor:  {{ guestbooks.name }}  Reason for visiting:  {{ guestbooks.reason }}</p>
        </div>
      </li>
    </ul>
    

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'


const guestbooks = ref([])

async function getGuestbook() {
  const { data, error } = await supabase.from('guestbooks').select('*')
  if (error) {
    console.error('Error fetching guestbook:', error)
  } else {
    guestbooks.value = data
  }
}

onMounted(() => {
  getGuestbook()
})
</script>

<style scoped>
.comment-section {
  color: #004c4c;
  margin-top: 1em;
  border-top: 1px solid #ddd;
  padding-top: 1em;
}
input {
  padding: 0.5em;
  margin-right: 0.5em;
  width: 70%;
}
button {
  padding: 0.5em;
}
</style>