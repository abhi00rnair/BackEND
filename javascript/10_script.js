// arrays in js
let arr=[10, "piyush"];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[10]);  // undefined
arr[0]=100;
console.log(arr[0]);

arr.push(1000); // add at the end
console.log(arr);

console.log(arr.indexOf(10000)); // if not present give as -1
arr.pop();
console.log(arr);
arr.reverse();