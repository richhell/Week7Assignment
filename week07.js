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

let nameLengths = [];
for (let i = 0; i < names.length; i++ ) {
    nameLengths.push(names[i].length)
}
console.log("The lengths of the names is:", nameLengths)

// Question 6
let totalNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++ ) {
    totalNameLengths += nameLengths[i];
}
console.log("The total length of all the names is:", totalNameLengths)

// Question 7

function repeatWord(word, n) {
    console.log("Word:", word, "Repeat:", n, "times");
    let echo = word.repeat(n); 
    console.log(echo);
}
repeatWord("Yaddah", 4)

// Question 8

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}
fullName("Arthur", "Dent")

// Question 9

let array2 = [4, 25, 32, 17]
let array3 = [1, 17, 37, 51, 99]

function greaterThanHundred(arr) {
    let arraySum = 0
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i]; 
    }
    if (arraySum > 100) {
        console.log(arraySum, "true");
        return true; 
    } else {
        console.log(arraySum, "false");
        return false;
    }

}
greaterThanHundred(array2)
greaterThanHundred(array3)

// Question 10

function numbers(arrnums) {
    let arraySum = 0;
    for (let i = 0; i < arrnums.length; i++) {
    arraySum += arrnums[i];
    }
    console.log("The average of the numbers in the array is:", arraySum / arrnums.length);
    
}
 numbers(array3)

 // Question 11

 function compareArray(arr1, arr2) {
    let arr1Sum = 0;
    let arr2Sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1Sum += arr1[i]; 
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2Sum += arr2[i]; 
    }

    let arr1Avg = arr1Sum / arr1.length;
    let arr2Avg = arr2Sum / arr2.length;
    if (arr1Avg > arr2Avg) {
        console.log(arr1Avg, ">", arr2Avg, "True")
        return true; 
    } else {
        console.log(arr1Avg, ">", arr2Avg, "False")
        return false;
    }

 }

 compareArray(array3, array2)

 // Question 12

 function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == "yes" && moneyInPocket > 10.5) {
        console.log("true - I will buy a drink.");
        return true;
    } else {
        console.log("false - I will not buy a drink.");
        return false;
    }
 }

 willBuyDrink("yes", 10)

 // Question 13

 
