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
  )
}

export default App;