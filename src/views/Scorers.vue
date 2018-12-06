<template>
    <div class="scorers">
        <div class="top-scorers">
            <table>
                <thead>
                    <th>Player</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Goals</th>
                </thead>
                <tbody>
                        <tr v-for="info in scorers">
                        <td><img src="" alt=""></td>
                        <td>{{info.player.name}}</td>
                        <td>{{info.player.nationality}}</td>
                        <td>{{info.numberOfGoals}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'scorers',
        data() {
            return {
                scorers: this.$route.params.scorers,
                matches: []
            }
        },
        created() {
            console.log(this.scorers)

        },
        methods: {
            getScorers() {

                // this.scorers.forEach( match => {
                //     if(match.matchday > 4 && match.status == "FINISHID"){
                //         this.matches.push(match)
                //     }
                // });
                //  return this.matches
            }
        }
    }
</script>
<style>
    table,
    tr,
    th,
    td {
        color: white;
        align-content: center
    }
.scorers{
    display: flex;
    margin: auto;
  
}
.top-scorers {
    height: 505px !important;
    width: 330px !important;
    padding-top: 10px;
    background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
    margin: auto;
    margin-bottom: 10px;
    border-radius: 10px;
    }
</style>
