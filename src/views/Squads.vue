<template>
    <div class="scorers">
        <div class="top-scorers">
            <div class="teams" v-for="(team, index) in qTeams" :key="index">
                <!-- <input class="img" v-on:click="getId(team.id)" type="image" :src=team.crestUrl :id="team.id"/> -->
                <div v-if="!dataAreIn">
                    <router-link  :to="{ name: 'roster', params:{squads: roster}}"><img class="img" v-on:click="getId(team.id)" type="image" :src=team.crestUrl :id="team.id"/></router-link>
                </div>
                <div v-else>
                     <!-- <router-link  :to="{ name: 'roster'}"><img class="img" v-on:click="getId(team.id)" type="image" :src=team.crestUrl :id="team.id"/></router-link> -->
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'squads',
        components: {

        },
        data() {
            return {
                // scorers: this.$route.params.scorers,
                matches: [],
                pictures: [],
                allTeams: this.$parent.teams,
                qTeams: [],
                nextMatches: this.$route.params.nextMatches,
                extraInfo: this.$route.params.extraInfo,
                roster: []
            }
        },
        created() {

            this.getTeams()
            this.addCrest()
        },
        methods: {
            getId(element) {
                var id = element
                var url1 = 'https://api.football-data.org/v2/teams/'
                var url = url1 + id
                if (id == null) {
                    alert('choose a team')
                } else {
                    fetch(url, {
                            headers: new Headers({
                                'X-Auth-Token': 'e629d8e25d5140eea6726726830817e7',
                            })
                        })
                        .then(response => response.json())
                        .then(response => {
                            this.roster = response.squad
                            console.log(this.roster)
                            return this.roster
                        })
                        .catch(err => console.log(err));
                }
            },

            getTeams() {
                this.nextMatches.forEach(match => {
                    if (match.stage == "GROUP_STAGE" && match.matchday > 5) {
                        var a = this.allTeams.filter(team => team.id == match.awayTeam.id)
                        var b = this.allTeams.filter(team => team.id == match.homeTeam.id)
                        this.qTeams.push(a[0], b[0])
                    }
                })
                return this.qTeams
            },
            addCrest() {
                this.qTeams.forEach(team => {
                    var a = this.extraInfo.filter(squad => squad.id == team.id)
                    return team.crestUrl = a[0].crest
                })
            }

        },
        computed:{
            dataAreIn(){
               return this.roster.length > 0
    
            }
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

    .scorers {}

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

    .teams {
        height: 50px !important;
        width: 40px !important;

    }

    .img {
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
            display: flex;
            flex-direction: column;

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