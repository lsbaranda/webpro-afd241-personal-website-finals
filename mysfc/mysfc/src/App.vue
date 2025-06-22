<script>
    const app = Vue.createApp({
      data() {
        return {
          message: "Hello World!"
        }
      }
    })

   app.mount('#app')
</script>

<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<style></style>