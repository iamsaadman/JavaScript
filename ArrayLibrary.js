

var names = ["Saadman","Sakib", "JavaScript"];

//shift opposite of pop

names.shift("Saadman");
console.log(names);

//unshift opposite of push

names.unshift("Sakib");
console.log(names);


//Adding
//splice(position,remove,"name1","name2");

names.splice(2,1,"Karim","Rahim");
console.log(names);

//Removing
//splice(From,to);
names.splice(1,2);
console.log(names);


//slice

var newArr= names.slice(1,2);
console.log(newArr);