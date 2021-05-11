var firebaseConfig = {
      apiKey: "AIzaSyDQYJuSNUsRytab-hY1aklhWw3Sp9rMoPM",
      authDomain: "kwitter-b5141.firebaseapp.com",
      databaseURL: "https://kwitter-b5141-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5141",
      storageBucket: "kwitter-b5141.appspot.com",
      messagingSenderId: "810149907765",
      appId: "1:810149907765:web:12c85ed8548509c621d07c"
    };

    firebase.initializeApp(firebaseConfig);
  
    
    
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    