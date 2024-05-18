let obj = {
    name : "rohit",
    age : 25,
    city : "indore"
}

let {...x} = obj;

obj.name = "amar";

console.log(x)
console.log(obj)