import Task from "../components/task";
import TitleInput from "../components/TitleInput";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    
    const [titles, setTitles] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(titles)); 
    }, [titles]);

    const [searchParams, setSearchParams] = useSearchParams()
    
    const handleChange = (e) => {
        setSearchParams({search: e.target.value})
    }
    
    const searchQuery = searchParams.get("search") || ""

    const newSearch = titles.filter( task => task.title.includes(searchQuery))


    
    
    const addTask = (newTitle) => {
        const newTask = { id: Date.now(), title: newTitle }; //Create a new object with the new title
        const updateTitles = [...titles, newTask]; // merge the new title on the title list object
        setTitles(updateTitles); // adding the new object created as "updateTitle" as the new title list
        return  newTask.id
    };

return (
    <main>
        <br/>
        <label htmlFor="search">Search:</label>
        <input            
            type="text"
            value={searchQuery}
            onChange={handleChange}
            />
        {newSearch.map((t) => (
        <Task key={t.id} title={t.title} /> // Rendering list React -
    ))}
        <br />
        <br />
        <TitleInput onAddTask={addTask} />
        <br/>
        <Link to="/about">Go to About</Link>        
    </main>
    );
}
