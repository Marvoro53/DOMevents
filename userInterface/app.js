// Using onload on an <img> element.
//  Alert "Must be 18+" immediately after an image has been 
//  loaded:
// Add prompts that asks the age and verifies it. 
var img = new Image();
img.src = "https://pyxis.nymag.com/v1/imgs/cb9/0a6/314d3251d7f439ffd52b7e805ed1c8a11a-30-drake-new.rsquare.w1200.jpg";
img.onload = function () {
   alert("Must be 18+");
}
// age verifier
var age = prompt("Are you old enough for this? What's your age?");
console.log(age)
if (age < 18)
console.log("You may continue.");
else
console.log("Must be 18+");
