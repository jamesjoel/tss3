// let a = "rohit";
// let x = a;
// a = "gaurav";
// console.log(a)
// console.log(x)

let user = {
    name : "rohit",
    age : 25,
    city : "indore"
}





let {...x} = user;
user.name = "amar";
user.age = 30;
user.city = "mumbai";

console.log(x)
console.log(user)

