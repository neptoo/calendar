import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAq05RauUuLDEQdAsz0sn347-IwZmWznLM",
  authDomain: "vue-calendar-a0886.firebaseapp.com",
  databaseURL: "https://vue-calendar-a0886.firebaseio.com",
  projectId: "vue-calendar-a0886",
  storageBucket: "vue-calendar-a0886.appspot.com",
  messagingSenderId: "909121957325",
  appId: "1:909121957325:web:df8f2847216abc16c0e884",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
