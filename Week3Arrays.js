// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// Do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed!
console.log("Question 1a: Create an array called ages that contains the following values. Programmatically subtract the value of the first element in the array from the value in the last element of the array ")

let agesArray = [3, 9, 23, 64, 2, 8, 28, 93]
function firstMinusLast(a){
    let lastNumber = a[a.length - 1]      //Pulls last number
    let firstNumber = a[0]                //Pulls first number
    return lastNumber - firstNumber       //Subtracts the two and returns the result
}
console.log('The last number of the string is ' + agesArray[agesArray.length -1] + ' and the first number of the string is ' + agesArray[0]);
console.log(agesArray[agesArray.length - 1] + ' - ' + agesArray[0] + ' = ' + firstMinusLast(agesArray));

console.log('\n')
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log("Question 1b: Add a new age to your array and repeat the step above to ensure it is dynamic. ");

agesArray.push(72);  //New number added to array
console.log('The last number of the string is ' + agesArray[agesArray.length -1] + ' and the first number of the string is ' + agesArray[0]);
console.log(agesArray[agesArray.length - 1] + ' - ' + agesArray[0] + ' = ' + firstMinusLast(agesArray));

console.log('\n')
// Use a loop to iterate through the array and calculate the average age. 
console.log("Question 1c: Use a loop to iterate through the array and calculate the average age.");
var total = 0;
for (i=0; i < agesArray.length; i++){
    total += agesArray[i]   //the for loop takes the var total and adds the current index to total and then moves on to the next number and repeats until no numbers remain in array
}
var average = total / agesArray.length; 
console.log(average);

console.log('\n')
// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log("Question 2a: Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob");
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log('\n')
// Use a loop to iterate through the array and calculate the average number of letters per name. 
console.log('Question 2b: Use a loop to iterate through the array and calculate the average number of letters per name.');
let totalLetters = 0
for (i=0; i < names.length; i++){
    totalLetters += names[i].length      //This for loop is taking the variable totalLetters and adding the length of each name to totalLetters until no names remain.
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

console.log('\n')
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
console.log('Question 2c: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');

let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; // this section of the loop is combining the names in the array until there are no more names
  if (i < names.length - 1) {
    concatenatedNames += ' ';  //this section is adding a space unless the current selection is the last one in the array then this step will be skipped.
  }
}
console.log(concatenatedNames);
console.log('\n')
// How do you access the last element of any array?
console.log('Question 3: How do you access the last element of any array? ');
console.log('A quick way to access the last element of an array is as follows. exampleArray[exampleArray -1] this is telling the code to find out how many elements there are and targeting the last one using -1 because the index begins at 0.')

console.log('\n')
// How do you access the first element of any array?
console.log('Question 4: How do you access the first element of any array?');
console.log('You would use the index number 0 to target the first element. For example: exampleArray[0].');

console.log('\n')
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log('Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.')

var nameLengths = []
for (let i = 0; i < names.length; i++ ){    //run through the names array until there are no more
nameLengths.push(names[i].length)  //push the lenghth of the current name to nameLengths array
}
console.log(nameLengths);

console.log('\n')
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log('Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ');

let nameLengthSum = 0
for(let i = 0; i < nameLengths.length; i++){
nameLengthSum += nameLengths[i] //adds total of each index of nameLengths until no more remain
}
console.log(nameLengthSum);

console.log('\n')
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log ('Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. ')

function repeater (word, n){   
    let repeat = ""
    for (i = 0; i < n; i++){
        repeat += word     //Adds what ever the var word is to the variable repeat for as many times as n is and then returns it as the variable repeat
    }
    return repeat
}
console.log(repeater('Hello', 3))

console.log('\n')
// Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
console.log ('Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.')

function fullName(fn, ln){
    return fn + ' ' + ln
}
console.log(fullName('Austin', 'Carl'))
console.log('\n')
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log('Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')

let numberArray = [6, 8, 8, 99, 600]
let over100 = 0
function isItOver(){
    for (i = 0; i < numberArray.length; i++ ){
        over100 += numberArray[i]       //adds all numbers in the numberArray array to the var over100
    }if (over100 > 100){               //if over100 is greater than 100 it returns true else it returns false
        return true
    }else{
        return false
    }
}
console.log(isItOver(numberArray))

console.log('\n')
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('Question 9: Write a function that takes an array of numbers and returns the average of all the elements in the array.')

let anotherOne = [0, 10, 20, 30, 40, 50, 60, 70, 80]
let numberSum = 0
function averageNumber (arrayHere){
    for (i = 0; i < arrayHere.length; i++ ){
        numberSum += arrayHere[i]   
    }return numberSum / arrayHere.length
}
console.log(averageNumber(anotherOne))
console.log('\n')
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log('Question 10: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')
function isItGreater(arr1, arr2){
   let arr1tot = 0
   let arr2tot = 0
   for (i = 0; i < arr1.length; i++){           //lines 146 - 151 are calculating the totals of the first and second array sepearately into the arr1tot and arr2tot variables
    arr1tot += arr1[i]
   } 
   for (i=0; i < arr2.length; i++){
    arr2tot += arr2[i]
   }
   if (arr1tot > arr2tot){         //if the first array is bigger than the second it will return true or else it will return false (if the values are equal they will return false)
        return true
   }else{ 
    return false
   }
}
console.log(isItGreater(anotherOne, numberArray))

console.log('\n')
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('Question 11: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')

var isHotOutside = true
var moneyInPocket = 10.51

function willBuyDrink (a,b){
    if (a === true && b > 10.50){
        return true
    }else {
        return false
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket))

console.log('\n')
// Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
// This will be a function that will determine if I can go out as long as the bills are paid and i have enought money in the bank and there are more than 2 hours before bedtime
console.log('Question 12: Create a function of your own that solves a problem.   In comments, write what the function does and why you created it')
var billsPaid = true
var moneyInBank = 500.01
var hoursBeforeBed = 2.5

function canIGoOut (a, b, c){
    if (a===true && moneyInBank >= 500.00 && hoursBeforeBed > 2){
        return 'Yes'
    }else{
        return 'No'
    }
}
console.log(canIGoOut(billsPaid, moneyInBank, hoursBeforeBed));
