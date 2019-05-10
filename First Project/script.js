/****************
Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules

var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/*****************
 * Variable mutation and type coercion


 var firstName = 'John';
 var age = 28;

 // Type Coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
job = 'Teacher';
//isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job 
+ '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job 
+ '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/*********************************
 * Basic operators

var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*********************************************************
 * Operator precedence


var now, yearJohn, fullAge;
now = 2018;
yearJohn = 1989;
fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/** 
var johnBMI, johnMass, johnHeight, MarkBMI, MarkMass, MarkHeight, isMarkBmiHigher;

johnMass = prompt('What is John\'s mass?');
johnHeight = prompt('What is John\'s height?');
johnBMI = johnMass / (johnHeight * johnHeight);

markMass = prompt('What is Mark\'s mass?');
markHeight = prompt('What is Mark\'s height?');
markBMI = johnMass / (markHeight * markHeight);

isMarkBmiHigher = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);
*/

/************************
 * If/else statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}
END OF LECTURE 14*/


/**
 * Boolean logic
*/
var firstName = 'John';
var age = 15;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}else {
    console.log(firstName + ' is a man.');
}