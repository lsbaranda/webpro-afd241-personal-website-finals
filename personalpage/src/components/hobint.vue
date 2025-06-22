<template>
    <div class="app">
        <div v-for="(img, index) in images">
            <img v-bind:src="img.url" v-on:click="select(index)" v-bind:class="{selClass: img.sel}">
        </div>
    </div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const app = Vue.createApp({
    data() {
     return {
       images: [
         {url: './images/welderlogo.png', sel: false},
         {url: './images/offroadlogo.png', sel: false},
         {url: './images/hikinglogo.png', sel: false},
         {url: './images/radiologo.png', sel: false}
       ]
     }
    },
    methods: {
      select(number) {
        this.images[number].sel = !this.images[number].sel
      }
    }
   })
app.mount('#app')
</script>