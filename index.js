// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(num){ return num * num }
}

const fareDoubler = (num) => {
    return createFareMultiplier()(num) / 5
}

const fareTripler = (num) => {
    return createFareMultiplier()(num) / 4
}

function selectDifferentDrivers(drivers, drivefunc) {
    return drivefunc(drivers)
}