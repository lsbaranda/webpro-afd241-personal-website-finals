<template>
    <div>
        <div id="lightDiv" v-for="(img, index) in logos">
            <img v-bind:src="url" v-on:click=" lightOn =! lightOn ">
        </div>
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
    #app {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 80%;
      border: dashed black 1px;
    }
    #app > div {
      display: block;
      flex-basis: 80px;
      aspect-ratio: 1;
      margin: 5px;
    }
    div > img {
      box-sizing: border-box;
      width: 100%;
      padding: 3px;
      border: solid white 4px;
      border-radius: 5px;
    }
    img:hover {
      cursor: pointer;
    }
    .selClass {
      border: solid brown 4px;
      background-color: lightpink;
    }
  </style>