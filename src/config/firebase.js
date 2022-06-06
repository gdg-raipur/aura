import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAlwSZrtuLif8Yz32fbkHEDHnp3DHKEL1I",
  authDomain: "aura-d175c.firebaseapp.com",
  databaseURL: "https://aura-d175c.firebaseio.com",
  projectId: "aura-d175c",
  storageBucket: "aura-d175c.appspot.com",
  messagingSenderId: "414686210631",
  appId: "1:414686210631:web:a45b9ff076d23e0b89df62",
  measurementId: "G-51X9LVVLD4",
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};
