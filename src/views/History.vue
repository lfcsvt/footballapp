<template>
    <div class="history">

    </div>
</template>
<script>
export default {
    name: 'history',
    components:{

    },
    data(){
        return {
            history: this.$route.params.history,
        }
    }
}
</script>

