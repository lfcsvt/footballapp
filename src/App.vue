<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="faded">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <a href=""><router-link class="nav-link" :to="{ name: 'chatRoom', params: {}}">ChatRoom</router-link></a>
  <b-navbar-brand href="/"><img src="./assets/navlogo.jpg" alt=""></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item><router-link class="nav-link" :to="{name: 'home', params:{teams: this.standings}}">Home</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" :to="{ name: 'fixtures', params: { matches: this.upcomingMatches, extraTeamInfo: this.extraTeamInfo}}">Fixtures</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" :to="{ name: 'standings', params: { results: this.standings , extraInfo: this.extraTeamInfo}}">Standings</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" :to="{ name: 'scorers', params: { scorers: this.scorers, allTeams: this.teams, nextMatches: this.allMatches, extraInfo: this.extraTeamInfo}}">Scorers</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" :to="{ name: 'teams', params: { allTeams: this.teams, nextMatches: this.allMatches, extraInfo: this.extraTeamInfo }}">Teams</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-link" :to="{ name: 'history', params: { history: this.history, extraInfo: this.extraTeamInfo}}">History</router-link></b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <router-view />
  </div>
</template>
<script>
import Chat from '@/components/Chat.vue'
  import {
    Slide
  } from 'vue-burger-menu'
  export default {
    components: {
      Slide, 
      Chat
    },
    data() {
      return {
        teams: [],
        standings: [],
        upcomingMatches: [],
        scorers: [],
        qualified: [],
        allMatches: [],
        champions: [],
        extraTeamInfo: [],
        history: [],
      }
    },
    methods: {
      getData() {
        var urls = ['https://api.football-data.org/v2/competitions/CL/teams',
          'https://api.football-data.org/v2/competitions/CL/matches/',
          'https://api.football-data.org/v2/competitions/CL/matches/?status=SCHEDULED',
          'https://api.football-data.org/v2/competitions/CL/standings',
          'https://api.football-data.org/v2/competitions/CL/',
          'https://api.football-data.org/v2/competitions/CL/scorers/',
          'https://api.jsonbin.io/b/5c0e4d1633da576e58f7ab3c',
          'https://api.jsonbin.io/b/5c0e75f733da576e58f7c0ee'
          
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
          this.teams = allResults[0].teams
          this.upcomingMatches = allResults[2].matches
          this.standings = allResults[3].standings
          this.scorers = allResults[5].scorers
          this.allMatches = allResults[1].matches
          this.extraTeamInfo = allResults[6]
          this.history = allResults[7]
          console.log(this.teams)
          console.log(this.upcomingMatches)
          console.log(this.standings)
          console.log( this.scorers)
          console.log(this.allMatches)
          console.log(this.allMatches)
          console.log(this.extraTeamInfo)
          console.log(this.history)
        })
      },
      getQualified() {
        var teams1 = []
        this.allMatches.forEach(match => {
         if(match.stage == "GROUP_STAGE"){
           this.qualified.push(match.awayTeam, match.homeTeam)
         }
        })
        return this.qualified
      }
    },
    created() {
      this.getQualified()
      this.getData()
    },
    computed: {
      // datAreIn(){
      //   return [
      //     this.teams.length > 0,
      //     this. standings.length > 0,
      //     this.upcomingMatches.length > 0,
      //     this.scorers.length > 0
      //   ]  
      // }
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