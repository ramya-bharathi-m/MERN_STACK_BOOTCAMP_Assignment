console.log('Hello World!!');

let age = 10;
age = 20;
console.log(age);

// const ageq = 10;
// ageq = 20;
// console.log(ageq);

//arrays
let students = ['ast','bst','cst'];
console.log(students);

students.push('dst');
console.log(students);

students.pop();
console.log(students);

//splice(start index, delete count)

students.splice(1,1);
console.log(students);

//splice(start index, delete count, add items)
students.splice(1,0,'newst');
console.log(students);

let user = {
    name:'gans',
    age:24,
    address:{
        first:878,
        city:'asdf',
        pincode:990890
    },
    interest: ['sdf','sfd']
}
console.log(user.name);
console.log(user.address);
console.log(user.interest);