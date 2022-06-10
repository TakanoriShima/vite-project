import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1B_SdXYGAY8xkoRDKMsXkoQJWstsEYuA",
  authDomain: "vite-project-dcb16.firebaseapp.com",
  databaseURL: "https://vite-project-dcb16-default-rtdb.firebaseio.com",
  projectId: "vite-project-dcb16",
  storageBucket: "vite-project-dcb16.appspot.com",
  messagingSenderId: "840282148464",
  appId: "1:840282148464:web:27b5e21d60cc06bd37eeb5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");