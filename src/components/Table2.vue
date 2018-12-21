<template>
    <table>
        <thead>
            <th>Teams</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
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
        <td>{{team.goalsFor}}</td>
        <td>{{team.goalsAgainst}}</td>
        <td>{{team.goalDifference}}</td>
        <td>{{team.points}}</td>
     </tr>
    </tbody>
    </table>
</template>
<script>
export default {
      name: "Table2",
    props: ["group"],
    created(){
        
    }
}
</script>
<style scoped>
image {
    align-content: flex-start
}
</style>