<template>
  <div class="home" style="-webkit-overflow-scrolling: touch;">
    <Header msg="Meet the Best" />
    <Header msg2="Experience greatness" />
    <div class="teams">
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'


  export default {
    name: 'home',
    components: {
      Header
    },
    data() {
      return {
        teams: this.$route.params.teams
      }
    },
    methods: {
    

    },
    created() {
      
    }
  }
</script>
<style>
  body {
    background-image: url(../assets/uefa2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }

  p {
    color: white;
  }

  .home {
    background-size: contain;
    overflow: auto;
    height: 555px;
    width: 98%;
  }

  .teams {}

  img {
    height: 25px;
    width: 25px;
  }

  .uefa-pic {
    height: 120px;
    width: 120px;
    position: absolute;
    bottom: 40px;
    left: 110px;
    ;

  }

  @media only screen and (orientation: landscape) {
    body {
      background-image: url(../assets/uefa1.jpg);
      background-size: contain;
      background-repeat: no-repeat;
    }

    .home {
      height: 310px;
    }
  }
</style>