//function returnFirstTwoDrivers(){
    const returnFirstTwoDrivers = function(drivers){
         return [drivers[0], drivers[1]];    
    }
   // return variable;
//}
const returnLastTwoDrivers = function(drivers){
    return [drivers[2], drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
   return function(fare){
   return fare*integer
   }
}

const fareDoubler = function(fare){
     createFareMultiplier();
        return fare*2
    
}

const fareTripler = function(fare){
    createFareMultiplier();
       return fare*3
   
}

 function selectDifferentDrivers(drivers, onefunction){
 return onefunction(drivers)
 }
//either way the driver function is going to take in drivers so whatever either function returns will work


