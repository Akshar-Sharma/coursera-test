var x = "Hello World!"

var message = "a god"
console.log("Akshar = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
	document.getElementById("head1").innerHTML="Akshar is cool!";
	b();
}

function b () {
	console.log("b: message = " + message);
}

a();

var y;
console.log(y);

if (y == undefined) {
  console.log("y is undefined");
}

y = 5;
if (y == undefined) {
  console.log("y is undefined");
}

else {
  console.log("y has been defined");
}
console.log((5 + 19) / 3)
j=false;
if (j==false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}

else {
  console.log ("All false");
}

h=true;
i=false;
if (h==true && i==false) {
  console.log("All true");
}