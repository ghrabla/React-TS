import { useState , useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import About from './components/About'
function App() {
  const [showAddTask,setshowAddTask] = useState(false)
  const [tasks,setTasks] = useState([]) 
  
  useEffect(()=>{
   const getTasks = async ()=>{
     const TasksFromServer = await fetchTasks()
     setTasks(TasksFromServer)
   }
    getTasks()
  },[])

  // get tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

   const deleteTask = async (id) => {
     await fetch (`http://localhost:5000/tasks/${id}`,{
       method:'DELETE'
     })
     setTasks(tasks.filter((task)=>task.id !== id))
   }

   const toggleReminder = async (id)=> {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method : 'PUT',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      setTasks(tasks.map((task)=> task.id===id ? {...task,reminder:data.reminder} : task))
   }

   const onAdd = async (task)=>{
     const res = await fetch('http://localhost:5000/tasks',
      {
        method : 'POST',
        headers : { 'Content-type':'application/json'},
        body : JSON.stringify(task)
      }
     )
     const data = await res.json()
     setTasks([...tasks,data])
     //  const id = Math.floor(Math.random()*10000) + 1
     //  const newTask = {id,...task}
   }

  return (
    <BrowserRouter>
       <div className="App">
      <Header onAdd={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={onAdd}/>}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('nothing is here')}
      <Routes>
        
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>

    </div>
    </BrowserRouter> 
  );
}

export default App;
