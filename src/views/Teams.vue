<template>
    <div class="teams">
        <div class="team" v-for="team in qTeams">
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
                extraInfo: this.$parent.extraInfo,
                qTeams: []
            }
        },
        methods: {
            getQTeams() {
                this.nextMatches.forEach(match => {
                    // this.qteam.push(match.awayTeam, match.homeTeam )
                    var a = this.allTeams.filter(team => team.id == match.awayTeam.id)
                    var b = this.allTeams.filter(team => team.id == match.homeTeam.id)
                    this.qTeams.push(a[0], b[0])
                })

                return this.qTeams
            }
        },
        created() {
            this.getQTeams()
            // console.log(this.qteams)
            // console.log(this.nextMatches)
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
        height: 750px;
        width: 98%;
        margin-top: 5px;
    }

    .team {}

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: white;
    }
</style>