/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент
и возвращает сумму этих двух чисел. Выведите в консоль результат.*/

const sum = addArg(11);
console.log(sum(4));

function addArg(num1) {
    return num2 => num1 + num2;
}