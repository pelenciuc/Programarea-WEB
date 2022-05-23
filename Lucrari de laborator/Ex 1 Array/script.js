/*Создайте массив из n чисел и выводите его в консоль 5 разными способами:
for, while, do … while
for in
for of
forEach
map
В конце кода, пишите в комментарии свое мнение какой из способов лучше. Найдите еще один способ вывода массива.*/

const array = [1, 2, 3, 4, 5, 6];

console.log("for");
for(let i = 0; i < array.length; i++) {
	console.log(array[i])
}

console.log("while");
let index = 0;
while (index < array.length) {
	console.log(array[index])
	index++;
}

console.log("do...while");
let counter = 0;
do {
	console.log(array[counter])
	counter++;
} while (counter < array.length);

console.log("for in");
for (let item in array) {
	console.log(array[item]);
}

console.log("for of");
for (let number of array) {
	console.log(number);
}

console.log("forEach");
array.forEach((item, index, array) => {
	console.log(item);
})

console.log("map");
array.map(function(item, index, array) {
  console.log(item)
});


console.log("Alta metoda:")
array.filter(function(number) {
	console.log(number)
})