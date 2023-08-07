//Galal Moahmed Galal
//Back end Nodejs G1 Mansoura University
//task js 0.1

// 1- Check The Number Is Even or Odd


for(let number = 0 ; number<=10 ; number++)
{
    if(number % 2 == 0) {
        console.log("The number is even.");
    }
    
    else {
        console.log("The number is odd.");
    }
    
}


// 7- check whether a given positive number is a multiple of 5 or a multiple of 8.


function test(x) 
{
  if (x % 5 == 0 || x % 8 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test(12));
console.log(test(14));
console.log(test(10));
console.log(test(11));


//8- find the largest of three given integers

function max_of_three(x, y, z) 
 {
 let max_val = 0;
  if (x > y)
  {
    max_val = x;
  } 
  else
  {
    max_val = y;
  }

  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
console.log(max_of_three(10,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,500,450));



//9- Compute The sum of the numbers from 1 to 10 

let sum =0;
for(let n =1 ; n<= 10 ; n++){
     sum +=n ; 
}
console.log(sum);

//13- print the sum of two numbers 

let num1= 15;
let num2=20;
let Sum = num1 + num2;

console.log(Sum);


//15- Create Simple Calculator (+ , - , * , /) 

const operator =prompt();
const number1 =parseFloat(prompt());
const number2 =parseFloat(prompt());
let result=0;
if(operator =='+'){
result = number1 + number2
}
else if(operator == '-'){
    result = number1 - number2
}
else if(operator == '*'){
    result = number1 * number2
}
else if(operator == '/'){
    result = number1 / number2
}

console.log(`${number1} ${operator} ${number2} = ${result}`)
