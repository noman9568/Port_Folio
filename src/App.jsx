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
      <div className="header">
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
    <div className="skills">
      <div className="header" id="services">
        <div>
          <span>What I do</span>
          <div className="rightA">→</div>
        </div>
        <p>My Services</p>
      </div>
      <div className="skill-blocks header">
        <div className="blocks">
          <div id="block1">
            <div className="block-head">
              <img src="./service.png" alt="service" className="service-icon" />
              <div className="block-dot"></div>
            </div>
            <div className="head">Full Stack Projects</div>
            <div className="desc">Created end-to-end apps like Recipe Blog and Khatabook with user auth, data storage, and dynamic rendering using EJS.</div>
          </div>
          <div id="block2">
            <div className="block-head">
              <img src="./service.png" alt="service" className="service-icon" />
              <div className="block-dot"></div>
            </div>
            <div className="head">Real-time Applications</div>
            <div className="desc">Developed apps like a Canteen Queue Tracker using Socket.IO and Firebase Cloud Messaging for instant updates.</div>
          </div>
          <div id="block3">
            <div className="block-head">
              <img src="./service.png" alt="service" className="service-icon" />
              <div className="block-dot"></div>
            </div>
            <div className="head">Project Dashboard & Expense tools</div>
            <div className="desc">Built finance tools like Expense Tracker and integrated features like login, logout, and dynamic category filters.</div>
          </div>
        </div>
        <div className="dots-2">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        <div className="blocks second">
          <div id="block4">
            <div className="block-head">
              <img src="./service.png" alt="service" className="service-icon" />
              <div className="block-dot"></div>
            </div>
            <div className="head">Backend Development</div>
            <div className="desc">I build scalable APIs using Node.js, Express.js, and MongoDB with secure authentication and role-based access.</div>
          </div>
          <div id="block5">
            <div className="block-head">
              <img src="./service.png" alt="service" className="service-icon" />
              <div className="block-dot"></div>
            </div>
            <div className="head">Authentication & User Management</div>
            <div className="desc">Implemented secure login/logout, role-based access, and session handling in multiple apps using Express.js, JWT, and Firebase.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="projects">
      <div className="header" id="services">
        <div>
          <span>Projects</span>
          <div className="rightA">→</div>
        </div>
      </div>
      <div className="projects-block">
        <div className="p_block">
          <div className="pImg">
            <img src="./canteen.png" alt="canteenQTracker" className="p-img"/>
            <div className="imgOverlay">
              Real-time food ordering and queue management system built using the MERN stack. Integrated with Socket.IO and Firebase Cloud Messaging for instant updates.
            </div>
          </div>
          <div className="p01">
            <div className="p_detail">
              <div className="name">Canteen Queue Tracker</div>
              <div className="tech_used">MERN</div>
            </div>
            <div className="dot3"></div>
          </div>
        </div>
        <div className="p_block">
          <div className="pImg">
            <img src="./recipe.png" alt="recipeBlog" className="p-img"/>
            <div className="imgOverlay">
              A dynamic recipe-sharing platform built with Express.js and EJS. Includes features like user authentication, likes, comments, and image uploads.
            </div>
          </div>
          <div className="p01">
            <div className="p_detail">
              <div className="name">Recipe Blog</div>
              <div className="tech_used">Express.js, EJS</div>
            </div>
            <div className="dot3"></div>
          </div>
        </div>
        <div className="p_block">
          <div className="pImg">
            <img src="./expense.png" alt="expenseTracker" className="p-img"/>
            <div className="imgOverlay">
              Full-stack personal finance tool built with Express.js and EJS. Allows users to track expenses by category, with secure login.
            </div>
          </div>
          <div className="p01">
            <div className="p_detail">
              <div className="name"> Expense Tracker</div>
              <div className="tech_used">Express.js, EJS</div>
            </div>
            <div className="dot3"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;