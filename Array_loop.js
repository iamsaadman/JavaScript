var num = [10,20,30,40,50];

for (var i=0; i<5;i++){
    console.log(num[i]);
    sum+=num[i];
}

console.log(sum);


var num = new Array();

for(var i = 0; i<5 ; i++){
    num[i] = parseInt(prompt("Enter a number :"));

}

var sum = 0;
for(var i = 0; i<5;i++){
    console.log(num[i]);
    sum+=num[i];
}

console.log("Sum = "+sum);