<template>
  <div class="match">
    <h5>{{matchFromFix.group}}</h5>
    <div class="teams">
      <img :src=getHCrest alt="">
      <p>{{getHour}}</p>
      <img :src=getACrest alt="">
    </div>
    <p>{{getTime}}</p>
    <p>Venue: {{getHomeVenue}}</p>
    <b-button variant="outline-primary" v-b-toggle="'collapse2'" class="map-button" style="padding-top: 0px;">Directions<Collapse :match="matchFromFix" :extraInfo="extraInfo"/></b-button>
  </div>
</template>
<script>
import Collapse from "@/components/Collapse.vue";
  export default {
    name: 'match',
    props: ["matchFromFix", "allTeams", "extraInfo"],
    components:{
      Collapse
    },
    computed: {
      getHomeVenue() {
        var tempArr = this.allTeams.filter(team => team.id == this.matchFromFix.homeTeam.id);
        return tempArr[0].venue
      },
      getTime() {
        var date = this.matchFromFix.utcDate
        var myDate = new Date(date);
        var a = myDate.toGMTString()
        a = a.split(' ')
        return a[0] + a[1] + ' ' + a[2] + ' ' + a[3]
      },
      getHour() {
        var date = this.matchFromFix.utcDate
        var myDate = new Date(date);
        var a = myDate.toLocaleString()
        a = a.split(' ')
        var b = a[1].split('')
        return b[0] + b[1] + b[2] + b[3] + b[4]
      },
      getACrest() {
        var a = this.extraInfo.filter(team => team.id == this.matchFromFix.awayTeam.id)
        return a[0].crest
      },
      getHCrest() {
        var b = this.extraInfo.filter(team => team.id == this.matchFromFix.homeTeam.id)
        return b[0].crest
      }
    },
    created() {
    }
  }
</script>
<style scoped>
  .teams {
    display: flex;
    justify-content: space-around;
  }

  img {
    height: 70px;
    width: 60px;
    margin-bottom: 20px;
  }

  h5 {
    color: white;
  }
  p {
    margin-bottom: 10px;
  }
   .map-button{
   width: 320px !important;
   height: 22px;
 }
 .button-name{
   margin-bottom: 0px;
 }


</style>