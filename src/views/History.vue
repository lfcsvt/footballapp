<template>
    <div class="history" style="-webkit-overflow-scrolling: touch;">
        <div class="filter">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="years" value= "1956 1957 1958 1959">
                <label class="form-check-label" for="defaultCheck1">
                    50'S
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="years" value="1960 1961 1962 1963 1964 1965 1966 1967 1968 1969">
                <label class="form-check-label" for="defaultCheck1">
                    60'S
                </label>
            </div>
               <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="years" value="1970 1971 1972 1973 1974 1975 1976 1977 1978 1979">
                <label class="form-check-label" for="defaultCheck1">
                    70'S
                </label>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="years" value="1980 1981 1982 1983 1984 1985 1986 1987 1988 1989">
                <label class="form-check-label" for="defaultCheck1">
                    80'S
                </label>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="years" value="1990 1991 1992 1993 1994 1995 1996 1997 1998 1999">
                <label class="form-check-label" for="defaultCheck1">
                    90'S
                </label>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="years" value="2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015">
                <label class="form-check-label" for="defaultCheck1">
                    00'S
                </label>
            </div>
        </div>
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
                years: [],
                option: 'all'
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
        },
        computed: {
            pickMatch() {
               let arr = []
                let a = this.years.forEach(year => {
                    let b = year.split(' ')
                    b.forEach(el => {
                       let c =  this.history.filter(match => match.year == el)
                       arr.push(c[0])
                    })
                })
                if(this.years.length > 0){
                    return arr
                } else{
                    return this.history
                }
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