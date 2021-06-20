
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAdtLz3_V55kgySCD_nwqNPoZUsXKgSlxs",
      authDomain: "class-test-a8e2f.firebaseapp.com",
      projectId: "class-test-a8e2f",
      storageBucket: "class-test-a8e2f.appspot.com",
      messagingSenderId: "244674113463",
      appId: "1:244674113463:web:373622df22279e4acc4232"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addroom()
      {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
         });

         localStorage.setitem("toom_name", room_name);

         window.location = "kwitter_page.html"
      }

      console.log("Room Name - " + Room_names);
      row = "div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
         window.location = "kwitter_page.html";

}
 function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "kwitter.html"
 }