<template>
  <div id="app">
    <!-- <b-navbar toggleable="md" type="light" variant="faded">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">UCL</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="{name: 'home', params:{teams: this.standings}}">Home</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'fixtures', params: { matches: this.upcomingMatches, extraTeamInfo: this.extraTeamInfo}}">Fixtures</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'standings', params: { results: this.standings , extraInfo: this.extraTeamInfo}}">Standings</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'scorers', params: { scorers: this.scorers }}">Scorers</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'teams', params: { allTeams: this.teams, nextMatches: this.upcomingMatches, extraInfo: this.extraTeamInfo }}">Teams</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'history', params: { history: this.history, extraInfo: this.extraTeamInfo }}">History</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
    <!-- <div v-if="!dataAreIn">
      <p>loading......</p>
    </div> -->
    <!-- <div v-else> -->
    <div id="nav">
      <!-- <Slide left/> -->
      <router-link :to="{name: 'home', params:{teams: this.standings}}">Home</router-link> |
      <router-link :to="{ name: 'fixtures', params: { matches: this.upcomingMatches, extraTeamInfo: this.extraTeamInfo}}">Fixtures</router-link>|
      <router-link :to="{ name: 'standings', params: { results: this.standings , extraInfo: this.extraTeamInfo}}">Standings</router-link>
      |
      <router-link :to="{ name: 'scorers', params: { scorers: this.scorers }}">Scorers</router-link> |
      <router-link :to="{ name: 'teams', params: { allTeams: this.teams, nextMatches: this.allMatches, extraInfo: this.extraTeamInfo }}">Teams</router-link>
      |
      <router-link :to="{ name: 'history', params: { history: this.history, extraInfo: this.extraTeamInfo }}">History</router-link>
    </div>
    <!-- </div> -->
    <router-view />
  </div>
</template>
<script>
  import {
    Slide
  } from 'vue-burger-menu'
  export default {
    components: {
      Slide
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
          console.log(this.allMatches)
        })
      },
      getQualified() {
        var teams1 = []
        this.upcomingMatches.forEach(match => {
          this.qualified.push(match.awayTeam, match.homeTeam)
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