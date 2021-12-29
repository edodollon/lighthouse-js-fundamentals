function isOdd (num) {
  if(num % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

//ANSWER to x marks the perfect shot activity
/*
 const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

 const finalPosition = function(moves) {
   let position = [0, 0];

   for (let i = 0; i < moves.length; i++) {
     if (moves[i] === 'north') {
       position[1] += 1;
     } else if (moves[i] === 'east') {
       position[0] += 1;
     } else if (moves[i] === 'south') {
       position[1] -= 1;
     } else if (moves[i] === 'west') {
       position[0] -= 1;
     }
   }

   return position;
 }

 console.log(finalPosition(moves));
*/


//ANSWER to age calculator
/*
const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

//ANSWER to howmanyhundreds
/*
function howManyHundreds(num) {
  let hundreds = Math.floor(num / 100);
  return hundreds;
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/

//ANSWER to area calculators

function calculateRectangleArea (length, width) {
  let rec = length * width;
  if(length < 0 || width < 0) {
    return;
  }
  return rec;
}

function calculateTriangleArea (base, height) {
  let tri = (base * height) / 2;
  if(base < 0 || height < 0) {
    return;
  }
  return tri;
}

function calculateCircleArea (radius) {
  let cir = Math.PI * Math.pow(radius, 2);
  if(radius < 0) {
    return;
  }
  return cir;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined