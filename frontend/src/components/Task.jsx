import { useState } from "react"


//? State -> Even handling -> Conditional rendering

// this funtion is a component and show a title and a button 
export default function Task( { title } ) { // {title} = prop 

    //? State
    // State declaration or set up state or the component state
    const [completed, setCompleted] = useState(false) //*Component State
    //* completed = variable
    //* setCompleted = setter 

    //? Handlers 

    const handleClick = () => {
        setCompleted(!completed) // update the complete value 
    }

    //?JSX
    return (
        <>
            <h1>{title}</h1> {/* prop used */}
            <button onClick={handleClick}>
                {(completed) ? "Completed" : "Click me"} {/* button text according the completed value - Contitional rendering  */}
            </button> 
        </>
    )
}