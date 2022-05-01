//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD7L-c5uZhSbtKaHZKieTgZ_EWXLuhA_DA",
      authDomain: "kwitter-project-class.firebaseapp.com",
      databaseURL: "https://kwitter-project-class-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-class",
      storageBucket: "kwitter-project-class.appspot.com",
      messagingSenderId: "205964313747",
      appId: "1:205964313747:web:cd06443289df4f670db966"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
