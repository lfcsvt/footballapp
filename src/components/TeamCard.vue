<template>
    <div class="team-box">
        <div class="header">
            <p>{{teamInCard.name}}</p>
            <img :src=teamInCard.crestUrl alt="">
        </div>
        <div class="club-info">
            <p>Country: {{teamInCard.area.name}}</p>
        <p>Founded in: {{teamInCard.founded}}</p>
        </div>
         <p>Ground: {{teamInCard.venue}}</p>
        <div class="contact"> Team Contact Info
              <p>{{teamInCard.phone}}</p>
             <p>{{teamInCard.website}}</p>
             <p>{{teamInCard.email}}</p>
             <p>{{teamInCard.address}}</p>
        </div>

        
    </div>
</template>
<script>
export default {
    name: 'teamCard',
    props:['teamInCard'],
    computed:{
        getCrest(){

        }
    }
}
</script>

<style scoped>
.team-box{
 background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%);
 width: 95%;
 height: 260px;
 margin: auto;
 margin-bottom: 10px;
 padding-top: 15px;
}
.header {
    display: flex;
    justify-content: space-around
}

img {
    height: 50px;
    width: 50px;
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
    display: inline;;
}
</style>

