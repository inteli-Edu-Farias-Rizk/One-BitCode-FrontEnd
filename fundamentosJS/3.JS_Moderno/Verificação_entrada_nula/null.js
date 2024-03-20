let a = 0

let b = a || 42

console.log({ a, b })
// If the user gives fill the gap with a null information, the program will assign a standard value in this case the 42

//if a = null b == 42

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})