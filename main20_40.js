//21
const addPy = (word)=>{
    return word === "py" ? word: word + "py";
};

console.log(addPy("happy"));
console.log(addPy("py"));

//22
const removeLatter = (word, letter) => {
    return word.replace(letter,'');

};
console.log(removeLatter("gela","a"));
console.log(removeLatter("gela","A")); //it does not work to upper case 

//23
const swapFirstAndLast = (word) => {
    // Check if the string length is less than 1
    if (word.length < 1) {
      return word;
    }
    
    // If the string length is 1, return the same string
    if (word.length === 1) {
      return word;
    }
  
    // Extract the first and last characters
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
  
    // Create the new string by swapping the first and last characters
    const newString = lastChar + word.slice(1, word.length - 1) + firstChar;
  
    return newString;
  };
  
  const originalString = "hello";
  const result = swapFirstAndLast(originalString);
  console.log(result); 

  //24

  const addFirstLetterFrontAndBack = (word) => {
    // Create the new string by adding the first char to the front and back
    const firstChar = word[0];
    const newString = firstChar + word + firstChar;
  
    return newString;
  };
  
 
   
  console.log(addFirstLetterFrontAndBack("word")); 

  //25
  const isMultipleOf3Or7 = (num) => {
    if (num <= 0) {
        return false; // Ensure the number is positive
    }
    return (num % 3 === 0 || num % 7 === 0);
};
/*const isMultipleOf3Or7 = (num) => {
  return num <= 0 ? false : (num % 3 === 0 || num % 7 === 0);
};*/

console.log(isMultipleOf3Or7(21));
console.log(isMultipleOf3Or7(-3)); 
console.log(isMultipleOf3Or7(0));

//26
const modifyString = (word) => {
  if (word.length < 3) {
      return "String length must be 3 or more.";
  }
  const lastThree = word.slice(-3); // get the last 3 characters
  return lastThree + word + lastThree; // add to the front and back
};

console.log(modifyString("JavaScript")); 

//27
const startsWithJava = (str) => {
  return str.startsWith("Java");
}
console.log(startsWithJava("JavaScript"));
console.log(startsWithJava("Python"));
 
//28
const isInRange = (a, b) => {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
};

console.log(isInRange(40, 60));

//29
const isInRange2 = (a, b, c) => {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
};
console.log(isInRange(40, 60, 20));

//30
const checkAndRemoveScript = (str) => {
  if (str.substring(4, 10) === "Script") {
      return str.slice(0, 4) + str.slice(10);
  }
  return str;
};


console.log(checkAndRemoveScript("TypeScriptLang"));

//31
const findLargerOfTwo = (a, b) => {
  return a > b ? a : b > a ? b : "equals";
};
//32
console.log(findLargerOfTwo(30, 15));


  const closestTo100 = (a, b) => {
    const diffA = Math.abs(100 - a);
    const diffB = Math.abs(100 - b);

    if (diffA < diffB) {
        return a;
    } else if (diffB < diffA) {
        return b;
    } else {
        return "Both values are equally close to 100";
    }
};
console.log(closestTo100(110, 90));
//33
const isInRange3 = (a, b) => {
  return ((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) &&
         ((b >= 40 && b <= 60) || (b >= 70 && b <= 100));
};
console.log(isInRange3(39, 60));
//34

const largestInRange =(a , b) =>{
 if((a >= 40 && a <= 60)&&
   (b >= 40 && b <= 60)){
     return findLargerOfTwo(a , b)
   }else{
    return "it out of range"
   }
};

console.log(largestInRange(45, 55));

//35
const checkCharInRange = (str, char) => {
  
  const substring = str.substring(2, 5);
  
  // chaking in substing character 
  if (substring.includes(char)) {
    return "Yes";
  } else {
    return "No";
  }
};
//36
const checkLastDigit = (a, b, c) => {
  // find last digit of each number
  const lastDigitA = a % 10;
  const lastDigitB = b % 10;
  const lastDigitC = c % 10;
  
  // Check if all three last digits are the same
  if (lastDigitA === lastDigitB && lastDigitB === lastDigitC) {
      return "Yes";
  } else {
      return "No";
  }
};


console.log(checkLastDigit(1005, 12305, 153205));

//37
const transformString = (str) => {
  if (str.length < 3) {
      return str.toUpperCase();  //all characters to uppercase if length is less than 3
  } else {
      const firstThreeLower = str.substring(0, 3).toLowerCase();  // characters in lowercase
      const remainingString = str.substring(3);  // remaining part of the string
      return firstThreeLower + remainingString;  
  }
};
//38
const evaluateGrade = (totalMarks, isFinalExam) => {
  // Check if the student has a final exam and marks are >= 90
  if (isFinalExam && totalMarks >= 90) {
      return true;  
  }

  // Check if marks are in the range 89 to 100 for non-final exams
  if (!isFinalExam && totalMarks >= 89 && totalMarks <= 100) {
      return true;  
  }

  return false;  
};

console.log(evaluateGrade(95, true));

//39
const computeSum = (a, b) => {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
      return 65;  // Return 65 if the sum is in the range 50 to 80 (inclusive)
  } else {
      return 80;  // Return 80 otherwise
  }
};
console.log(computeSum(40, 30));
console.log(computeSum(100, 50));

//40
const checkEight = (a, b) => {
  // check if either number is 8, or if the sum or difference of the two is 8
  if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
      return true;  
  } else {
      return false;  
  }
};
