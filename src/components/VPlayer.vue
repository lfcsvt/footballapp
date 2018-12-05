<template>
    <video preload="auto" width="480" height="270" 
  id="my-video">
	<source src="" >
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

</style>


