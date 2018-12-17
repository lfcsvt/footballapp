<template>
    <div class="scorers">
        <div class="top-scorers">
            <!-- <table>
                <thead>
                    <th>Player</th>
                    <th>Name</th>
                    <th>Club</th>
                    <th>Goals</th>
                </thead>
                <tbody>
                    <tr v-for="(info, index) in scorers" :key="index">
                        <td><img :src="require(`../assets/${index+1}.jpg`)" alt=""></td>
                        <td>{{info.player.name}}</td>
                        <td>{{info.team.name}}</td>
                        <td>{{info.numberOfGoals}}</td>
                    </tr>
                </tbody>
            </table> -->
            <div class="teams" v-for="(team, index) in qTeams" :key="index">
                <a href=""><img :src=team.crestUrl alt=""></a>
                <p>{{team.tla}}</p>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'scorers',
        components: {
    
        },
        data() {
            return {
                scorers: this.$route.params.scorers,
                matches: [],
                pictures: [],
                allTeams: this.$parent.teams,
                qTeams: [],
                nextMatches: this.$route.params.nextMatches,
                extraInfo: this.$route.params.extraInfo,
            }
        },
        created() {
            this.getSquads()
            this.getTeams()
            this.addCrest()
            // console.log(this.qTeams)

        },
        methods: {
            getSquads() {
               var url1 = 'http://api.football-data.org/v2/teams/'
               var id = '4'
               var url = url1 + id
                // console.log(url)
                // fetch( url , {
                //         headers: new Headers({
                //             'X-Auth-Token': 'e629d8e25d5140eea6726726830817e7',
                //         })
                //     })
                //     .then(response => response.json())
                //     .then(response => {
                //         console.log(response);
                //     })
                //     .catch(err => console.log(err));
            },
            getId(){

            },
               getTeams(){
                    this.nextMatches.forEach(match => {
                    if (match.stage == "GROUP_STAGE" && match.matchday > 5) {
                        var a = this.allTeams.filter(team => team.id == match.awayTeam.id)
                        var b = this.allTeams.filter(team => team.id == match.homeTeam.id)
                        this.qTeams.push(a[0], b[0])
                    }
                })
                    console.log(this.qTeam)
                    return this.qTeams
            },
                 addCrest() {
                this.qTeams.forEach(team => {
                       var a = this.extraInfo.filter(squad => squad.id == team.id)
                      return team.crestUrl =  a[0].crest
                }) 
            }

        },
        computed: {

        }
    }
</script>
<style scoped>
    table,
    tr,
    th,
    td {
        color: white;
    }

    .scorers {
        display: flex;
        margin: auto;

    }

    .top-scorers {
        height: 555px !important;
        width: 350px !important;
        padding-top: 10px;
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        margin: auto;
        margin-bottom: 5px;
        border-radius: 10px;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly
    }
    .teams{
        height: 50px !important;
        width: 40px !important;
       
    }

    img {
        height: 45px;
        width: 40px;
        margin: 5px;
    }

    @media only screen and (orientation: landscape) {

        .top-scorers {
            height: 320px !important;
            width: 600px !important;
            padding-top: 10px;
            padding-left: 5px;
            background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
            margin: auto;
            margin-bottom: 20px;
            margin-top: 20px;
            border-radius: 10px;
            overflow: auto;
        }

        table,
        tr,
        th,
        td {
            color: white;
            align-content: center;
            text-align: center;
        }

        .scorers {
            display: flex;
            margin: auto;

        }
    }
</style>