import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Svg from "../components/Svg";

function App() {
  return (
    <div className="App d-flex">
      <div className="dark">
        <div className="my-info">
          <img className="logo" src={Logo} width="200px" alt="" />
          <h2 className="text-sm">Hello I'm</h2>
          <h1>Yunus Emre Korucu</h1>
          <h4>Front End Developer</h4>
          <div className="social-links">
            <ul className="lists d-flex">
              <li>
                <a href="https://www.instagram.com/ynsemrkq/">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/yunusemrq">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <SiGmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="light">
        <div>
          <div className="menu">
            <ul className="menu-li m-0 p-0 ">
              <a href="/">
                <li>About Me</li>
              </a>
              <a href="/portfolio">
                <li>Portfolio</li>
              </a>
              <a href="/skills">
                <li>Skills</li>
              </a>
            </ul>
          </div>
          <div className="content">
            <div className="skills-content h-100">
              <span className="tablee ">SKILLS</span>
              <Svg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
