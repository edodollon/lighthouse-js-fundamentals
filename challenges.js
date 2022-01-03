// const smartGarbage = function (trash, bins) {
//   let sort = bins;
//   sort[trash] += 1;
//   return sort;
// }

// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


// const carPassing = function (cars, speed) {
//   let newTime = Date.now();
//   let newCar = {time: newTime, speed: speed};
//   cars.push(newCar);
//   return cars;
// }

// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ]

// const speed = 38

// carPassing(cars, speed)


// const judgeVegetable = function (vegetables, metric) {
//   let highestMetric = vegetables[0][metric];
//   let winner = vegetables[0].submitter;

//   for (let i = 1; i < vegetables.length; i++) {
//     if (vegetables[i][metric] > highestMetric) {
//       highestMetric = vegetables[i][metric];
//       winner = vegetables[i].submitter;
//     }
//   }

//   return winner;
// }

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'redness'

// judgeVegetable(vegetables, metric) 

function range(start, end, step) {
  let numArray = [];

  for (let i = start; i <= end; i += step) {
    numArray.push(i);
    if (step === 0 || step < 0) {
      return [];
    } else if (start > end) {
      return [];
    } else if (start === undefined || end === undefined || step === undefined) {
      return [];
    }
  }

  return numArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));