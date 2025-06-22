<template>
          <div id="lightDiv" class="flex-con type3">
            <div v-show="lightOn"></div>  
            <img src="./images/offroadlogo.png" v-on:click=" lightOn =! lightOn "></img>
          </div>  

          <div id="lightDiv" class="flex-con type3">
            <div v-show="lightOn"></div>                   
            <img src="./images/hikinglogo.png" v-on:click=" lightOn =! lightOn "></img>
          </div>  
</template>

<script setup>
  const app = ref({
    data() {
      return {
        lightOn: false
      }
    }
  })
</script>