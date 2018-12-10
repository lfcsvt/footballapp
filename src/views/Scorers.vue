<template>
    <div class="scorers">
        <div class="top-scorers">
            <!-- <img src="../assets/10.jpg" alt=""> -->
            <table>
                <thead>
                    <th>Player</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Goals</th>
                </thead>
                <tbody>
                    <tr v-for="(info, index) in scorers" :key="index">
                        <td><img :src="require(`../assets/${index+1}.jpg`)" alt=""></td>
                        <td>{{info.player.name}}</td>
                        <td>{{info.player.nationality}}</td>
                        <td>{{info.numberOfGoals}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'scorers',
        data() {
            return {
                scorers: this.$route.params.scorers,
                matches: [],
                pictures: []
            }
        },
        created() {
            // console.log(this.scorers)

        },
        methods: {
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
        height: 505px !important;
        width: 340px !important;
        padding-top: 10px;
        background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
        margin: auto;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    img {
        height: 45px;
        width: 45px;
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
