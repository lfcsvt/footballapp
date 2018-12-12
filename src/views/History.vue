<template>
    <div class="history" style="-webkit-overflow-scrolling: touch;">
        <h5>The Finals through the years</h5>
        <div class="historic-matches">
            <div class="historic-game" v-for="(match, index) in history" :key="index">
                <CardHist :matchInCard="match" />
            </div>
        </div>
         <h5>The Champions</h5>
        <div class="historic-champios">
            <div class="historic-champions" v-for="(champ, index) in champs" :key="index">
                <Champions :cardChamp="champ" />
            </div>
        </div>
        <h5>Most Successfull Nations</h5>
        <div class="champion-nations">
            <div class="champion-nation" v-for="(champ, index) in nationChamps" :key="index">
                <Nations :cardNationChamp="champ" />
            </div>
        </div>
    </div>
</template>
<script>
    import CardHist from '@/components/CardHist.vue'
    import Champions from '@/components/Champions.vue'
    import Nations from '@/components/Nations.vue'
    export default {
        name: 'history',
        components: {
            CardHist,
            Champions,
            Nations
        },
        data() {
            return {
                history: this.$route.params.history,
                champs: [],
                nationChamps: []
            }
        },
        created() {
            this.mostChampions()
            this.champNations()
        },
        methods: {
            mostChampions() {
                var arr = []
                this.history.forEach(item => {
                    arr.push(item.winners)
                })
                this.champs = arr.reduce((b, c) => ((b[b.findIndex(d => d.team === c)] || b[b.push({
                    team: c,
                    wins: 0
                }) - 1]).wins++, b), []);
                return this.champs.sort(function (a, b) {
                    return b.wins - a.wins
                });
            },
             champNations() {
                var arr = []
                this.history.forEach(item => {
                    arr.push(item.nation1)
                })
                this.nationChamps = arr.reduce((b, c) => ((b[b.findIndex(d => d.nation === c)] || b[b.push({
                    nation: c,
                    tittles: 0
                }) - 1]).tittles++, b), []);
                return this.nationChamps.sort(function (a, b) {
                    return b.tittles - a.tittles
                });
            }
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

    .historic-matches {
        height: 210px;
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .historic-champios{
         height: 160px;
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .historic-champions{
        height: 155px;
    }

    .historic-game {
        width: 260px;
        height: 200px;
    }
    .champion-nations{
        height: 160px;
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
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