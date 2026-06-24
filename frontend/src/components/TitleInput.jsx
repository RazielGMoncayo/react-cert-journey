import { useState } from "react";

export default function TitleInput() {

    const [title, setTitle] = useState("")

    return (
        <>
            <form onSubmit={ e => {
                e.preventDefault() //  Prevents the default form submission and page reload
                console.log("Submitted title: ", title)
            } }>                
                <input 
                    type="text" 
                    value={title} 
                    onChange={ e => setTitle(e.target.value) }/> {/* e represents the input change event */}
                <p>{title}</p>
                <button>Create Task</button>
            </form>
        </>
    )

};
