<template>
    <div class="nation">
        <h5>{{cardNationChamp.nation}}</h5>
        <div class="tittle">
            <h4>{{cardNationChamp.tittles}}</h4>
            <img src='../assets/trophy.png' alt="">
        </div>

    </div>

</template>
<script>
    export default {
        name: 'nations',
        props: ['cardNationChamp']
    }
</script>
<style scoped>
    .nation {
          background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        width: 200px;
        height: 150px;
        margin: 1px;
        margin-left: 10px;
        padding-top: 15px;
        border-radius: 10px;
    }
    .tittle{
         display: flex;
        justify-content: center;
    }
    h4{
        color: white;
        margin-top: 20px;
    }
    h5{
        color: white;
    }
    img{
        height: 50px;
        width: 40px;
        margin: 15px;
        border-radius: 5px;
    }
</style>