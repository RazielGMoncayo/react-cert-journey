import './App.css'
import Task from './components/task'
import TitleInput from './components/TitleInput'
import { useState } from 'react'

function App() {

  const [titles, setTitles] = useState([
    {id: "t1" , title: "React project"}, 
    {id: "t2" , title: "Restyling"}, 
    {id: "t3" , title: "CV Update"}
  ])

  const addTask = (newTitle) => {
    const newTask = {id: Date.now(), title: newTitle} //Create a new object with the new title 
    const updateTitles = [...titles, newTask] // merge the new title on the title list object 
    setTitles(updateTitles) // adding the new object created as "updateTitle" as the new title list 
  }

  return (
    <>
      {
        titles.map((t) => (
          <Task key={t.id}  title={t.title}/> // Rendering list React - 
        ))
      }
      <br/><br/>
      <TitleInput onAddTask={addTask}/> 
    </>
  )
}

export default App
