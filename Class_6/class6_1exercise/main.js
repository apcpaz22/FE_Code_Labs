let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();// Hi, Pete

// you're using let so it's replaced by Pete, since it reads from top to bottom pete is the local replacement