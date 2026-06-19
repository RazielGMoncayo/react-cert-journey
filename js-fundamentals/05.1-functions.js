//* Named export 
// export function suma(...numbers){
//     let count = 0
//     for (let n of numbers){
//         count += n
//     };
//     return count
// }

//? Default export 
// There should be only one function in the file 
export default function suma2(...numbers){
    let count = 0
    for (let n of numbers){
        count += n
    };
    return count
}