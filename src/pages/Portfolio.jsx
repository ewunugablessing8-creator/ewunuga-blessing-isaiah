import profileImage from "../assets/profile.jpeg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <div className="portfolio-up">
         <p className="portfolio-greeting">Hello, I'm</p>
         <h1>Ewunuga Blessing Isaiah</h1>
         <h2>Frontend Developer & Creative Designer</h2>

         <p className="portfolio-description">
          Building beautiful digital experiences with creativity and precision.
         </p>
        </div>

        <div className="portfolio-image">
          <img src={profileImage} alt="Portrait of Blessing Adekunle" />
        </div>
      </div>

      <div className="portfolio-skills">
        <div className="portfolio-skill1">
          <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>CorelDRAW</li>
          <li>Figma</li>
        </ul>
        </div>

        <div className="portfolio-skill1">
          <h2>Areas of Expertise</h2>
        <ul>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX Design</li>
          <li>Branding & Visual Identity</li>
          <li>Frontend Development</li>
        </ul>
        </div>
      </div>

      <div className="portfolio-works">
        <div className="portfolio-work1">
          <div className="portfolio-work-image"></div>
          <h2>Graphic Design</h2>
          <button><Link to="/projects/graphic" className="portfolio-work-button">
                            View Project
                  </Link>
          </button>
        </div>

        <div className="portfolio-work1">
          <div className="portfolio-work-image1"></div>
          <h2>Web Design</h2>
          <button><Link to="/projects/web" className="portfolio-work-button">
                            View Project
                  </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;