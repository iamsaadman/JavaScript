console.log("I am a tutorial on loops")

let a = 1 
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0;  i<100; i++) {
    console.log(a + i);
    
}

let obj = {
    name : "Saadman",
    role : "Programmer",
    company : "Code With Saadman"
}

for (const key in obj){
    const element = obj[key];
    console.log(key , element)
}

for (const c of "Saadman") {
    console.log(c)
}

// While_Loops

let i=5;
while(i<6){
    console.log(i)
    i++;
}