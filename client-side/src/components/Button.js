

const Button = ({color,text}) => {
  return (
    <button className="btn" style={{backgroundColor:color}}>{text}</button>
  )
}

export default Button