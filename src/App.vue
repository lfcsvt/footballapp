<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home', params:{teams: this.standings}}">Home</router-link> |
      <router-link :to="{ name: 'fixtures', params: { matches: this.upcomingMatches }}">Fixtures</router-link>|
      <router-link :to="{ name: 'standings', params: { results: this.standings }}">Standings</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teams: [],
      standings: [],
      upcomingMatches: [],
      scorers: [],
      qualified: [],
      standings1: []
    }
  },
  methods: {
     getData() {
       var urls = ['https://api.football-data.org/v2/competitions/CL/teams',
            'https://api.football-data.org/v2/competitions/CL/matches/',
            'https://api.football-data.org/v2/competitions/CL/matches/?status=SCHEDULED',
            'https://api.football-data.org/v2/competitions/CL/standings',
            'https://api.football-data.org/v2/competitions/CL/',
            'https://api.football-data.org/v2/competitions/CL/scorers/'
           ]
    let responseArray = urls.map((url) => {
        let request = new Request(url, {
            headers: new Headers({
                'X-Auth-Token': 'e629d8e25d5140eea6726726830817e7'
            }),
            method: 'GET'
        });

        return fetch(request).then(response => response.json());

    });

    Promise.all(responseArray).then(allResults => {
        // console.log(allResults)
       this.teams = allResults[0].teams
        this.upcomingMatches = allResults[2].matches
       this.standings = allResults[3].standings
        this.scorers = allResults[5].scorers
        // var UCL = allResults[4].seasons
        // var matches = allResults[1].matches
        // console.log(this.teams)
        // console.log(this.upcomingMatches)
        // console.log(this.standings)
        // console.log(scorers)
    })
},
  getQualified(){
    var teams1 = []
    this.upcomingMatches.forEach(match => {
        this.qualified.push(match.awayTeam, match.homeTeam)
        // console.log(this.qualified)
        return this.qualified
        
    
    })
}
  },
  created(){
    this.getData()
    this.getQualified()
  },
  computed:{
    dataAreIn(){
      return this.teams.length > 0
      return this. standings.length > 0
      return this.upcomingMatches.length > 0
      return this.scorers.length > 0
    
    }
  }
  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
