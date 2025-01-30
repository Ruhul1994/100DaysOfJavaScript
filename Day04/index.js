// const person = {
//     greet(){
//         return "Hello! Ruhul";
//     }
// }
// const user = Object.create(person);
// console.log(user.greet());

// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// const Ruhul = new person("student","Ruhul", 30,);

// console.log(Ruhul.name);
// console.log("Ruhul.age");
// person.prototype.greet = function(){
//     return `hello, my name is ${this.name}`;
// }
// person.prototype.occupation = "web-developer"
// console.log(Ruhul.greet());
// console.log(Ruhul.occupation)

// Create a constructor function for Student with properties like name and grade.

function Student(name, grade){
    this.name = name;
    this.grade =grade;
}

// Add a method to Student.prototype that returns the student's details.
Student.prototype.details = function(){
    return `student ${this.name} and class ${this.grade}`
}

const roll_1 = new Student("Mina", 4);
// console.log(roll_1.details());

const car ={
   type:"vehicle",
   start(){
    console.log("Engine started");
   }
}

const myCar = Object.create(car)

console.log(myCar.type);
console.log(myCar.start());