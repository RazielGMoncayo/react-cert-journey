
const arrayNumbers = [1, 2, 3]

for (let arrayNumber of arrayNumbers){
    arrayNumber *= 2
}

//* Map  
// create a new array, and the old arrays is not modified 
let newArrayNumbers = arrayNumbers.map( numbers => numbers * 2 ) // [ 2, 4, 6 ]
console.log(newArrayNumbers)


//* Filter
// Return a new array 
let filterArray = arrayNumbers.filter( numbers => numbers > 1 ) // [ 2, 3 ]
console.log(filterArray)

//* Find
// retunr the object/value/array
let findValue = arrayNumbers.find( numbers => numbers === 3 ) // 3
console.log(findValue)

//*Reduce
// retunr the object/value/array
let reduceValue= arrayNumbers.reduce( (count, n,) => count + n, 0 ) // 6
console.log(reduceValue)

//*Some
//"Some" checks if at least one meets the condition
let someV = arrayNumbers.some(arrayNumber => arrayNumber >=3 ) // true
console.log(someV)

//*Every 
// "Every" checks if all meet it
let everyV = arrayNumbers.every(arrayNumber => arrayNumber >=3 ) // false
console.log(everyV)