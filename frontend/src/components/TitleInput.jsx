import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function TitleInput({onAddTask}) {

    //* State

    const [title, setTitle] = useState("")

    const inputRef = useRef(null)

    const navigate = useNavigate()

    //* Handlers - named function declaration     

    const handleSubmit = (e) => {
        e.preventDefault() //  Prevents the default form submission and page reload
        const newId = onAddTask(title)
        setTitle("") // Deleting the text on the input  
        navigate(`/task/${newId}`)
        // inputRef.current.focus() // Automatically focuses the input after submitting.
    }

    const handleChange = (e) => {
        setTitle(e.target.value) // e represents the input change event
    }


    //* JSX
    return (
        <>
            <form onSubmit={handleSubmit}>                
                <input 
                    type="text" 
                    value={title} 
                    onChange={handleChange}
                    ref={inputRef}/>
                <p>{title}</p>
                <button>Create Task</button>
            </form>
        </>
    )

};