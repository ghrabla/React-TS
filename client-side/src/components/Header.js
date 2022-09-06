import Button from './Button'
// import './app.css'
const Header = ({title}) => {
  return (
    <header>
      <h3>{title}</h3>
      <Button color='orange' text='ADD'/>
    </header>
  )
}

Header.defaultProps={
    title : 'tasks tracker!'
}

export default Header