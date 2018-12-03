<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header msg="Meet the Best"/>
    <Header msg2="Experience greatness"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
<style>
body {
background-image: url(../assets/ucl4.jpg);
background-size: cover;
background-repeat: no-repeat;
}
</style>

