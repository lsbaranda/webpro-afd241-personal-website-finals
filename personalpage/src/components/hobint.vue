<template>
        <div id="lightDiv" class="flex-con type3" v-for="(img, index) in logos">
          <div v-show="lightOn"></div>
          <img v-bind:src="url" v-on:click=" lightOn =! lightOn ">
        </div>
</template>

<script>
  import { ref } from 'vue'
    const logos = ref([
         {src: './images/offroadlogo.png'},
         {src: './images/hikinglogo.png'}
       ])

</script>

<style>
    #lightDiv {
      position: relative;
      width: 150px;
      height: 150px;
    }

    #lightDiv > img {
      position: relative;
      width: 100%;
      height: 100%;
    }

    #lightDiv > div {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      border-radius: 50%;
      background-color: yellow;
    }
  </style>