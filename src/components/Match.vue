
<template>
  <div class="match">
          <h5>{{matchFromFix.group}}</h5>
          <div class="teams">
              <img :src=getHTeamLogo alt="">
            <!-- <p>{{matchFromFix.homeTeam.tla}}</p> -->
            <!-- <p>{{getHomeVenue}}</p> -->
            <p>{{getHour}}</p>
            <img :src=getATeamLogo alt="">
            <!-- <p>{{matchFromFix.awayTeam.name}}</p> -->
          </div>
              <!-- <p>Time :{{matchFromFix.utcDate}}</p> -->
              <p>{{getTime}}</p>
              <p>Venue: {{getHomeVenue}}</p>
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
        return b[0].crest
          }
          return arr[0].crestUrl
      },
         getATeamLogo(){
          var arr  = this.allTeams.filter(team => team.id == this.matchFromFix.awayTeam.id)
          if(arr[0].crestUrl == null){
             var b = this.extraInfo.filter(team => team.id == this.matchFromFix.awayTeam.id
            )
        return b[0].crest
          }
          return arr[0].crestUrl
      },
      getTime(){
        var date = this.matchFromFix.utcDate
       var myDate = new Date( date);
        var a = myDate.toGMTString()
          a = a.split(' ')
       return a[0] + a[1] + ' ' + a[2] + ' ' + a[3]
      //  return myDate.toLocaleString()
           
      },
      getHour(){
            var date = this.matchFromFix.utcDate
       var myDate = new Date( date);
        var a = myDate.toLocaleString()
          a = a.split(' ')
          var b = a[1].split('') 
       return b[0]+b[1]+b[2]+b[3]+b[4]
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
    margin-bottom: 20px;
}
h5{
    color: white;
}

</style>

