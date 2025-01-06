//1
const time = new Date();

let h = time.getHours();
let m =time.getMinutes();
let s = time.getSeconds();
console.log(`Current time is: ${h} : ${m} :${s}`);

/*2 window.print() is a built-in browser method.thats whuy it wont work her
function printWindow() {
    window.print(); // Opens the browser's print dialog
  }
*/
//3
const date = new Date();
let d =date.getFullYear;

console.log(date);

//4
//this functone tacks 3 varieble and calulate triengle area

function area(x = 3,y= 4,z = 5){
 let s = (x + y + z)/2;
 let a = Math.sqrt(s*(s - x)*(s - y)*(s - z));
 return console.log (a.toFixed(2));
}
area();
area(5,6,7);

//5
//stis functione gets streeng and  argument s end make roetate it right
function slicePush(a = "w3resource"){
    //get string
    let str = a.slice(1);
    let first = a.charAt(0);
    console.log("Before: ", a);
    console.log("After: ", str + first);

    //save arr fist elemnt save in varieble

    // make tis elemnt to pus pak in arr 

}

slicePush();
//6
 function leap(year=1258){
    //chaking if year is devideble buy 4 
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        console.log("IS LeaP: " ,year);
    }else{
        console.error("Is Not LeaP" ,year);
    }
 }
leap();
leap(2000);

//7

for (let year = 2014; year <= 2050; year++) {
    // Create a new Date object for January 1st of the current year
    let date = new Date(year, 0, 1); // January is month 0 
    
    // Check if the day of the week is Sunday (0 represents Sunday)
    if (date.getDay() === 0) {
        console.log(`1st January ${year} is a Sunday.`);
    }
}
//8
/*
const randomNumber = Math.floor(Math.random() * 10) + 1;

 Prompt the user for their guess but in node js it didinot work
const uGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

// Check if the users guess matches the random number
if (uGuess === randomNumber) {
    alert("Good Work");
} else {
    alert("Not matched. The correct number was " + randomNumber);
}
*/
//9

////give today year dan date
const today = new Date();
const year =today.getFullYear();

const christmas = new Date(year, 0, 1);
if (today > christmas) {
    // If Christmas has passed, calculate for next year
    christmas.setFullYear(year + 1);
}
//  Calculate the difference in time (in milliseconds)
const timeDifference = christmas - today;

// Convert the time difference to days
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));


console.log(`There are ${daysLeft} days left until Christmas!`);

//10
const add = (a = 0, b = 0) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input: Both arguments must be numbers");
    }
    return a + b;
};

const mult = (a = 0, b = 0) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input: Both arguments must be numbers");
    }
    return a * b;
};
//11
const convertCtoF =(t) =>{
    return f =t * 9*5+32;
    
};
const convertFtoC =(t) =>{
    return c =(t -32)*5/9;
    
};
//12
//const fullUrl = window.location.href;
//console.log("Full URL:", fullUrl);
//13
let userVar = "number"; 
let userValue = 12; 
  
let objeqt = { 
  // Assign value of a user-defined variable 
  [userVar]: userValue, 
}; 
console.log(objeqt);

//14
function getFileExtension(filename) {
    // Find the last period in the filename
    const lastDotIndex = filename.lastIndexOf('.');

    // If no dot is found or it is the first character, return an empty string
    if (lastDotIndex === -1 || lastDotIndex === 0) {
        return '';
    }

    // Extract and return the extension
    return filename.slice(lastDotIndex + 1);
}
console.log(getFileExtension("document.pdf")); // Outputs: 'pdf'

//15
const N = 13;

const differenceNTo = (a) => {
    let difference;
    if (a < N) {
        difference = N - a;
    } else if (a > N) {
        difference = a - N;
    } else {
        return 0;  // When a is equal to N, the difference is 0
    }
    return difference;
};
console.log(differenceNTo(10));  
console.log(differenceNTo(20));  
console.log(differenceNTo(13));

//16
const add1 = (a = 0, b = 0) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input: Both arguments must be numbers");
    }
    if(a === b){
        return (a+b)*3;
    }else{
    return a + b;
    }
};

console.log(add1(1,1))
//17
function absoluteDifference(n) {
    const difference = Math.abs(n - 19);
    if (n > 19) {
        return difference * 3;
    } else {
        return difference;
    }
}

console.log(absoluteDifference(25)); 
console.log(absoluteDifference(15)); 
//18
const checkPair = (num1, num2) => {
    return num1 === 50 || num2 === 50 || (num1 + num2 === 50);
};


console.log(checkPair(50, 10));  
console.log(checkPair(25, 25));  
console.log(checkPair(30, 20));  
console.log(checkPair(10, 40));  
console.log(checkPair(5, 50));  
//19 
const isWithinRange = (num) => {
    return (Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20);
};
//20
const checkSign = (num1, num2) => {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
};
console.log(checkSign(5, -3));  
console.log(checkSign(-7, 10)); 
console.log(checkSign(5, 3));   
console.log(checkSign(-5, -3)); 
console.log(checkSign(0, 5));