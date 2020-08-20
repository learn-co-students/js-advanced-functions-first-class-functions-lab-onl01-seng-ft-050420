// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    let a = []
   a.push(array[0])
   a.push(array[1])
   return a
}
const returnLastTwoDrivers = function(array) {
    let i = array.length
    let a = []
   a.push(array[i-2])
   a.push(array[i-1])
   return a
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
   return (function(fare) {
    return fare * int;
})
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, f) {
return f(array)
}