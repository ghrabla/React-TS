import Button from './Button'
// import './app.css'
const Header = ({title}) => {
   
    const onclick = ()=>{
        console.log('clicked')
    }

  return (
    <header>
      <h3>{title}</h3>
      <Button color='orange' text='ADD' onclick={onclick}/> 
    </header>
  )
}

Header.defaultProps={
    title : 'tasks tracker!'
}

export default Header