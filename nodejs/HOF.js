let data = [7, 13, 9, 8, 5, 3, 9, 14, 16];

// let data2 = data.filter((item, index, arr)=>{
//                 return item != 14;
//             })

// console.log(data2)


let ans = data.reduce((acu, item, index, arr)=>{
    return acu*item;
})

console.log(ans)