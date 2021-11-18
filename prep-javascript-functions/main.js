function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greet = getGreeting('World!');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var add = addAndMultiplyBy5(10, 5);
console.log(add);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multi = multiplyAndDivideBy5(35, 10);
console.log(multi);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  return 2 * 3.14159 * radius;
}

var circle = getCircleCircumference(5);
console.log(circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var myName = getFullName('Juan', 'Ramirez');
console.log(myName);

function cube(number) {
  return number * number * number;
}

var myCube = cube(5);
console.log(myCube);
