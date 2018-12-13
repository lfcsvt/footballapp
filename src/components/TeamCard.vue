<template>
    <div class="team-box">
        <div class="header">
            <img :src=getTeamCrest alt="">
            <h5>{{teamInCard.name}}</h5>
        </div>
        <div class="club-info">
            <p>Country: {{teamInCard.area.name}}</p>
            <p>Founded in: {{teamInCard.founded}}</p>
        </div>
        <p>Ground: {{teamInCard.venue}}</p>
        <div class="contact"> Team Contact Info
            <p>Phone: {{teamInCard.phone}}</p>
            <p>Email: {{teamInCard.email}}</p>
            <a v-bind:href="teamInCard.website">{{teamInCard.website}}</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'teamCard',
        props: ['teamInCard', 'extraInfo', 'cQTeams'],
        computed: {
            getTeamCrest(){
              var a =  this.extraInfo.filter(team => team.id == this.teamInCard.id )
              return a[0].crest
            }
        }
    }
</script>

<style scoped>
    .team-box {
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        width: 95%;
        height: 260px;
        margin: auto;
        margin-bottom: 10px;
        padding-top: 15px;
        border-radius: 10px;
    }

    .header {
        display: flex;
        justify-content: flex-start
    }

    img {
        height: 50px;
        width: 50px;
        margin-left: 10px;
        margin-right: 30px;
        margin-bottom: 10px;
    }

    .club-info {
        display: flex;
        justify-content: space-around
    }

    p {
        margin-bottom: 5px;
    }

    .contact {
        color: white;
        display: inline;

    }
    h5 {
        align-items: center;
        color: white
    }
     @media only screen and (orientation: landscape){
             .team-box {
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        width: 95%;
        height: 235px;
        margin: auto;
        margin-bottom: 10px;
        padding-top: 15px;
        border-radius: 10px;
    }

     }
</style>