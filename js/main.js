// Initialize Firebase (ADD YOUR OWN DATA)
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCbIAsd1I8Nceeu5Zd9G_-FtKFheWUUHFo",
    authDomain: "wedding202-b1190.firebaseapp.com",
    databaseURL: "https://wedding202-b1190.firebaseio.com",
    projectId: "wedding202-b1190",
    storageBucket: "wedding202-b1190.appspot.com",
    messagingSenderId: "696334395874",
    appId: "1:696334395874:web:5681ebdbfd202f3cd0b1bb"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userPnumber = document.querySelector('#userPnumber');
let userMessage = document.querySelector('#userMessage');


const db = firestore.collection("contactData");

submitBtn.addEventListener('click', function() {
let userNameInput = userName.value;
let userEmailInput = userEmail.value;
let userPnumberInput = userPnumber.value;
let userMessageInput = userMessage.value;

db.doc(userNameInput)
.set({
  Name: userNameInput,
  Email: userEmailInput,
  Number: userPnumberInput,
  Message: userMessageInput

})
.then(function() {
console.log("Data Saved");
})
.catch(function(error) {
  console.log(error);
});
});
