<template>
      <div class="game">
          <h5>{{matchInCard.year}}</h5>
          <div class="teams">
               <p>{{matchInCard.winners}}</p>
               <p>{{matchInCard.score}}</p>
               <p>{{matchInCard.runnersUp}}</p>
          </div>
           <div class="extra-info-header">
              <p>Nation</p>
              <p>Season</p>
              <p>Nation</p>
          </div>
          <div class="extra-info">
              <p>{{matchInCard.nation1}}</p>
              <p>{{matchInCard.season}}</p>
              <p>{{matchInCard.nation2}}</p>
          </div>
          <div class="venue-info">
               <p>Venue: {{matchInCard.venue}}</p>
          </div>
          <div class="attendance-info">
              <p>Attendance: {{matchInCard.attendance}}</p>
          </div>
    </div>
</template>
<script>
export default {
    name: 'cardHist',
    props:['matchInCard']
}
</script>
<style scoped>
    .game {
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        width: 95%;
        height: 260px;
        margin: auto;
        margin-bottom: 10px;
        padding-top: 15px;
        border-radius: 10px;
    }
    .teams{
        display: flex;
        justify-content: space-around
    }
    h5{
        color: white;
    }
    .extra-info{
        display: flex;
        justify-content: space-around
    }
    .extra-info-header{
          display: flex;
        justify-content: space-around
    }
    .venue-info-header{
           display: flex;
        justify-content: space-around
    }
    .venue-info{
           display: flex;
        justify-content: space-around
    }
</style>


