import "../styles/navbar.css";
const Navbar = () =>{
  return (
    <div className="navbar-container">
      <div className="name">Noman Hussain</div>
      <div className="nav">
        
        <div className="list">
          <div className="list-tag">HOME</div>
          <div className="list-tag">PROJECTS</div>
          <div className="list-tag">ABOUT</div>
          <div className="list-tag">CONTACT</div>
        </div>
      </div>
      <div className="contact">
        Contact Me
      </div>
    </div>
  )
}

export default Navbar;