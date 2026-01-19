// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_L0SLMeFcaWj4MOjxJ-hIYD42DzdBkYs",
  authDomain: "appsec-risk-tool.firebaseapp.com",
  projectId: "appsec-risk-tool",
  storageBucket: "appsec-risk-tool.appspot.com",
  messagingSenderId: "471482402212",
  appId: "1:471482402212:web:27d5d3f8743bf23bdd6d31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth globally available
const auth = firebase.auth();
