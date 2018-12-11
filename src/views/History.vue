<template>
    <div class="history">
        <div class="historic-game"  v-for="(match, index) in history" :key="index">
            <CardHist :matchInCard="match"/>
        </div>
        <!-- <table>
            <thead> 
                <th>Year</th>
                <th>Winner</th>
                <th>Winner Nation</th>
                <th>score</th>
                <th>Runner Up</th>
                <th>Runner Up Nation</th> 
                <th>Season</th>
                <th>Venue</th>
                <th>Attendance</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in history" :key="index">
                    <td>{{item.year}}</td>
                    <td>{{item.winners}}</td>
                    <td>{{item.nation1}}</td>
                    <td>{{item.score}}</td>
                    <td>{{item.runnersUp}}</td>
                    <td>{{item.nation2}}</td>
                    <td>{{item.season}}</td>
                    <td>{{item.venue}}</td>
                    <td>{{item.attendance}}</td>
                </tr>
            </tbody>
        </table> -->
    </div>
</template>
<script>
import CardHist from '@/components/CardHist.vue'
export default {
    name: 'history',
    components:{
        CardHist
    },
    data(){
        return {
            history: this.$route.params.history,
        }
    },
    created(){

    }
}
</script>
<style scoped>
 .history {
        background-size: contain;
        overflow: auto;
        height: 750px;
        width: 98%;
        margin-top: 5px;
    }

.historic-match {

    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: white;
    }
</style>


