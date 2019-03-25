<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  #app{
    width: 100%;
    height:100%;
    background-image: url("./assets/bg.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
  }

</style>
