<template>
  <div class="container">
    <header>
      <h2>Lyndon Baranda</h2>
      <p>Hayward California</p>
    </header>

    <main>
      <section class="flex-con type1">
        <h3>Profession and Education:</h3>
        <p>Tesla (TSLA)</p>
        <p>BIM Specialist/Electrical Designer</p>
        <p>BIM-CM Building Information Modeling - Construction Management</p>
        <p>Bachelor of Science in Computer Science - BSCS-IT SSE</p>
      </section>

      <section class="flex-con type1">
        <div class="flex-con type2">
          <h3>Hobbies & Interests:</h3>
        </div>
        <div class="flex-con type2">
          <div class="flex-con type3" @click="myWelder">
            <img src="../src/assets/welderlogo.png" alt="Welder">
          </div>
          <div class="flex-con type3" @click="myOffroad">
            <img src="../src/assets/offroadlogo.png" alt="Offroad">
          </div>
          <div class="flex-con type3" @click="myHike">
            <img src="../src/assets/hikinglogo.png" alt="Hiking">
          </div>
          <div class="flex-con type3" @click="myRadio">
            <img src="../src/assets/radiologo.png" alt="Radio">
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>Picture Gallery</p>
      <div id="imageApp">
        <figure v-for="x in manyWelds" :key="x.url">
          <img :src="x.url" height="256px" />
        </figure>
      </div>
    </footer>

    <div>References:</div>
  </div>


</template>

<script>
export default {
  name: 'IntroPage',
  data() {
    return {
      manyWelds: [
        { url: 'src/assets/weld1.jpg' },
        { url: 'src/assets/weld2.jpg' },
        // Add more image objects as needed
      ]
    };
  },
  methods: {
    myWelder() {
      console.log('Welder clicked');
    },
    myOffroad() {
      console.log('Offroad clicked');
    },
    myHike() {
      console.log('Hiking clicked');
    },
    myRadio() {
      console.log('Radio clicked');
    }
  }
};
</script>

<style scoped>
@import 'css/style.css';

  template {
    background-image:URL('../assets/transparent BG.png');
    background-repeat: no-repeat;
    background-size: 1920px;
    font-family: Arial;
  }

</style>
