// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

const createFareMultiplier = function(fare) {
    return function() {
        return fare ** 2
    }
}

const fareDoubler = function(num) {
    return num * 2
}

const fareTripler = function(num) {
    return num * 3
}

const selectDifferentDrivers = function(array, fn) {
     return fn(array)
}