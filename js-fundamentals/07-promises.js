const myPizza = new Promise((resolve, reject) => {
    let delivery = true; // Simulating the outcome of an 
    
    if(delivery){
        resolve("Pizza delivered, enjoy!") // resolve = success 
    } else{
        reject("Sorry!")
    }
})

// console.log(myPizza) // Promise { 'Pizza delivered, enjoy!' }

//? then and catch

// myPizza // method chaining - sintaxis 
    
//     //*receives what sent resolves
//     .then((result) => {
//         // console.log(result)
//     })

//     //*receives what sent reject 
//     .catch((error) => {
//         // console.error(error);
//     })

//! Async / Await 

async function asyncFuntion() {
    try {
        const result = await myPizza
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


asyncFuntion();