/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой
элемент, то он учитывается и выводится отдельно.*/

let array = [4, 3, 'str', 6, null, 8, '-', 0, NaN, 'str2', 9];

getCountOddAndEven(array);

function getCountOddAndEven (array) {
    let evenCount = 0, oddCount = 0, zeroCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0)
                zeroCount += 1;
            else if (array[i] % 2 === 0)
                evenCount += 1;
            else
                oddCount += 1;
        }
    }

    console.log(`Количество четных элементов - ${evenCount}\n Количество нечетных элементов - ${oddCount}
 Количество нулей - ${zeroCount}`);
}