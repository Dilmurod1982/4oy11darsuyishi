// 1 vazifa

// const example = "34567";

// console.log(
//   example
//     .split("")
//     .reverse()
//     .map((item) => Number(item))
// );

// 2 vazifa

// let a = "5";

// if (a == 5) {
//   console.log("==");
// } else if (a === 5) {
//   console.log("===");
// }

// 3 vazifa

// let a = parseInt(prompt("Raqam kiriting:"));
// let b = [];
// function recursion(num) {
//   b.unshift(num);
//   num--;
//   if (1 <= num) {
//     recursion(num);
//   }
//   return [];
// }

// const result = recursion(a);
// console.log(b);

// 4 vazifa

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let toq = num
//   .filter((number) => number % 2 == 1)
//   .reduce((acc, curVal) => {
//     return (acc += curVal);
//   }, 0);
// let juft = num
//   .filter((number) => number % 2 == 0)
//   .reduce((acc, curVal) => {
//     return (acc += curVal);
//   });

// let result = [juft, toq];

// console.log(result);

// 5 vazifa

// let word =
//   "Lorem ips!um do!lor sit amet consect!etur adipisicing elit.! Aut enim accusa!ntium, officiis est qua!s aliquid cumque e!os. Adipisci mole!stias iusto esse! magni deleniti! natus a!utem!"
//     .split("!")
//     .join();

// console.log(word);

// 6 vazifa

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];

// function qoshish(array1, array2) {
//   return [].concat(array1, array2).reduce((acc, curVal) => {
//     return (acc += curVal);
//   }, 0);
// }

// const result = qoshish(array1, array2);

// console.log(result);

// 7 vazifa

// let a = "Hello world!";

// let b = a.substring(1, a.length - 1);

// console.log(b);

// 8 vazifa

// const a = [1, 2, "Hello", 4, 5, "world!", 7];

// function teskari(arr) {
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     let a = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = a;
//   }
//   return arr;
// }

// let myArray = [1, 2, "Hello", 4, 5, "world!", 7];
// let result = teskari(myArray);
// console.log(result);

// 9 vazifa

// function remove(num) {
//   if (num.endsWith("0")) {
//     return num.slice(0, -1);
//   } else {
//     return num;
//   }
// }

// let number1 = "230";

// console.log(remove(number1));

// 10 vazifa

function findMinNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return;
  }

  let minNumber = Math.min(...arr);
  return minNumber.toString(4);
}

let numbers = [15, 6, 9, 3, 12];
console.log(findMinNumber(numbers));
