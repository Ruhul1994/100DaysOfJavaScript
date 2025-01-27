<h1>100 Days of JavaScript 🚀 </h1>

<h3>Welcome to my 100 Days of JavaScript journey! 🎯 My goal is to master intermediate to advanced JavaScript concepts step by step, building strong skills for real-world development and job readiness.<h3>
<h2>📅 Day 1: Variables, Scopes, and Closures</h2>
<h3>What I Learned:

    The difference between var, let, and const.
    Understanding function scope, block scope, and global scope.
    How closures work and why they are powerful for maintaining state in JavaScript.

Code Snippets:
Scope Differences

function testScope() {
  if (true) {
    var x = 10; // Function-scoped
    let y = 20; // Block-scoped
    const z = 30; // Block-scoped
  }
  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}
testScope();

Closure Example

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

📂 Repository Structure

📁 100DaysOfJavaScript/
├── 📂 Day01/
│   ├── scope-and-closure.js
│   └── README.md
└── ... (More days coming soon!) </h3>

<h2>🎯 Goals for this Journey </h2>

<h3>    Master intermediate to advanced JavaScript concepts.
    Build a strong portfolio of coding exercises and projects.
    Document daily progress to showcase my learning journey. </h3>

<h2>📝 Follow My Journey:</h2>

   <h3> LinkedIn – Sharing my daily progress and reflections.
    GitHub – Code and learning materials.

Feel free to explore and share feedback! Let's grow together. 💻✨ </h3>
