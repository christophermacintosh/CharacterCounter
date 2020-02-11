// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", function(){

var ctstring = document.getElementById('string').value;

console.log(ctstring);
$( "#count" ).text( ctstring.length +" Characters" );

})
