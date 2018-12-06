<template>
    <div class="teams">
        <div class="team" v-for="team in qTeams">
            <TeamCard v-bind:teamInCard="team"/>
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
    data(){
        return {
            qTeams: this.$route.params.qTeams
        }
    },
    methods: {

    },
    created(){
        console.log(this.qTeams)
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

.team {

}

h1,h2,h3,h4,h5, p {
  color: white;
}
</style>


