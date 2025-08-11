 

//Array - is an object; collection of variables

// var name1, name2, name3, name4, name5;

// name1 ="Saadman";
// name2 ="Sakib";
// name3 ="Rakib";
// name4 ="Jahid";
// name5 ="Cyrus";

console.log(names);

var names = new Array(5);

names[0] ="Saadman";
names[1]="Sakib";
names[2] ="Rakib";
names[3]="Jahid";
names[4]="Cyrus";
console.log(names.length);
names.push("Bangladesh");
names.pop();

console.log(names);

var c1 = ["Bangladesh","Malaysia"];
var c2 = ["Pakistan", "Nepal"];
var country = c1.concat(c2);

console.log(country);