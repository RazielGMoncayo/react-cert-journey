import './App.css'
import Task from './components/task'

function App() {
  const titles = [
    {id: "t1" , title: "React project"}, 
    {id: "t2" , title: "Restyling"}, 
    {id: "t3" , title: "CV Update"}
  ]
  return (
    <>
      {
        titles.map((t) => (
          <Task key={t.id}  title={t.title}/> // Redering list React 
        ))
      }
    </>
  )
}

export default App
