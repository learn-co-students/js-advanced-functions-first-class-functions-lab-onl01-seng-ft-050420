const returnFirstTwoDrivers = (ary) => ary.slice(0, 2)

const returnLastTwoDrivers = (ary) =>  ary.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => (fare) => int * fare

// const createFareMultiplier = function (int) {
//     return function (fare) {
//         return int * fare
//     }
// }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, fn) => fn(drivers)