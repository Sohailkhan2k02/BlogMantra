import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSOYU239tJy3DxNs95Lb1g6IPThasQsvM",
  authDomain: "blogmantra-c7150.firebaseapp.com",
  projectId: "blogmantra-c7150",
  storageBucket: "blogmantra-c7150.appspot.com",
  messagingSenderId: "204522028313",
  appId: "1:204522028313:web:85361c04f3173622b9d988",
  measurementId: "G-ZMB29KMP8Y"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
