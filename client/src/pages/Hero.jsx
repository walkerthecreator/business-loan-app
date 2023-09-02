import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div>
        Welcome to Homepage
        <Link to='/businessDetails'> <button>Business Details</button> </Link>
        <Link to="/review"> <button>Review Page</button> </Link>
    </div>
  )
}

export default Hero