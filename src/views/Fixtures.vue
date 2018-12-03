<template>
  <div class="about">
    <div class="matches">
        <div class="matchBox" v-for="match in matches" >
          <h5>{{match.group}}</h5>
          <div class="teams">
            <p>{{match.homeTeam.name}}</p> 
            <p>X</p>
            <p>{{match.awayTeam.name}}</p> 
        </div>
          <p>{{match.utcDate}}</p>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      // matches: this.$parent.upcomingMatches
       matches: this.$route.params.matches
    }
  },
  created(){
    console.log()
  }
}
</script>
<style scoped>
.about {
background-size: contain;
overflow: auto;
height: 750px;
width: 98%;
}
.matches {
  overflow: auto;
  margin-bottom: 25px;
}
h1,h2,h3,h4,h5, p {
  color: white;
}
.matchBox {
 background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%);
 width: 60%;
 height: 150px;
 margin: auto;
 margin-bottom: 10px;
}

.teams {
  display: flex;
  justify-content: space-around;

}

</style>

