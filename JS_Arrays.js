let arr = [1 , 2 ,3 ,4 ,5 ,6];


// console.log(arr)
// console.log(typeof(arr))
// console.log(arr.length) 
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// arr[0] = 5666

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr.unshift("Saadman"))

// let numbers = [1,2,3,4,5]
// console.log(numbers.splice(1,2))

let a = [1,93,5,6,88]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value , index , arr) => {
//     console.log(value , index, arr)
// });

let obj = {
    a : 1,
    b: 2,
    c: 3
}

// for(const key in obj){
//     if(Object.hasOwnProperty.call(obj,key)){
//         const element = obj[key];
//         console.log(key , element)
//     }
// }

for (const value of arr){
    console.log(value)
}