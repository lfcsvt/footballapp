<template>
    <div class="standings">
        <div class="standings-box">
            <div class="group-box" v-if="!horizontal">
                <h5>Group A</h5>
                <Table v-bind:group="groups[0]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group A</h5>
                <Table2 v-bind:group="groups[0]"/>
             </div>
                 <div class="group-box" v-if="!horizontal">
                <h5>Group B</h5>
                <Table v-bind:group="groups[1]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group B</h5>
                <Table2 v-bind:group="groups[1]"/>
             </div>
                 <div class="group-box" v-if="!horizontal">
                <h5>Group C</h5>
                <Table v-bind:group="groups[2]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group C</h5>
                <Table2 v-bind:group="groups[2]"/>
             </div>
                <div class="group-box" v-if="!horizontal">
                <h5>Group D</h5>
                <Table v-bind:group="groups[3]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group D</h5>
                <Table2 v-bind:group="groups[3]"/>
             </div>
                <div class="group-box" v-if="!horizontal">
                <h5>Group E</h5>
                <Table v-bind:group="groups[4]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group E</h5>
                <Table2 v-bind:group="groups[4]"/>
             </div>
                <div class="group-box" v-if="!horizontal">
                <h5>Group F</h5>
                <Table v-bind:group="groups[5]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group F</h5>
                <Table2 v-bind:group="groups[5]"/>
             </div>
               <div class="group-box" v-if="!horizontal">
                <h5>Group G</h5>
                <Table v-bind:group="groups[6]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group G</h5>
                <Table2 v-bind:group="groups[6]"/>
             </div>
               <div class="group-box" v-if="!horizontal">
                <h5>Group H</h5>
                <Table v-bind:group="groups[7]" />
            </div>
            <div class="group-box" v-else >
                <h5>Group H</h5>
                <Table2 v-bind:group="groups[7]"/>
             </div>
        </div>
    </div>
</template>
<script>
    import Table from '@/components/Table.vue'
    import Table2 from '@/components/Table2.vue'
    export default {
        name: 'standings',
        components: {
            Table,
            Table2
        },
        data() {
            return {
                results: this.$route.params.results,
                orientation: false,
                horizontal: this.onResize(),
                standings1: [],
                groups: [],
                extraInfo: this.$route.params.extraInfo
            }
        },
        created() {
            this.getGroups()
            this.addCrest()
        },
        methods: {
            getGroups() {
                var arr1 = []
                var arr2 = []
                this.results.forEach(result => {
                    arr1 = result.table
                    arr1.forEach(el => {
                        arr2.push(el)
                    })
                })
                arr1.forEach(element => {
                    arr2.push(element)
                })
                arr2.forEach(el => {
                    if (el.playedGames > 4) {
                        this.standings1.push(el)
                    }
                })

                while (this.standings1.length) {
                    this.groups.push(this.standings1.splice(0, 4));
                }
            },
            addCrest() {
                this.groups.forEach(group => {
                    group.forEach(item => {
                        if (item.team.crestUrl == null) {
                            this.extraInfo.filter(team => {
                                return team.id === item.team.id
                            }).forEach(team2 => {
                                return item.team.crestUrl = team2.crestUrl
                            })
                        }
                    })
                })

            },
            onResize(event) {
                if (screen.width > 450){
                    this.horizontal = true
                } else {
                    this.horizontal = false
                }
                // console.log(`horizontal ${this.horizontal}`)
                // this.orientation = !this.orientation
            }
        },
        computed: {
                getCrest(){
                    
                }
        },
        mounted() {
            
            window.addEventListener('resize', this.onResize)
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.onResize)
        }
    }
</script>

<style>
    .standings {
        background-size: contain;
        overflow: auto;
        height: 750px;
        width: 98%;
    }

    .standings-box {}

    .group-box {
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        width: 95%;
        height: 220px;
        margin: auto;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: white;
    }

    table {
        width: 320px;
        height: 140px;
        color: white;
        border: 1px solid white;
        margin-left: 10px;
        align-content: flex-start;
        text-align: left;
       


    }

    th,
    tr,
    td {
        color: white;
        border: 1px solid white;
        text-align: left;
        align-content: flex-start
    }
    image {
    align-content: flex-start
}

    @media only screen and (orientation: landscape) {
        body {
            height: 100%;
        }
        table {
            width: 555px;
            height: 140px;
            color: white;
            border: 1px solid white;
            margin-left: 15px;
            align-content: flex-start;
        }
        .standings{
            height: 355px;
        }
            .group-box {
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        width: 95%;
        height: 220px;
        margin: auto;
        margin-bottom: 10px;
        padding-left: 15px;
        border-radius: 10px;
    }
    }
</style>