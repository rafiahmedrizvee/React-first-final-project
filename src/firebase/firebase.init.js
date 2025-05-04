
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIWqnkAnLVxqVxB4L1K5NQgLzIk0GCNrQ",
  authDomain: "final-visa-frontend.firebaseapp.com",
  projectId: "final-visa-frontend",
  storageBucket: "final-visa-frontend.firebasestorage.app",
  messagingSenderId: "1031132364119",
  appId: "1:1031132364119:web:e65b940c68e8c1266e9212"
};


const app = initializeApp(firebaseConfig);

export default app;