<template>
  <div class="chat">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button v-on:click="login()"> Login </button>
    <button v-on:click="logout()"> Logout </button>
    <hr>
    <div>
      <input type="text" v-model="msg">
      <button v-on:click="writeNewPost()">Send</button>
      <hr>
      <div class="message-room">
          <div v-for="(msg, index) in messages" :key="index">
        <p>{{msg.name}}</p>
        <p>{{msg.date}}</p>
        <p>{{msg.body}}</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "home",
  components: {
    // HelloWorld
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
  margin: 30px;
}
.chat{
height: 300px;
}
.message-room{
width: 280px;
height: 300px;
overflow: auto;
}
</style>
