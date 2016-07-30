var x = "Hello World!"; // type of string
var y = new String("How are you?"); // type of object
var z = "Welcome!";

(x == y) //returns true because values are same
(x === y) //returns false because type are not same
(x === z) //returns true because same tye and values

// *****************String Functions********************

var len = x.length // length of string x
var idx = x.indexOf("World"); // the first position of the text in string
var slc = x.slice(6,10); // "World" in string X , negative vales are meant to count from behind
var sbs = x.substring(6,10); // "World" in string X, difference is negative values are not accepted
var sbst = x.substr(6,5); //"World" start and length of the string to be returned
var rep = x.replace("World","Universe"); // replaces world with Universe in string x
var upp = x.toUpperCase(); // Converts string to uppercase characters
var low = x.toLowerCase(); // Converts string to lowercase characters
var con = x.concat(" ",z); //seperator and it is concatenated with z string
var cha = x.charAt(0); // "H" character at position 0
var cod = x.charCodeAt(0); // Unocode character at 0 position
var arr = x.split(" "); //Convert string to array when " "(space occurs)
var tri = x.trim(); //removes unwanted starting or ending spaces
var tril = x.trimLeft(); // removes unwanted starting spaces
var trir = x.trimRight(); //removes unwanted ending spances

//********************Hoisting***********************

var p = 8; // Initialization

element = document.getElementById("test"); 
element.innerHTML = p + " " + q;  //q will be undefined because only declerations will be hoisted not initializations

var q = 7; // Initialization

// ***************************

// More to Come!!