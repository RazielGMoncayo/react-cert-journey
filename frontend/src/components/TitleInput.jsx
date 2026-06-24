import { useState } from "react";

export default function TitleInput({onAddTask}) {

    //* State

    const [title, setTitle] = useState("")

    //* Handlers - named function declaration 

    const handleSubmit = (e) => {
        e.preventDefault() //  Prevents the default form submission and page reload
        onAddTask(title)
        setTitle("")
        console.log("Submitted title: ", title)
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
                    onChange={handleChange}/>
                <p>{title}</p>
                <button>Create Task</button>
            </form>
        </>
    )

};