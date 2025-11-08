import './Navbar.css'
import logo_light from '../../assets/logo-black.png'


const Navbar = () => {

  return (
    <div className="navbar">
        <img src={logo_light} alt="" className='logo'/>
        <div className="nav-links">
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar