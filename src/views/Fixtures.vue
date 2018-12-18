<template>
  <div class="fixtures" style="-webkit-overflow-scrolling: touch;">
    <div class="matches">
      <div class="matchBox" v-for="(match, index) in matches" :key='index'>
        <Match :matchFromFix="match" :allTeams="allTeams" :extraInfo="extraInfo" />
      </div>
    </div>
  </div>
</template>
<script>
  import Match from "@/components/Match.vue";
  import Collapse from "@/components/Collapse.vue";
  export default {
    name: 'fixtures',
    components: {
      Match,
      Collapse
    },
    data() {
      return {
        matches: this.$route.params.matches,
        allTeams: this.$parent.teams,
        extraInfo: this.$parent.extraTeamInfo,
        allMatches: this.$parent.allMatches
      }
    },
    created() {
      this.getLastMatches()
      // this.getQTeams()
      console.log(this.Matches)
    },
    methods: {
      getQTeams() {
        this.qualified.forEach(qTeam => {
          return qTeam
        })
      },
      getLastMatches(){
       var match = this.allMatches.filter(match => match.matchday > 5)
        // console.log(match)
       return  match
      }
    },

    computed: {
      getTeamInfo() {
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
    height: 555px;
    width: 98%;
    margin-top: 5px;
  }

  .matches {
    overflow: auto;
    margin-bottom: 25px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: white;
  }

  .matchBox {
    background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
    width: 90%;
    height: 220px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .teams {
    display: flex;
    justify-content: space-around;

  }
  @media only screen and (orientation: landscape){
      .fixtures {
    background-size: contain;
    overflow: auto;
    height: 313px;
    width: 98%;
    margin-top: 5px;
  }
  }
</style>