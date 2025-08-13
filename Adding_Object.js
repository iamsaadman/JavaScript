name = "Saadman";
age = 24;
cgpa = 3.5;
lang = ["Java", "C++", "JS", "Python"];

// console.log(age);

//How to create an object
//how to print the value of an object
//adding a constructor
//adding function inside a constructor

function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.diplay = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

var student1 = new Student("Saadman", 24, 3.65, ["Bangala", "Hindi", "Urdu"]);
var student2 = new Student("Rakib", 28, 3.75, ["Bangala", "Hindi", "Urdu"]);

var student3 = new Student("Jahid", 28, 3.0, ["Bangala", "Hindi", "Urdu"]);

// var student1 = {
//     name : "Saadman",
//     age : 24,
//     cgpa : 3.50,
//     lang : ["Java", "C++", "JS", "Python"]

// }

// var student2 = {
//     name : "Saadman",
//     age : 24,
//     cgpa : 3.50,
//     lang : ["Java", "C++", "JS", "Python"]

// }
// var student3 = {
//     name : "Saadman",
//     age : 24,
//     cgpa : 3.50,
//     lang : ["Java", "C++", "JS", "Python"]

// }
// var student4 = {
//     name : "Saadman",
//     age : 24,
//     cgpa : 3.50,
//     lang : ["Java", "C++", "JS", "Python"]

// }

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);


student1.diplay();
student2.diplay();
student3.diplay();
