function greet() {
  console.log("Hello folks!");
}

greet();

function greet(name) {
  console.log("Hello " + name);
}

greet("Shiv");

var fullname = function (fname, lname) {
  console.log("Hello " + fname + " " + lname);
};

fullname("Shiv", "Singh");
