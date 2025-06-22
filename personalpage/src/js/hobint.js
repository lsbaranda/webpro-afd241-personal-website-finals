const hobintApp = Vue.createApp({
    data() {
     return {
       images: [
         {name: 'Fabrication', url: './images/welderlogo.png', sel: false},
         {name: 'OffRoad', url: './images/offroadlogo.png', sel: false},
         {name: 'Hike', url: './images/hikinglogo.png', sel: false},
         {name: 'Radio', url: './images/radiologo.png', sel: false}
       ]
     }
    }
   })
   hobintApp.mount('#hobintApp')