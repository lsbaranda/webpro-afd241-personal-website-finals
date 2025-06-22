<template>
  <div class="container">

    <header class="flex-item item1">
      <h1>Lyndon Baranda</h1>
    </header>

    <div class="flex-con type1">

        <h3>Profession and Education:</h3>
          <br>Tesla (TSLA)
          <br>BIM Specialist/Electrical Designer
          <br>BIM-CM Building Information Modeling - Construction Management
          <br>Bachelor of Science in Computer Science - BSCS-IT SSE
          
      </div>

      <div class="flex-con type1">

        <div class="flex-con type2">
          <h3>Hobbies & Interests:</h3>
        </div>

        <div class="flex-con type2">
          <div id="clickWelder" class="flex-con type3">
            <img onclick="myWelder()" src="./images/welderlogo.png"></img>
          </div>  

          <div id="clickOffroad" class="flex-con type3">  
            <img onclick="myOffroad()" src="./images/offroadlogo.png"></img>
          </div>  

          <div id="clickHike" class="flex-con type3">                    
            <img onclick="myHike()" src="./images/hikinglogo.png"></img>
          </div>  

          <div id="clickRadio" class="flex-con type3">           
            <img onclick="myRadio()" src="./images/radiologo.png"></img>
          </div> 
        </div>

        <div id="hiapp" class="flex-con type2">
          <div class="flex-con type3">
            <img src="./images/welderlogo.png"></img>
          </div>  

          <div class="flex-con type3">  
            <img src="./images/offroadlogo.png"></img>
          </div>  

          <div class="flex-con type3">                    
            <img src="./images/hikinglogo.png"></img>
          </div>  

          <div class="flex-con type3">           
            <img src="./images/radiologo.png"></img>
          </div> 
        </div> 

      </div>

  </div>
</template>

<script setup>
<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
   getInstruments()
})
</script>

<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>
</script>

<style scoped>
</style>