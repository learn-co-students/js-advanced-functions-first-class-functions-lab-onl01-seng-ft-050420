const returnFirstTwoDrivers = function(arr){
    let firstTwo = arr.slice(0,2);
    return firstTwo; 
}

const returnLastTwoDrivers = function(arr){
    let lastTwo = arr.slice(arr.length-2,arr.length);
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(mult){
        return int * mult;
    }
};

const fareDoubler = function fareDoubler(int){
    return createFareMultiplier(int)(2)
};

const fareTripler = function fareTripler(int){
    return createFareMultiplier(int)(3)
};

function selectDifferentDrivers(arr,fn){
    return fn(arr);
}
