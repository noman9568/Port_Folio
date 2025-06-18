import Navbar from "./components/Navbar.jsx";
import "./App.css";
import FloatingCircle from "./FloatingCircle.jsx";
const App =  () =>{

  const handleDownload = () =>{
    const link = document.createElement("a");
    link.href = "./Resume.pdf";
    link.download = "Noman_Hussain.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
    <div className="home">
      <Navbar />
      <div className="home-footer">
        <div className="name-detail">
          <div className="user-name">Noman Hussain</div>
          <div className="detail">I am a full-stack web developer.</div>
        </div>
        <div className="design">
          <div className="circle-wrapper">
            <div className="cv-wrap">
              <div className="CV" onClick={handleDownload}>⭳ CV</div>
            </div>
            <div className="circle"></div>
            <div className="social-media">
              <FloatingCircle />
              <FloatingCircle />
              <FloatingCircle />
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="abt">
        <span>About Me</span>
        <div className="rightA">→</div>
      </div>
      <div className="abt-text">
        <div className="a-c">
          <div className="abt-circles">
          <div className="abt-circle" >
            <img src="./key.jpg" className="pc-img" alt="Not found" />
          </div>
          <div className="sm-circle" />
          </div>
        </div>
        <div className="about-me">
          <span>
            Meet Noman Hussain, a dedicated web developer and B.Tech IT student at ABES Engineering College. Skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, he builds responsive, full-stack applications. From recipe blogs to a real-time Canteen Queue Tracker, Noman focuses on creating efficient, user-friendly solutions while staying updated with the latest tech trends.
          </span>
          <div className="abt-contact">
            <div className="contact-btn">Contact Me</div>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;