
var randomnumber1= Math.floor(Math.random() * 6) + 1;

var randomimages= "dice" + randomnumber1 + ".png";
var randomimagesrc= "images/" + randomimages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesrc);

var randomnumber2= Math.floor(Math.random() * 6) + 1;

var randomimages= "dice" + randomnumber2 + ".png";
var randomimagesrc= "images/" + randomimages;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagesrc);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML="Play 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML="Match Tie";
}
