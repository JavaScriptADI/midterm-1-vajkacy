//61

const concatenateExceptFirstChar = (str1, str2) => {
    if (str1.length < 1 || str2.length < 1) {
        return "Both strings must have at least one character"; 
    }
    // Concatenate the two strings excluding the first character of each
    return str1.slice(1) + str2.slice(1);
};

console.log(concatenateExceptFirstChar("hello", "world"));

//62

const moveLastThreeCharsToFront = (str) => {
    if (str.length < 3) {
        return "String length must be greater than or equal to 3";
    }
    // remove the last 3 characters and the rest of the string
    const lastThreeChars = str.slice(-3);

    const remainingString = str.slice(0, str.length - 3);
    
    // Concatenate the last 3 characters at the beginning
    return lastThreeChars + remainingString;
};
console.log(moveLastThreeCharsToFront("hello"));

//63
const getMiddleThreeChars = (str) => {
    if (str.length < 3 || str.length % 2 === 0) {
        return "String length must be odd and greater than or equal to 3"; 
    }
    
    const middleIndex = Math.floor(str.length / 2);
    // get the middle three characters
    return str.slice(middleIndex - 1, middleIndex + 2);
};

console.log(getMiddleThreeChars("hello")); 

//64
const WithMatchingLength = (str1, str2) => {

    // Check if the lengths are not equal

    if (str1.length !== str2.length) {

        // Remove characters from the longer string to make both strings the same length

        const minLength = Math.min(str1.length, str2.length);
        str1 = str1.slice(0, minLength);
        str2 = str2.slice(0, minLength);
    }
    
    // Concatenate the strings
    return [str1 ,str2];
};

console.log(WithMatchingLength("hello", "worldssss"));

//65
const chakingScriptToEnd = (str) => {
   
    if (str.length < 6) {
        return "String length must be greater than or equal to 6";
    }

    // If the last 6 characters are "Script", return true
    return str.slice(str.length - 6) === "Script";  
};


console.log(chakingScriptToEnd("JavaScript"));  

//66
const cityNamesWithLosAndNew = (str) => {
    
    if (str.slice(0,3) === "Los" || str.slice(0,3) === "New") {
        return str;
    }
    return "";
};
console.log(cityNamesWithLosAndNew("LosAngeles"));

//work with array
const cityNamesWithLosAndNew2 = (arr) => {

    // loop throuhg the array and filter strings that match the conditio

    return arr.filter(city => city.slice(0,3) === "Los" || city.slice(0,3) === "New");
};

console.log(cityNamesWithLosAndNew2(["LosAngeles", "NewYork", "SanFrancisco", "Los"]));

//67

const removePFromEnds = (str) => {

    // checks if the first or last character is 'P'

    if (str.charAt(0) === 'P' || str.charAt(str.length - 1) === 'P') {

        // Remove the first and last characters

        return str.slice(1, str.length - 1);
    }
    
    return str;
};

console.log(removePFromEnds("PhelloP"));

//68
const createNewString = (str, n) => {
    
    if (str.length >= n) {

        // get the first n characters and the last n characters

        const firstPart = str.slice(0, n);
        const lastPart = str.slice(-n);

        return firstPart + lastPart;
    }
    
    return "String length must be larger than or equal to n";
};

console.log(createNewString("JavaScript", 4)); 

//69

const sumOfArray = (arr) => {
    
    if (arr.length === 3) {

        // Compute and return the sum of the three elements

        return arr[0] + arr[1] + arr[2];
    }
    return "Array must have exactly 3 elements";
};

console.log(sumOfArray([5, 10, 15]));

//70

const rotateLeft = (arr) => {

    if (arr.length === 3) {

        // Rotate the elements to the left

        return [arr[1], arr[2], arr[0]];
    }
    return "Array must have exactly 3 elements";
};
console.log(rotateLeft([4, 5, 6]));

//71

const checkFirstOrLast = (arr) => {
    if (arr.length < 1) {
        return "Array length must be at least 1";
    }
    // Check if the first or last element is 1
    return arr[0] === 1 || arr[arr.length - 1] === 1;
};

console.log(checkFirstOrLast([1, 2, 3]));

//72

const checkFirstAndLastSame = (arr) => {
    if (arr.length !== 3) {
        return "Array length must be exactly 3";
    }
    
    return arr[0] === arr[arr.length - 1];
};

console.log(checkFirstAndLastSame([1, 2, 1]));

//73

const reversArrayOf3 = (arr) => {
    if (arr.length !== 3) {
        return "Array length must be exactly 3";
    }
    
    return arr.reverse();
};

console.log(reversArrayOf3([1, 5, 8]));

//74
const updateArrayWithLargestValue = (arr) => {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    // chaking largest value between the first and last elements
    const largestValue = Math.max(arr[0], arr[arr.length - 1]);

    // set all elements of the array to the largest value
    return arr.map(() => largestValue);
};

//75

const createMidElemtsArr = (arr1, arr2) => {
    if (arr1.length !== 3 || arr2.length !== 3) {
        return "Both arrays must have a length of 3";
    }
    //get middle element
    const middleElement1 = arr1[1];
    const middleElement2 = arr2[1];

    return [middleElement1, middleElement2];
};

console.log(createMidElemtsArr ([1, 2, 3], [4, 5, 6]));

//76

const createFirstAndLastArr = (arr) => {
    //chaking if arr lenght is more then 1
    if (arr.length < 1) {
        return "Array length must be at least 1";
    }
    //chaking if arr lenght is equals then 1
    if (arr.length === 1) {
        
        return [arr[0], arr[0]];
    }
    return [arr[0], arr[arr.length - 1]];
};

console.log(createFirstAndLastArr([10, 20, 30, 40]));

//77
const containsOneOrThree = (arr) => {
    if (arr.length !== 2) {
        return "Array length must be exactly 2";
    }
    return arr.includes(1) || arr.includes(3);
};

console.log(containsOneOrThree([1, 5]));

//78

const doesNotContainOneOrThree = (arr) => {
    if (arr.length !== 2) {
        return "Array length must be exactly 2";
    }
    return !arr.includes(1) && !arr.includes(3);
};

console.log(doesNotContainOneOrThree([1, 5]));
//79

const contains30And40Twice = (arr) => {
    if (arr.length !== 2) {
        return "Array length must be exactly 2";
    }
    //filter every element =30 to new arr and give us new arr.lenght
    const count30 = arr.filter(num => num === 30).length;

    //filter every element =30 to new arr and give us new arr.lenght
    const count40 = arr.filter(num => num === 40).length;

    return count30 === 1 && count40 === 1;
};

console.log(contains30And40Twice([30, 40]));
//80

const swapFirstAndLast = (arr) => {
    // Check if the array has at least one element
    if (arr.length >= 1) {
        // Swap the first and last elements
        let temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    return arr;
};

console.log(swapFirstAndLast([10, 20, 30, 40, 50]));
