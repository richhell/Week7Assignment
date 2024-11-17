// Week 7 JavaScript Assignment

// Question 1

let array1 = [3, 9, 23, 64, 2, 8, 28, 93];
let lastMinusFirst = array1[array1.length - 1] - array1[0];
console.log("Last - First: "  + lastMinusFirst);

array1.push(42);
console.log(array1);
let lastMinusFirst2 = array1[array1.length - 1] - array1[0];
console.log("Last - First (again): "  + lastMinusFirst2);

let numSum = 0 ;
for (let i = 0; i < array1.length; i++) {
    numSum += array1[i]; 
}
console.log("The average age is: " + numSum / array1.length); 

// Question 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let namesLength = 0;
for (let i = 0; i < names.length; i++) {
    
    namesLength += names[i].length;
    averageNameLength = namesLength / names.length;
}
console.log("The Average Name Length is: " + averageNameLength )

let allNames = " "; 
for (let i = 0; i < names.length; i++) {
    allNames = allNames.concat(names[i] + " ");
    console.log("Concatenated Names:", allNames) 
}
// Question 3
// Using the names array above:
console.log(names[names.length - 1]);

//Question 4
// Using the names array above:
console.log(names[0]);

// Question 5

