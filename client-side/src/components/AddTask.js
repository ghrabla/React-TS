import { useState } from "react"
const AddTask = ({onAdd}) => {
  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState(false)
  
  const onSubmit = (e)=> {
      e.preventDefault()
      if(!text){
          alert('please add some text')
          return
      }
      onAdd({text,day,reminder})
      setText('')
      setDay('')
      setReminder('')
  }
  return (
    <form onSubmit={onSubmit}>
        <label>text</label>
        <input type="text" placeholder="task text" value={text} onChange={(e)=>setText(e.target.value)} />
        <label>day</label>
        <input type="text" placeholder="task day"  value={day} onChange={(e)=>setDay(e.target.value)}/>
        <div className="check">
        <label>reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" className="submit"/>
    </form>
  )
}

export default AddTask