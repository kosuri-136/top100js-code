let person = {
    name : 'Perf',
    caste:'jain',                    /////Merge Property of Two Objects Using Object.assign()
}
let student = {
    gender:'Trans',
}

let newMan = Object.assign(person , student);
console.log(newMan);

const newObj = {...person, ...student};

console.log(newObj);