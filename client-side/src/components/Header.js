import Button from './Button'
// import './app.css'
const Header = ({title,onAdd,showAdd}) => {
   

  return (
    <header>
      <h3>{title}</h3>
      <Button color={showAdd ? 'red' : 'orange' } text={showAdd ? 'CLOSE' : 'ADD' } onclick={onAdd}/> 
    </header>
  )
}

Header.defaultProps={
    title : 'tasks tracker!'
}

export default Header