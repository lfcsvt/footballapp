<template>
    <div class="teams" style="-webkit-overflow-scrolling: touch;">
        <div class="team" v-for="(team, index) in qTeams" :key="index">
            <TeamCard v-bind:teamInCard="team" :extraInfo="extraInfo" :cQTeams="qTeams" />
        </div>
    </div>
</template>
<script>
    import TeamCard from '@/components/TeamCard.vue'
    export default {
        name: 'teams',
        components: {
            TeamCard
        },
        data() {
            return {
                allTeams: this.$route.params.allTeams,
                nextMatches: this.$route.params.nextMatches,
                extraInfo: this.$route.params.extraInfo,
                qTeams: []
            }
        },
        methods: {
            // getQTeams() {
            //     this.nextMatches.forEach(match => {
            //         var a = this.allTeams.filter(team => team.id == match.awayTeam.id)
            //         var b = this.allTeams.filter(team => team.id == match.homeTeam.id)
            //         this.qTeams.push(a[0], b[0])
            //     })

            //     return this.qTeams
            // },
            getQualified() {
                var arr = []

                this.nextMatches.forEach(match => {
                    if (match.stage == "GROUP_STAGE" && match.matchday > 5) {
                        var a = this.allTeams.filter(team => team.id == match.awayTeam.id)
                        var b = this.allTeams.filter(team => team.id == match.homeTeam.id)
                        this.qTeams.push(a[0], b[0])
                    }
                })
                    return this.qTeams
            }
        },
        created() {
            // this.getQTeams()
            this.getQualified()
        },
        computed: {
            dataAreIn() {
                return this.qTeams.length > 0
            }
        }
    }
</script>
<style scoped>
    .teams {
        background-size: contain;
        overflow: auto;
        height: 555px;
        width: 98%;
        margin-top: 5px;
    }

    .team {
        
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: white;
    }
      @media only screen and (orientation: landscape) {
              .teams {
        background-size: contain;
        overflow: auto;
        height: 313px;
        width: 660px;
        margin: 10px;
        margin-top: 5px;
    }
  
  }
</style>