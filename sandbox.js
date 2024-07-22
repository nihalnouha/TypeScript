// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
//lesson3
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// character = 'luigi';
// age = 40;
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(7.5));
//lesson4
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names);
//  names.push(3);
// names[1] = 3;
var numbers = [10, 20, 12, 15];
numbers.push(25);
console.log(numbers);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
console.log(ninja);//ninja.age is changed to 40 and ninja.name also changed

// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
console.log(ninja);
