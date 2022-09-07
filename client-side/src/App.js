import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [showAddTask,setshowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id : 1,
      text : 'hi dear',
      day : 'monday , feb 5th',
      reminder : true
  },
  {
      id : 2,
      text : 'present studying',
      day : 'friday , feb 9th',
      reminder : true
  },
  {
      id : 3,
      text : 'last seen ',
      day : 'thu , feb 7th',
      reminder : false
  },
  ])  

   const deleteTask = (id)=>{
     setTasks(tasks.filter((task)=>task.id !== id))
   }

   const toggleReminder = (id)=>{
      setTasks(tasks.map((task)=> task.id===id ? {...task,reminder:!task.reminder} : task))
   }

   const onAdd = (task)=>{
     const id = Math.floor(Math.random()*10000) + 1
     const newTask = {id,...task}
     setTasks([...tasks,newTask])
   }

  return (
    <div className="App">
      <Header onAdd={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={onAdd}/>}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('nothing is here')}

    </div>
  );
}

export default App;
