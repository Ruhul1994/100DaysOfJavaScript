// function testScope(){
//     if(true){
//         var x = 10;
//         let y = 20;
//         const z = 30;
//     }
//     console.log(x);
//     //console.log(y); // ReferenceError: y is not defined
//     //console.log(z); // ReferenceError: z is not defined
// }

// testScope();

function outer(){
    let count = 0;
   return function inner(){
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2