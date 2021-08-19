var peyajPrice = 250;
var eggPrice = 30;
var eggQuantity = 7; //eggQuantity means koyta egg lagbe
var totalPrice = eggPrice+peyajPrice;

var priceDifference = peyajPrice-eggPrice;

var totalEggPrice = eggPrice*eggQuantity;

console.log(peyajPrice);
console.log(eggPrice);
console.log(peyajPrice+eggPrice);
console.log(totalPrice);
console.log(priceDifference);
console.log(totalEggPrice);

var moneyAvailable = 100 ;
var orangePrice = 5;
var orangeQuantity =  moneyAvailable/orangePrice;
console.log(orangeQuantity);

// special addition
var firstNum = 0.1;
var secondNum = 0.2;
var total = firstNum+secondNum;
total = total.toFixed(1);
total = parseFloat(total);
// console.log(total.toFixed(1));
console.log(total);

// modulus
var mangoes = 57;
var hungfryPerson = 12;
var reminder = mangoes%
hungfryPerson;
var divide = mangoes/hungfryPerson;
console.log(reminder);
console.log(divide);