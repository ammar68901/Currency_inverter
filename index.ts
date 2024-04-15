#! /usr/bin/env node
import inquirer from "inquirer"
const currency :any =  {
    USD : 1,
    EURO:0.91,
    PKR:280,
    GBP:0.76,
    INR:74.57,
    DIN:0.37,
}
let userAnswer= await inquirer.prompt([
    {
   name:"from",
   message:"Enter from currency",
   type:"list",
   choices:["USD","GBP","PKR","GBP","INR","DIN"]
},
{
  name:"to",
  message:"Enter to currency",
  type:"list",
  choices:["USD","GBP","PKR","GBP","INR","DIN"]
},
{
    name:"amount",
    message:"Enter your amount",
    type:"number",
}
]);

let fromAmount =currency[userAnswer.from];

let toAmount= currency[userAnswer.to];
let fullAmount=userAnswer.amount;
let baseAmount= fullAmount / fromAmount
let finalAmount = baseAmount * toAmount;
console.log(finalAmount);















