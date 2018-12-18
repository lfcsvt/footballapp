<template>
    <div class="field">
        <div class="goalkeeper">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="right-wing">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="left-wing">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="left-back">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="center-back">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="defensive-midfield">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="right-midfield">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="left-midfield">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="wingger">
            <img src="../assets/teamJersey.png" alt="">
        </div>
        <div class="forward">
            <img src="../assets/teamJersey.png" alt="">
        </div>


    </div>
</template>
<script>
    export default {
        name: 'roster'
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
    }

    .goalkeeper {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 70px;
        left: 150px;
    }

    .right-wing {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 230px;
        right: 5px;

    }

    .left-wing {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 230px;
        left: 5px;
    }

    .left-back {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 170px;
        left: 75px;
    }

    .center-back {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 170px;
        right: 75px;
    }

    .defensive-midfield {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 350px;
        right: 60px;
    }

    .right-midfield {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        top: 120px;
        right: 20px;
    }

    .left-midfield {
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        top: 120px;
        left: 20px;
    }
    .wingger{
        background-image: url('../assets/teamJersey.png');
        position: absolute;
        bottom: 350px;
        left: 60px;
    }
    .forward{
           background-image: url('../assets/teamJersey.png');
        position: absolute;
        top: 100px;
        left: 140px;
    }
</style>