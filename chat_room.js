 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBT9AVZgOWeBaR3blnxYV7GLYvKXwdkMDU",
    authDomain: "lets-chat-53cfc.firebaseapp.com",
    projectId: "lets-chat-53cfc",
    storageBucket: "lets-chat-53cfc.appspot.com",
    messagingSenderId: "239946102774",
    appId: "1:239946102774:web:2a3ea3d887ce3b53a8f9d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
});});}
getData();