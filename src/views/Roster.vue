<template>
    <div class="field">
        <div class="goalkeeper">
            <p>q</p>
            <p style="color: red">Name</p>
            <h5 style="color: red">1</h5>
        </div>
        <div class="right-wing">
            <p>q</p>
            <p style="color: red">Name</p>
            <h5 style="color: red">2</h5>
        </div>
        <div class="left-wing">
            <p>q</p>
           <p style="color: red">Name</p>
            <h5 style="color: red">6</h5>
        </div>
        <div class="left-back">
            <p>q</p>
             <p style="color: red">Name</p>
            <h5 style="color: red">3</h5>
        </div>
        <div class="center-back">
            <p>q</p>
             <p style="color: red">Name</p>
            <h5 style="color: red">4</h5>
        </div>
        <div class="defensive-midfield">
            <p>q</p>
           <p style="color: red">Name</p>
            <h5 style="color: red">5</h5>
        </div>
        <div class="right-midfield">
            <p>q</p>
          <p style="color: red">Name</p>
            <h5 style="color: red">7</h5>
        </div>
        <div class="left-midfield">
            <p>q</p>
            <p style="color: red">Name</p>
            <h5 style="color: red">10</h5>
        </div>
        <div class="left-wingger">
            <p>q</p>
            <p style="color: red">Name</p>
            <h5 style="color: red">11</h5>
        </div>
          <div class="right-wingger">
              <p>q</p>
            <p style="color: red">Name</p>
            <h5 style="color: red">8</h5>
        </div>
        <div class="forward">
            <p>q</p>
             <p style="color: red">Name</p>
            <h5 style="color: red">9</h5>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'roster',
        data(){
            return{
                squads:this.$route.params.squads
            }
        },
        created(){
            this.squads = this.$route.params.squads
        },
        methods:{
            getGoallie(){
                if(this.squads.lenght > 0){
                 this.squads.forEach(pleyer =>{
                     console.log(player)
                 })
                }
              
            }
        },
        mounted(){
            console.log(this.squads)
            // this.getGoallie()
        }
    }
</script>
<style scoped>
    img {
        height: 80px;
        width: 80px;
    }

    .field {
        height: 540px;
        width: 375px;
        background-image: url('../assets/field.jpg');
        background-size: cover;
        z-index: -1;
    }

    .goalkeeper {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: -450px;
        left: 150px;
        height: 80px;
        width: 80px;
        z-index: 0;
    }

    .right-wing {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 190px;
        left: 280px;
        height: 80px;
        width: 80px;
    }
    .left-wing {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 110px;
        left: 20px;
        height: 80px;
        width: 80px;
    }

    .left-back {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 120px;
        left: 75px;
        height: 80px;
        width: 80px;
    }

    .center-back {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 40px;
        left: 220px;
        height: 80px;
        width: 80px;
    }

    .defensive-midfield {
        background-image: url('../assets/teamJersey2.png');
       position: relative;
        bottom: 120px;
        left: 150px;
        height: 80px;
        width: 80px;
    }

    .right-midfield {
        background-image: url('../assets/teamJersey2.png');
       position: relative;
        bottom: 320px;
        left: 250px;
        height: 80px;
        width: 80px;
    }

    .left-midfield {
        background-image: url('../assets/teamJersey2.png');
      position: relative;
        bottom: 400px;
        left: 50px;
        height: 80px;
        width: 80px;
    }
    .left-wingger{
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 580px;
        left: 20px;
        height: 80px;
        width: 80px;
    }
     .right-wingger{
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 650px;
        left: 280px;
        height: 80px;
        width: 80px;
    }
    .forward{
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 750px;
        left: 150px;
        height: 80px;
        width: 80px;
    }
    p{
        margin-bottom: 0px;
    }

</style>