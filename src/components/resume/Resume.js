import "./resume.scss";
const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <h1>My Resume</h1>
      <div className="cards-container">
        <h3>Certification</h3>
        <div className="cards">
          <div className="left-side">
            <p className="date">2023-present</p>
            <p>AWS services Certification</p>
            <p>AWS</p>
            <p>Pune</p>
          </div>
          <div className="right-side">
            <p>
              AWS Services S3, Lambda, CloudWatch, CloudTrail, CloudFront
            </p>
          </div>
        </div>
        <h3>Experience</h3>
        <div className="cards">
          <div className="left-side">
            <p className="date">2021-2022</p>
            <p>ETL Testing</p>
            <p>Freelancing</p>
            <p>Pune</p>
          </div>
          <div className="right-side">
            <p>
              Used available data and process logical data on tasks like Extract Transfer and Load
            </p>
          </div>
        </div>
        <h3>Education</h3>
        <div className="cards">
          <div className="left-side">
            <p className="date">2020-2023</p>
            <p>Anantrao Pawar Collage of Engineering</p>
            <p>IT Engineering</p>
            <p>Pune</p>
          </div>
          <div className="right-side">
            <p>
              Having successfully compleated Engineering with 9.1 cgpa
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="left-side">
            <p>2018-2020</p>
            <p>MIT</p>
            <p>Diploma in IT Engineering</p>
            <p>Pune</p>
          </div>
          <div className="right-side">
            <p>
              Having successfully completed my Diploma with 8.5 cgpa.
            </p>
          </div>
        </div>
        <h3>Professional skillset</h3>
        <div className="cards">
          <div className="progress-container">
            <div className="left-side-progress">
              <div className="progress-wrap">
                <h3><span>AWS</span><span>90%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>SQL</span><span>70%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-2" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>Database</span><span>70%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-3" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>ETL</span><span>70%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-4" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
            <div className="right-side-progress">
              <div className="progress-wrap">
                <h3><span>JS</span><span>60%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>C, C++</span><span>50%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>Linux</span><span>50%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>MS Excel</span><span>50%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-resume-btn">
        <a 
          href="/resume.pdf"
          download="RESUME-PDF-Mayur-Bhise"
          target="_blank"
          rel="noreferrer"
        >
            <button>Donload Resume</button>
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default Resume;
