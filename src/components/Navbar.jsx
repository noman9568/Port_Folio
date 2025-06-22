import "../styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () =>{
  return (
    <div className="navbar-container">
      <div className="name">Noman Hussain</div>
      <div className="nav">
        <div className="list">
          <div className="list-tag">HOME</div>
          <div className="list-tag">PROJECTS</div>
          <div className="list-tag">ABOUT</div>
          <div className="list-tag">SERVICES</div>
        </div>
      </div>
      <div className="contact">
        Contact Me
      </div>
      <RxHamburgerMenu className="sidebar-icon"/>
      <div className="sidebar">
        
      </div>
    </div>
  )
}

export default Navbar;