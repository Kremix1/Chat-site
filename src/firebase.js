import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDS7lGPXQ0C4mnCm7fXB0DqjZjYH8bn1AQ",
    authDomain: "chat-d0d7d.firebaseapp.com",
    projectId: "chat-d0d7d",
    storageBucket: "chat-d0d7d.appspot.com",
    messagingSenderId: "484576582091",
    appId: "1:484576582091:web:b5439413a7bfd82d12be4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore()