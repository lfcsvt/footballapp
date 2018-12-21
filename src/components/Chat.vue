<template>
  <div class="chat" style="-webkit-overflow-scrolling: touch;">
      <Header msg2="Welcome to UCLchat"/>
    <b-button v-on:click="login()"> Login </b-button>
    <b-button v-on:click="logout()"> Logout </b-button>
    <hr>
    <div>
      <div class="chat-command">
         <input type="text" v-model="msg">
      <b-button variant="info" size="sm" v-on:click="writeNewPost()">Send</b-button>
      </div>
      <hr>
    </div>
    <hr>
       <div class="message-room" v-chat-scroll>
          <div class="message" v-for="(msg, index) in messages" :key="index">
        <p>{{msg.name}}</p>
        <p>{{msg.date}}</p>
        <p>{{msg.body}}</p>
      </div>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "home",
  components: {
    Header
  },
  data() {
    return {
      msg: "",
      user: null,
      messages: []
    };
  },
  methods: {
    login() {
      console.log("in login");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // let user = firebase.auth().currentUser;
          this.user = user;
          
          console.log(user);
          console.log(user.displayName);
          console.log(user.email);
          
        })
        .catch(function(error) {
          alert("error" + error.message);
          // // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // // ...
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
        console.log("Sign-out successful");
          
        })
        .catch(function(error) {
          // An error happened.
          alert("Logout failed");
        });
    },
    writeNewPost() {
      if(this.user == null){
        alert('You must be logged in to use the chat.')
      }else {
     
      console.log(this.user.displayName);
      console.log(this.msg);
      const post = {
        name: this.user.displayName,
        body: this.msg,
        date: new Date().toLocaleString("en-US")
      };
      const newPostKey = firebase
        .database()
        .ref()
        .child("mainChat")
        .push().key;
      const updates = {};
      updates[newPostKey] = post;
      firebase
        .database()
        .ref("mainChat")
        .update(updates);
      this.msg = null;
      this.getPosts();
      }
    },
    getPosts() {
      firebase
        .database()
        .ref("mainChat")
        .on("value", data => {
          this.messages = data.val();
        });
    }
  }
};
</script>
<style scoped>
button {
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.chat{
height: 150px;
}
.message-room{
width: 300px;
max-height: 320px;
overflow: auto;
padding-bottom: 20px;


}
.chat-command{

}
.message{
width: 270px;
height: 100px;
background-image: linear-gradient(-225deg, rgba(0, 101, 168, 0.6) 0%, rgba(0, 36, 61, 0.6) 50%);
border-radius: 10px;
margin: 5px;
padding-bottom: 5px;
}
</style>
