
  var firebaseConfig = {
    apiKey: "AIzaSyBzeHu3jwUDJCsi87ltEok9gDrYTeKNYbQ",
    authDomain: "kwitter2-48d12.firebaseapp.com",
    databaseURL: "https://kwitter2-48d12-default-rtdb.firebaseio.com",
    projectId: "kwitter2-48d12",
    storageBucket: "kwitter2-48d12.appspot.com",
    messagingSenderId: "185274366801",
    appId: "1:185274366801:web:5e5779bd26fcf694f03170",
    measurementId: "G-KQG752JS2K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name;
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose="adding rooms"
        });0
        localStorage.setItem("room_name",room_name)
        window.location="kwitter_page.html"
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name - "+ room_name);
    row="<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+room_name+"</div><hr>";
    document.getElementById("output").innerHTML=row;
    //End code
    });});}
getData();
function redirectToRoomName(room_name){
    console.log(room_name);
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html"
}

