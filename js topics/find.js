let place = ["hyderabad","vangalore","chennai","pune","vune"];

let loc=place.find(function(ele,index,arr){
    return ele.startsWith("v");
});

let locs=place.filter(function(ele,index,arr){
    return ele.startsWith("v");
});

let locas=place.some(function(ele,index,arr){
    return ele.startsWith("j");
});
console.log(loc);
console.log(locs);
console.log(locas);