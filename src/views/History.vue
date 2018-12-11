<template>
    <div class="history">
        <div class="historic-game" v-for="(match, index) in history" :key="index">
            <CardHist :matchInCard="match" />
        </div>
    </div>
</template>
<script>
    import CardHist from '@/components/CardHist.vue'
    export default {
        name: 'history',
        components: {
            CardHist
        },
        data() {
            return {
                history: this.$route.params.history,
            }
        },
        created() {
            this.mostChampions()
        },
        methods: {
            mostChampions() {
                var arr = []
                var champs = []
                this.history.forEach(item => {
                    arr.push(item.winners)
                })
                var map = arr.reduce(function (obj, b) {
                    obj[b] = ++obj[b] || 1;
                    champs = obj
                    return champs;
                }, {});
                console.log(champs)
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

    .historic-game {}

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: white;
    }
</style>