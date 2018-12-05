<template>
  <div class="home">
    <Header msg="Meet the Best"/>
    <Header msg2="Experience greatness"/>
    <div class="teams">
      <div class="team">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  data(){
    return {
      teams: this.$route.params.teams
    }
  },
  methods: {
  
  },
  created(){
   
  }
}
</script>
<style>
body {
background-image: url(../assets/ucl4.jpg);
background-size: cover;
background-repeat: no-repeat;
}
p {
  color: white;
}
.home {
  background-size: contain;
overflow: auto;
height: 750px;
width: 98%;
}

.teams {

}

img{
  height: 25px;
  width: 25px;
}
</style>

