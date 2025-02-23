// BOM
// console.log(window)  // ReferenceError: window is not defined

// DOM
// console.log(document)   // ReferenceError: document is not defined

console.log("Hello World")

setTimeout(() => {
    console.log("I love you");
}, 1000)

console.log(globalThis)
console.log(global)
console.log(globalThis === global)