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

  //**
  // Recibe el título nuevo como parámetro (un string)
  // Crea un nuevo objeto con ese título y un id único
  // Usa setTitles para agregar ese objeto al array existente, sin perder los que ya estaban
  //  */
  
  const addTask = (newTitle) => {
    const newTask = {id: Date.now(), title: newTitle}
    const updateTitles = [...titles, newTask]
    setTitles(updateTitles)
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
