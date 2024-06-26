/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
***********************************************************************/

function getFullName(person) {
  // Your code here
  // let fullName = person.firstName + ' ' + person.lastName;
  let fullName = person['firstName'] + ' ' + person['lastName'];
  return fullName;


}

let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
