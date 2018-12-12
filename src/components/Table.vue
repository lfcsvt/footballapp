<template>
    <table>
        <thead>
            <th>Teams</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>P</th>
        </thead>
    <tbody>
        <tr v-for="(team, index) in group" :key="index">
        <td v-if="team.team.crestUrl != null" style="align: left"><img :src=team.team.crestUrl alt="">   {{team.team.name}}</td>
        <td v-else>{{team.team.name}}</td>
        <td>{{team.playedGames}}</td>
        <td>{{team.won}}</td>
        <td>{{team.draw}}</td>
        <td>{{team.lost}}</td>
        <td>{{team.points}}</td>
     </tr>
    </tbody>
    </table>
</template>
<script>
export default {
      name: "Table",
    props: ["group", "moreInfo"],
    data(){
        return {
            crests: []
        }
    },
    created(){
        
    },
    computed:{
    //     getCrest(){
    //         var b = ''
    //     return this.group.map(team => {
    //        var a = this.moreInfo.filter(item => item.id == team.team.id)
    //         const rr = a[0].crest
    //         b = rr.split(' ')
    //         return b
    //    })
    // },
    addCrest(){
         
    },
    },
    methods:{
     crestArr(){

     }
    }
}
</script>
<style scoped>
image {
    align-content: flex-start
}
</style>


