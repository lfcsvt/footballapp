<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/fixtures">Fixtures</router-link>
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
        console.log(allResults)
        var teams = allResults[0].teams
        var matches = allResults[1].matches
        var upcomingMatches = allResults[2].matches
        var standings = allResults[3].standings
        var scorers = allResults[5].scorers
        var UCL = allResults[4].seasons
        console.log(teams)
        console.log(matches)
        console.log(upcomingMatches)
        console.log(standings)
        console.log(UCL)
        console.log(scorers)
    })
}
  },
  created(){
    this.getData()
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
