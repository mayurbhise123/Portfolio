import Header from "../header/Header";
import "./home.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import sideImg from '../../assets/sideImg.gif';
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <><div className="main-container">
      <Header />
    
      <div className="home" id="home">
        <div className="intro">
          <h4 className="intro-heading">
            Hello{" "}👋{" "}{" "}<span>I'am</span>
            <h1>Mayur Sharad Bhise</h1>
          </h4>
          <div className="typewriter">
            <Typewriter
            options={{
              strings: ["Programmer.", "AWS/DevOps Engineer", "Learner."],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              cursorClassName: "typed-cursor",
              wrapperClassName: "typed-text",
            }}
          />
          </div>
          <p>
            To commit to the motto of the organization and put forward a
            conscious effort, investing time and energy in a team spirit, to
            meet the challenge and rise with and for the organization.
          </p>
          <div className="checkout">
            <span>check out my</span>
            <div className="icons">
              <span><a href="https://www.linkedin.com/in/mayur-bhise-932636245/"><LinkedInIcon /></a></span>
            </div>
          </div>
        </div>
        <div className="side-image">
          <img src={sideImg} alt="gif" />
        </div>
      </div>
    </div>
 
    </>
  );
};
export default Home;
