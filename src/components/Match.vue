
<template>
  <div class="match">
          <h5>{{matchFromFix.group}}</h5>
          <div class="teams">
              <img :src=getHTeamLogo alt="">
            <!-- <p>{{matchFromFix.homeTeam.name}}</p> -->
            <!-- <p>{{getHomeVenue}}</p> -->
            <p>X</p>
            <img :src=getATeamLogo alt="">
            <!-- <p>{{matchFromFix.awayTeam.name}}</p> -->
          </div>
              <p>{{matchFromFix.utcDate}}</p>
              <p>{{getHomeVenue}}</p>
  </div>
</template>
<script>
export default {
  name: 'match',
  props: ["matchFromFix", "allTeams", "extraInfo"],
  computed:{
      getHomeVenue(){
        var tempArr = this.allTeams.filter(team => team.id == this.matchFromFix.homeTeam.id);
        return tempArr[0].venue
      },
      getHTeamLogo(){
          var arr  = this.allTeams.filter(team => team.id == this.matchFromFix.homeTeam.id)
                  if(arr[0].crestUrl == null){
             var b = this.extraInfo.filter(team => team.id == this.matchFromFix.homeTeam.id
            )
        return b[0].crestUrl
          }
          return arr[0].crestUrl
      },
         getATeamLogo(){
          var arr  = this.allTeams.filter(team => team.id == this.matchFromFix.awayTeam.id)
          if(arr[0].crestUrl == null){
             var b = this.extraInfo.filter(team => team.id == this.matchFromFix.awayTeam.id
            )
        return b[0].crestUrl
          }
          return arr[0].crestUrl
      },
      getExtraCrest(){
    
      }

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
}

</style>

