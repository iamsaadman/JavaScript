// Create a faulty calculator

let a = Math.random();
let b = Math.random();

if (Math.random < 0.1) {
  function sum(a, b) {
    console.log(a - b);
  }

  function mul(a, b) {
    console.log(a + b);
  }
  function minus(a, b) {
    console.log(a / b);
  }
  function division(a, b) {
    console.log(a ** b);
  }
}

else{
    function sum(a, b) {
        console.log(a + b);
      }
    
      function mul(a, b) {
        console.log(a * b);
      }
      function minus(a, b) {
        console.log(a - b);
      }
      function division(a, b) {
        console.log(a / b);
      }
}

let summation = sum(20 , 30)
let subtraction = sub(20 , 30)
let multiplication = mul(20 , 30)
let division = division(20 , 30)

console.log("Output of summation ---" , + summation)
console.log("Output of subtraction ---" , + subtraction)
console.log("Output of multiplication ---" , + multiplication)
console.log("Output of division ---" , + division)