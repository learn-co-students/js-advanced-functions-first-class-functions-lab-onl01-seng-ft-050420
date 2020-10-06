// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
  }
  
  const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(int) {
    return function(fare) {
      return fare * int;
    }
  }
  
  const fareDoubler = function(fare) {
    let storedFunction = createFareMultiplier(2);
    return storedFunction(fare);
  }
  
  const fareTripler = function(fare) {
    let storedFunction = createFareMultiplier(3);
    return storedFunction(fare);
  }
  
  function selectDifferentDrivers(driverArr, selectingDriverFn) {
    return selectingDriverFn(driverArr);
  }