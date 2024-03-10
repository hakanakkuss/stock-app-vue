import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDn6uIL4FKRDj4ckLoIV11_oplpsW_mdm0",
    authDomain: "stocksapp-9fa79.firebaseapp.com",
    databaseURL: "https://stocksapp-9fa79-default-rtdb.firebaseio.com",
    projectId: "stocksapp-9fa79",
    storageBucket: "stocksapp-9fa79.appspot.com",
    messagingSenderId: "159214187307",
    appId: "1:159214187307:web:e4ceb279e95090a5e84b6e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
