<template>
  <div class="fixtures">
    <div class="matches">
        <div class="matchBox" v-for="(match, index) in matches" :key='index'>
          <Match :matchFromFix="match" :allTeams="allTeams" :extraInfo="extraInfo"/>
          <!-- <h5>{{match.group}}</h5>
          <div class="teams">
            <p>{{match.homeTeam.name}}</p>
            <p>X</p>
            <p>{{match.awayTeam.name}}</p> 
          </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Match from "@/components/Match";
export default {
  name: 'fixtures',
  components: {
    Match
  },
  data(){
    return {
       matches: this.$route.params.matches,
       allTeams: this.$parent.teams,
       qualified: [],
       extraInfo: [
                {
id: 851,
name: 'Club Brugge KV',
crestUrl: "https://s.glbimg.com/es/sde/f/original/2011/08/11/Brugge65.png" },

{id: 7283,
name: 'FK Crvena Zvezda',
crestUrl: "https://s.glbimg.com/es/sde/f/organizacoes/2012/04/27/Estrela_Vermelha65.png"},
{id: 1899,
name: 'PAE AEK',
crestUrl: "https://s.glbimg.com/es/sde/f/organizacoes/2017/10/14/AEKAtenas_65.png"},
{id: 1871,
name: 'BSC Young Boys',
crestUrl:"https://s.glbimg.com/es/sde/f/organizacoes/2012/04/27/youngboys65.png" },
{id: 1887,
name: 'FK Shakhtar Donetsk',
crestUrl: "https://s.glbimg.com/es/sde/f/equipes/2018/03/12/shakhtar-donetsk.svg"},
{id: 1881,
name: 'FC Viktoria Plzeň',
crestUrl: "https://s.glbimg.com/es/sde/f/original/2011/08/24/Viktoria_65x65.png"},
{id: 1900,
name: 'PFC CSKA Moskva',
crestUrl: "https://s.glbimg.com/es/sde/f/organizacoes/2017/12/03/CSKA-65.png"},
{id: 5455,
name: 'FK Lokomotiv Moskva',
crestUrl: "https://s.glbimg.com/es/sde/f/organizacoes/2012/04/27/lokomotivmoscou65.png"},
{id: 1903,
name: 'Sport Lisboa e Benfica',
crestUrl: "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/benfica.svg"}
            ]
    }
  },
  created(){
    this.getQualified()
    this.getQTeams() 
    // console.log(this.matches) 
    // console.log(this.allTeams) 
  },
  methods: {
      getQualified(){
    this.matches.forEach(match => {
        this.qualified.push(match.awayTeam, match.homeTeam)
    })
     return this.qualified
},
getQTeams(){
  this.qualified.forEach(qTeam => {
          return qTeam
  })
}
  },
  computed: {
    getTeamInfo(){
        this.qTeams.forEach(team => {
            return team

    
        })
    }
  }
}
</script>
<style scoped>
.fixtures {
background-size: contain;
overflow: auto;
height: 750px;
width: 98%;
margin-top: 5px;
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
 width: 90%;
 height: 220px;
 margin: auto;
 margin-bottom: 10px;
}

.teams {
  display: flex;
  justify-content: space-around;

}

</style>

