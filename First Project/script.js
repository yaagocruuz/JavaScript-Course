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
 */

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