let number = 10;
console.log  (number)

let car1 = 22
let car2 = "blue"
let car3 = false

console.log (car1,typeof car1) 
console.log (car2,typeof car2);
console.log (car3,typeof car3);


let car4 = null;
console.log(car4, typeof car4);

let car5;
console.log(car5, typeof car5);

let car6 = "blue" * 10;
console.log(car6, typeof car6);

console.log (car1,car2,car3,car4,car5,car6)

if (true) {
  var x = 10;
}
console.log("var:", x);

let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");


console.log (Number(null )) // бұл да сондай санга айналдырса 0 шыгады 
console.log (String(null)) // null озын кайтарады 

console.log(Number(undefined)) // undefined санга айналдыруга болмайды сондыктан NaN деп шыгады Not-a-Number деп кайтарады 
console.log(String(undefined)) // жолга айналдырган кезде озын кайтарады undefined
