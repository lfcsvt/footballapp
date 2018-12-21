<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h5>{{ msg2 }}</h5>
  
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    msg2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1,h2,h3,h4,h5 {
  color: white;
  text-align: center;
}
</style>
