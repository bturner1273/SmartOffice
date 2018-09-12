var count = 0;
var ledStatus = 0;

var databaseRef = firebase.database().ref();
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var heatIndex = document.getElementById("head-index");
var writeLCD = document.getElementById("writeLCD");

document.getElementById("toggleLightButton").addEventListener("click", function(){
  if(count % 2 == 0){
    ledStatus = 1;
  }else ledStatus = 0;
  count++;
  databaseRef.child("status").set(ledStatus);
});


document.getElementById("textWriteButton").addEventListener("click", function(){
  databaseRef.child("message").set(writeLCD.value);
  writeLCD.value = "";
});


window.onload = function(){
  databaseRef.on("value", function(snapshot){
    temp.innerHTML = snapshot.child("temp").node_.value_;
    humidity.innerHTML = snapshot.child("humidity").node_.value_;
    heatIndex.innerHTML = snapshot.child("hif").node_.value_;
  });
};
