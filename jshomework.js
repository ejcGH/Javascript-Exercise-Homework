// Hello You!

function hello(name) {
  return `hello ${name}`;
}

console.log(hello("elle"));

// Hello You! Part 2

function hello(name) {
  if (name) {
    return `hello ${name}`;
  } else {
    return `Hello World!`;
  }
}

console.log(hello());

// Madlib

function person(name, subject) {
  return `${name}'s favorite subject in school is ${subject}`;
}

console.log(person("elle", "science"));

// Tip Calculator

function tipAmount(bill, service) {
  if (service === "good") {
    return bill * 0.2;
  } else if (service === "fair") {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

console.log(tipAmount(50, "bad"));

//Tip Calculator 2
function totalAmount(bill, service) {
  return tipAmount(bill, service) + bill;
}

console.log(totalAmount(50, "fair"));

//Tip Calculator 3
function splitAmount(bill, service, friends) {
  return totalAmount(bill, service, friends) / friends;
}

console.log(splitAmount(40, "fair", 2));
