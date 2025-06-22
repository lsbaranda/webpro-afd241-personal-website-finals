<template>
  <div class="container">

    <header class="flex-con type0">
      <h1>Lyndon Baranda</h1>
      <p>Hayward, California</p>
    </header>

    <div class="flex-con type1">
      <div>
        <h3>Profession and Education:</h3>
      </div>
      <div>
        <br>Tesla (TSLA)
        <br>BIM Specialist/Electrical Designer
        <br>BIM-CM Building Information Modeling - Construction Management
        <br>Bachelor of Science in Computer Science - BSCS-IT SSE
      </div>
          

      <div class="flex-con type1">
        <h3>Hobbies & Interests:</h3>
        <div class="flex-con type2">
          <galleryhiking/>
        </div>
      </div>
          

    </div>
    <footer class="flex-con type1">
      <div class="flex-con type2">
        <guestform/>
      </div>
      <div class="flex-con type2">
        <guestlog/>
      </div>
    </footer>
    <div>
      <ul>
       <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
      </ul>
    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabaseClient'
const instruments = ref([])
async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}
onMounted(() => {
   getInstruments()
})
</script>
