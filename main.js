const firebaseConfig = {
    apiKey: "AIzaSyDP3QMR_eRbJJZyTtVXf8kyvfF-3lJNXWY",
    authDomain: "capstone-class-website.firebaseapp.com",
    databaseURL: "https://capstone-class-website-default-rtdb.firebaseio.com",
    projectId: "capstone-class-website",
    storageBucket: "capstone-class-website.appspot.com",
    messagingSenderId: "541834385882",
    appId: "1:541834385882:web:35dad61aad45c783b0c8e3",
    measurementId: "G-96YPJY3CDF"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function login(){
  var login_name="<h2>Enter Your Name</h2><br><input type='text' id='name'>";
  var login_password="<h2>Enter Your Password</h2><br><input type='text' id='password'>"
  var row=login_name+login_password;
  document.getElementById("Login").innerHTML=row;
  localStorage.setItem("name",Name);
  localStorage.setItem("password",password);
  firebase.database().ref("/").child(Name).update({
    purpose: "adding Person"
});
firebase.database().ref("/").child(Password).update({
  purpose: "adding password"
});
}
