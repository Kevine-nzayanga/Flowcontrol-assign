// Write a function that accepts an array of strings 
// and console.logs each element using a for loop.

let array = ["dog","man","with","them"]
function printing(array) {
    for (let letter of array){
        console.log(letter);
    }
    
}
printing(array);

// Write a function that accepts an array of numbers and uses
//  the forEach() method to console.log each number multiplied by 2.
let numbers = [45,23,87,1,567];

function method(numbers) {
    numbers.forEach(n => { n*2
    console.log(n*2);
    });
}
method(numbers);

// Write a function that takes in an array of numbers 
// and consoles the first four items multiplied 
// by 8 and the last two added by 5. Console the array with the new values
let digits = [4,8,12,67,9,123];
let newArray=[];
function multipliers(digits) {
    for(let e = 0; e< digits.length; e++) {
        let ele = digits[e]*8
        console.log({ele});
        newArray.push(ele)
        if (e===3) {
            break
        }
       num1 = digits[digits.length-1]+5
       num2 = digits[digits.length-2]+5 
      
    //    newArray.push(num2)
    }
    newArray.push(num1,num2)
    console.log({newArray});
     
    // console.log({Arr2});
}
multipliers(digits)

// Write a function that takes in the following array 
// and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [23,67,12,1,467,789];
let x =0;
function iteration(arrNum) {
    while (x<=4) {
        console.log(arrNum[x]);
        x++;
        
    }
    
}
iteration(arrNum)

// Write a function that takes in an array of strings
//  and use a continue statement when the item is at the second index

let fruits= ['apple','plum','banana','strawberries','kiwi']
function second(fruits) {
  
    for (let f= 0; f < fruits.length; f++) {
        if(f===2){

        continue 
    }
    console.log(fruits[f]);
    }
    
}
second(fruits)