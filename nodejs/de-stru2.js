let arr = [4, 12, 30, 7];
let [...x] = arr;

arr[1] = 100;

console.log(x)
console.log(arr)