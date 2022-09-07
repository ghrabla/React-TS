import { Link } from "react-router-dom"

const footer = () => {
  return (
    <div>
        <p>copyright &copy; 2022 all right reserved</p>
        <Link to="/about">About</Link>
    </div>
  )
}

export default footer