// *** DOM Manipulation *** //

//GetElementById()
const title = document.getElementById("main-heading"); // put the element in a variable to manipulate it
console.log(title);

//getElementsByClassName()
const listItem = document.getElementsByClassName("list-items");
console.log(listItem);

//getElementsByTagName
const listItem2 = document.getElementsByTagName("li");
console.log(listItem2);

//querySelector: The querySelector() method returns the first element that matches a CSS selector.
const container = document.querySelector("div"); // select the first match of the query given
console.log(container);

//querySelectorAll
const container2 = document.querySelectorAll("div"); // select all the matches of the query given
console.log(container2);

//example
const container3 = document.querySelector(".container-2"); // to select a class put a . before the class name
console.log(container3);
