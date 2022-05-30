import Logo from "../images/logo.jpeg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const base_url = "http://localhost:1337";
  const getPortfolio = async () => {
    const res = await fetch(
      "http://localhost:1337/api/portfolios?populate=PortfolioImage"
    );
    const response = await res.json();
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getPortfolio();
  }, []);
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
                <a href="#">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
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
            <span className="tablee ">PORTFOLIO</span>
            <div className="portfolio-content">
              {/* <img src={`http://localhost:1337/api` + { images }} alt="" /> */}
              {data.map((item) => (
                <img
                  className="img"
                  src={
                    base_url +
                    item.attributes.PortfolioImage.data.attributes.url
                  }
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
