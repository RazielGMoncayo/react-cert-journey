

//* Object 
const movie = { title: "The Conjuring", year: 2013 }

//* Destructing the object
// *Looks up the key in the source object and assigns its value to the new object
const { title, year } = movie

//*Doble-check
console.log(title)
console.log(year)

//? renaming destructured 
const {
    title : movieTitle, //* originalName : newName  
    year : movieYear
} = movie //* originalObjectName 

//*Doble-check
console.log(movieTitle)
console.log(movieYear)

//*******************************************************************/

//! Arrays

//* Destructing the array
const movies = ["Alien", "The Conjuring"]
const [movie1, movie2 ] = movies

console.log(movie1)
console.log(movie2)

const [ , m2 ] = movies
console.log(m2)

