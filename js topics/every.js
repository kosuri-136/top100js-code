let marks=[44,55,66,77,88,99];
let pass=marks.every(function(mark){
    console.log(mark);
    return mark>35;
});
console.log(pass);