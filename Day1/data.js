
//Q.no 1)  Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000

// Answer 1 by using Arithmetic solution
// ->
// function Simpleadding(num){
// return num *(num+1)/2;

// }
// console.log(Simpleadding(50));

//  Answer by using Loops

function SimpleAdding(num){
let total = 0;
for(let i=1;i<= num; i++){
  total+=1;
}
return total;
}
console.log(SimpleAdding(4))

// function SimpleAdding(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//       total += i;
//   }
//   return total;
// }

// console.log(SimpleAdding(4))