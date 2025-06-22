<template>
    <div class="hobintApp">
        <div v-for="(img, index) in images">
            <img v-bind:src="img.url" v-on:click="select(index)" v-bind:class="{selClass: img.sel}">
        </div>
    </div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const hobintApp = Vue.createApp({
    data() {
     return {
       images: [
         {name: 'Fabrication', url: '../src/images/welderlogo.png', sel: false},
         {name: 'OffRoad', url: '../src/images/offroadlogo.png', sel: false},
         {name: 'Hike', url: '../src/images/hikinglogo.png', sel: false},
         {name: 'Radio', url: '../src/images/radiologo.png', sel: false}
       ]
     }
    }
   })
   hobintApp.mount('#hobintApp')
</script>