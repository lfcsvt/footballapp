<template>
  <div class="fixtures">
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
        extraInfo: this.$parent.extraTeamInfo
      }
    },
    created() {
      this.getQTeams()
    },
    methods: {
      getQTeams() {
        this.qualified.forEach(qTeam => {
          return qTeam
        })
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
    height: 750px;
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
</style>