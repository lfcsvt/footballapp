<template>
    <div class="history" style="-webkit-overflow-scrolling: touch;">
        <!-- <div class="filter">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="year" value="1956">
                <label class="form-check-label" for="defaultCheck1">
                    50'S
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="year" value="1966">
                <label class="form-check-label" for="defaultCheck1">
                    60'S
                </label>
            </div>
               <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="year" value="1976">
                <label class="form-check-label" for="defaultCheck1">
                    70'S
                </label>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="year" value="1986">
                <label class="form-check-label" for="defaultCheck1">
                    80'S
                </label>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="year" value="1996">
                <label class="form-check-label" for="defaultCheck1">
                    90'S
                </label>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="year" value="2006">
                <label class="form-check-label" for="defaultCheck1">
                    00'S
                </label>
            </div>
        </div> -->
        <h5>The Finals through the years</h5>
        <div class="historic-matches">
            <div class="historic-game" v-for="(match, index) in pickMatch" :key="index">
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
                nationChamps: [],
                year: [],
                option: 'all'
            }
        },
        created() {
            this.mostChampions()
            this.champNations()
            console.log(this.history)
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
        },
        computed: {
            pickMatch() {
                return this.history.filter(match => {
                    let byYear = match.year == this.year[0]
                    if (this.year.length == 0 || this.year.length == 6) {
                        return this.history
                    } else if (byYear == true) {
                        return match
                    }

                })

            }
        }
    }
</script>
<style scoped>
    .history {
        background-size: contain;
        overflow: auto;
        height: 555px;
        width: 98%;
        margin-top: 5px;
    }
    .filter{
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
    }
    .form-check{
        margin-right: 10px;;
    }

    .historic-matches {
        height: 210px;
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .historic-champios {
        height: 160px;
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .historic-champions {
        height: 155px;
    }

    .historic-game {
        width: 260px;
        height: 200px;
    }

    .champion-nations {
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

    @media only screen and (orientation: landscape) {
        .history {
            background-size: contain;
            overflow: auto;
            height: 313px;
            width: 660px;
            margin: 10px;
            margin-top: 5px;
        }

    }
</style>