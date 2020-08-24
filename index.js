// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  let firstTwo = [drivers[0], drivers[1]];
  return firstTwo
}

const returnLastTwoDrivers = function(drivers){
  let length = drivers.length;
  let lastTwo = [drivers[length-2], drivers[length-1]];
  return lastTwo
} 

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mult){
  return function(fare){
    return (fare * mult);
  }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}


const selectDifferentDrivers = function(drivers, func){
  return func(drivers)
}