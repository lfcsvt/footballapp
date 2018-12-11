<template>
    <div>
  <b-collapse :id=" `collapse2${match.id}`">
    <b-card>
      <iframe :src=getMap  width="280" height="160" frameborder="0" style="border:0" allowfullscreen></iframe>
    </b-card>
  </b-collapse>
</div>
</template>
<script>
export default {
    name: 'collapse',
    props:['match', 'extraInfo'],
    data(){
        return {
            
        }
    },
    computed:{
        getMap(){
            var a = this.extraInfo.filter(team=> team.id == this.match.homeTeam.id )
            return a[0].mapSrc
        }
    },
    created(){
        // console.log(this.match.homeTeam.id)
        this.collapse
    },
    methods:{

    }
}
</script>
<style scoped>
#collapse2{
    widows: 320px;
}
.card-body{
    width: 300px;
    padding: 5px;
}
</style>


