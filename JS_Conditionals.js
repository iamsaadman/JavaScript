console.log("Hello I am conditional tutorial")

let age = 17;
let grace = 2;

// age+= grace;
// console.log(age);
// console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age**grace);
// console.log(age%grace);


// If-Else

if(age!=18){
    console.log("You can drive");
}

else if(age == 0){
    console.log("Are you kidding?")
}

else{
    console.log("You cannot drive");
}

// Ternary Operator

a=6;
b = 8;
let c = a>b ? (a-b) : (b - a);
