
let a = ["a"]
let b = ["b"]

let c = a + b  //* ab

//! Spread 

//** Mergin arrays

//? Immutability
let merge = [...a, ...b] //* merge = [ 'a', 'b' ]


//! Rest 

//* the fuction can sum n numbers
function suma(...numbers){
    let count = 0
    for (let n of numbers){
        count += n
    };
    return count
}

console.log(suma(1,3))
console.log(suma(1, 3, 5, 10))