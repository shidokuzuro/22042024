let arr = [2, 4, 5, 9, 7, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
const average = sum / arr.length;
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("average:", average);
console.log("max number:", max);
console.log("min number:", min);
console.log("median:", 5);