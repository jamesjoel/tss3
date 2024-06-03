let a = [10, 20, 30];

let b = a;


a[0] = "rohit";
a[1] = "amar";
a[2] = "vijay";
// console.log(a)
// console.log(b)

// a = ["rohit", "amar", "vijay"]
// b = ["rohit", "amar", "vijay"]      <------  [10, 20, 30]


let user = { name : "rohit", age : 25 };
let data = user;


user.name = "amar";
user.age = 30;

console.log(user);
console.log(data);

