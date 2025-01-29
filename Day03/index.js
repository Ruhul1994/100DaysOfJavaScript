// javaScript Object
const person = {
    name: "Ruhul",
    age:30,
    job:"web Developer",
    greet: function(){
        return `Hello, my name is ${this.name} and I am a ${this.job}.`
    }
}
console.log(person.greet());

const person1 = {name: "Ruhul"};
const person2 = {name: "John"};

function introduce(){
    console.log(`hello, my name is ${this.name}`);
}
introduce.call(person1);
introduce.apply(person2);
const boundFunc = introduce.bind(person1);
boundFunc()

// Create an object car with properties like brand, model, and a method getDetails() that returns "This is a brand model" using this.

const car = {
    brand:"BMW",
    model: "x5",
    getDetails(){
        return `This is a ${this.brand} ${this.model}.`
    }
}

const car2 = {
    brand:"Mercedes",
    model: "GLS63"
}

const carDetails = car.getDetails.bind(car2);
console.log(carDetails());

const numbers = [1,2,3,4,5,6,7,18,9];
const maxNumber = Math.max.apply(null,numbers)
console.log(maxNumber);