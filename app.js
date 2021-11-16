// Question 1
// var names = new Date()
// document.write(names)


// Question 2
// function addition(value1,value2){
//     var value = value1 + "" +value2
//     alert(value);
//     return value;
// }
// addition("Muhammad","Razza")
// console.log(addition("Muhammad","Razza"))

// Question 3
// function add(num1,num2){
// console.log(num1+num2)
// }
// var num1 = +prompt("Enter the first number")
// var num2 = +prompt("Enter the second number")
// add( num1 , num2 )


// Question 5
// function addition(value1,value2){
//         var value = Math.pow(value1,value2)
//         alert(value);
//         return value;
//     }
//     addition("70","6")

//     console.log(addition("70","6"))


//   Question 6
// var number= prompt("Please enter number")
// fact =1;
// function factr(n){
//     if(n>number){
//         return;
//     }
//     var tmp = fact;
//     fact = fact * n;
//     n++;
//     factr(n);
// }
// factr(1)
// console.log('the fact of' +number+ 'is ' + factr);


// Question 7
// var num = +prompt("enter a number")
// function count(){
// for( i=1;i<=num;i++){
 
// }
// }


// Question 9
// "use strict";
// const prompt = require("prompt-sync")({sigint:true})

// let length = parseFloat(prompt("Enter the length : "));
// let width = parseFloat(prompt("Enter the width : "));

// let area = length * width;
// let perimeter = (length + width) * 2;

// console.log('Area : ${area}');
// console.log('perimeter : ${area}');


// Question 10
// function isPalindrome(str){
//     var reversed = '';
//     for(var char of str){
//         reversed = char + reversed;

//     }
//     return reversed === str;
// }
// console.log(isPalindrome('dad'));


// Question 11
function up(str){
    var na= str.split('')
    var array=[]
    for (var x=0;x<na.lenght;x++){
        array.push(na[x].charAt(0).toUpperCase()+na[x].slice(1))
    }
    return array.join('')
}
console.log(up("the quick brown fox"))