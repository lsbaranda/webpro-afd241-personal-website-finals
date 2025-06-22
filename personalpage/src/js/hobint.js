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