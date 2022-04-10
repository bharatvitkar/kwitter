
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD7L-c5uZhSbtKaHZKieTgZ_EWXLuhA_DA",
      authDomain: "kwitter-project-class.firebaseapp.com",
      projectId: "kwitter-project-class",
      storageBucket: "kwitter-project-class.appspot.com",
      messagingSenderId: "205964313747",
      appId: "1:205964313747:web:cd06443289df4f670db966"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
