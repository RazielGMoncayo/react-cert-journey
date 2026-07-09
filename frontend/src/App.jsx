import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import TaskDetail from './pages/TaskDetail'

function App() {  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/task/:id' element={<TaskDetail/>}/>
      </Routes>
    </div>
  )}

export default App