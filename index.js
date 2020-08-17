// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]]

};

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    let innerFunction = function() {
        return integer*integer;
    }
    return innerFunction
};

const fareDoubler = createFareMultiplier(10);
const fareTripler = createFareMultiplier(6)

const selectDifferentDrivers = function(drivers, aFunction) {
    return aFunction(drivers)
}