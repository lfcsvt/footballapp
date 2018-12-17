<template>
    <div class="chat-room">
        <div class="chat-body">
            <Chat/>
        </div>
    </div>
</template>
<script>
import Chat from '@/components/Chat.vue'
export default {
    name: 'chatRoom',
    components:{
        Chat
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.chat-room {
display: flex;
justify-content: space-around
}
.chat-body{
width: 300px;
height: 560px;
background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
border-radius: 10px;
}
</style>


