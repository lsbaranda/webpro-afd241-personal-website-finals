<template>
  <div class="intro">
    <h1>Welcome to My Introduction Page</h1>
    <p>Hi! I'm Lyndon, and this is my intro for WEBPROG AFD241.</p>
    <ul>
      <li>📍 Location: Hayward, CA</li>
      <li>🎓 Course: Web Programming</li>
      <li>🎯 Interests: Scale models, RC cars, and coding</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IntroPage',
};
</script>

<style scoped>
.intro {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
}
.intro h1 {
  color: #333;
}
.intro ul {
  list-style: none;
  padding: 0;
}
.intro li {
  margin: 0.5rem 0;
}
</style>