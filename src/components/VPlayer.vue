<template>
    <video preload="auto" width="360" height="270" 
  id="my-video">
	<source src="" type="video/mp4">
</video>
</template>
<script>
export default {
    name: 'vPlayer',
    data(){
        return{

        }
    },
    methods:{
        playVideo(e) {
            e.preventDefault();
            video.play();
        }
    }
}
</script>
<style scoped>
video {
  -webkit-transition: 0.60s;
  -moz-transition: 0.60s;
  -o-transition: 0.60s;
  -ms-transition: 0.60s;
  
}

</style>


