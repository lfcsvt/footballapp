<template>
    <div class="standings">
    <div class="standings-box">
        <div class="group-box"><h5>Group A</h5>
            <Table v-bind:group="groups[0]"/>

        </div>
        <div class="group-box"><h5>Group B</h5>
         <Table v-bind:group="groups[1]"/>
        </div>
        <div class="group-box"><h5>Group C</h5>
        <Table v-bind:group="groups[2]"/>
        </div>
        <div class="group-box"><h5>Group D</h5>
        <Table v-bind:group="groups[3]"/>
        </div>
        <div class="group-box"><h5>Group E</h5>
        <Table v-bind:group="groups[4]"/>
        </div>
        <div class="group-box"><h5>Group F</h5>
        <Table v-bind:group="groups[5]"/>
        </div>
        <div class="group-box"><h5>Group G</h5>
        <Table v-bind:group="groups[6]"/>
        </div>
        <div class="group-box"><h5>Group H</h5>
            <Table v-bind:group="groups[7]"/>
        </div>
    </div>
    </div>
</template>
<script>
import Table from '@/components/Table.vue'
export default {
    name: 'standings',
    components:{
        Table
    },
    data(){
        return {
            results: this.$route.params.results,
            standings1: [],
            groups: []
        }
    },
    created(){
        this.getGroups() 
    },
    methods: {    
        getGroups(){
            var arr1 = []
            var arr2 = []
            this.results.forEach(result =>{
                arr1 = result.table 
                arr1.forEach(el => {
                    arr2.push(el)
                })    
            })
            arr1.forEach(element=> {
                arr2.push(element)
            })
            arr2.forEach(el => {
                if(el.playedGames > 4){
                    this.standings1.push(el)
                }     
            })
                
                while (this.standings1.length) {
                this.groups.push(this.standings1.splice(0, 4));
                     }
        }

    }
}
</script>

<style>
.standings{
background-size: contain;
overflow: auto;
height: 750px;
width: 98%;
}
.standings-box {
    
}

.group-box {
background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%);
 width: 90%;
 height: 220px;
 margin: auto;
 margin-bottom: 10px;
}

h1,h2,h3,h4,h5, p {
  color: white;
}
table {
     width: 310px;
    height: 140px;
    color: white;
    border: 1px solid white;
    margin-left: 10px;
    align-content: flex-start;
    

}

th, tr, td {
    color: white;
    border: 1px solid white;
}
 </style>


