export default function Track() {
  return (
    <div className="icp-body">
      {/* <section className="track-header">
        <nav>
          <a href="index.html">
            <img alt="" className="logo" src="images/logo.png" />
          </a>
          <h5 className="title">
            Beyond Web3 <br />
            <span className="bywho">By Yaruhito Project</span>
          </h5>
          <div className="nav-links">
            <ul>
              <li>
                <a href="https://discord.gg/gCS5tyEf">
                  <span>Study Together</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ilearnx">Follow Us</a>
              </li>
              <li>
                <a href="about.html">
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section> */}
      <style jsx>
        {`
          body {
            background: white;
          }
          .header {
            height: inherit;
            margin-bottom: 0;
          }
        `}
      </style>
      <section className="roadmap-page">
        <div className="titles">
          <h1 className="web3-track">Beyond Web3 Guide</h1>
          <h2 id="subtitle">Web3 Frontend Track</h2>
        </div>
        <ul>
          <li>Fundamentals of the internet</li>
          {/* <!--  --> */}
          <h3 className="content_headings">Sub-topics</h3>
          <li>How the internet works</li>
          <li>Browsers and Search engines</li>
          {/* <!--  --> */}
          <h3 className="content_headings">Resources</h3>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines">
              Server and Search Engines
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/Learn/Common_questions/How_does_the_Internet_work">
              How Does Internet Work?
            </a>
          </li>
          {/* <!--  --> */}
          <h2 className="content_h2_headings">Introduction to HTML</h2>
          <h3 className="content_headings">Sub-topics</h3>
          <li>What is HTML?</li>
          <li>Elements and Tags</li>
          <li>Attributes</li>
          <li>Common HTML Elements</li>
          <li>HTML Boilerplate</li>
          {/* <!--  --> */}
          <h3 className="content_headings">More HTML Elements</h3>
          <li> Lists</li>
          <li>Links</li>
          <li> Images</li>
          {/* <!--  --> */}
          <h3 className="content_headings">Project</h3>
          <li>Resources</li>
          <li>
            {" "}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
              HTML Basics
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/html/html_intro.asp">
              W3 School HTML intro
            </a>
          </li>
          <li>Introduction to CSS</li>
          <h3 className="content_headings">Sub-topics</h3>
          <li>What is CSS?</li>
          <li>Inline, Internal and External CSS</li>
          <li>CSS syntax</li>
          <li>The Box Model</li>
          <li>Block and Inline Elements</li>
          <li> Flex Box</li>
          <h3 className="content_headings">
            Project
            <br />
            Resources
          </h3>
          <li>
            <a href="https://www.w3schools.com/html/html_css.asp">
              W3 School HTML/CSS class
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS">
              Mozilla What is CSS?
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started">
              Mozilla CSS Get Started
            </a>{" "}
          </li>
          <h2 className="content_h2_headings">Introduction to JavaScript</h2>
          <h3 className="content_headings">Resources</h3>
          <li>
            <a href="https://careerfoundry.com/en/tutorials/web-development-for-beginners/an-introduction-to-javascript/">
              Intro to JavaScript
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">
              What is JavaScript?
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=_y9oxzTGERs">
              Video Turotial JS Course
            </a>
          </li>
          <li>Git and Github</li>
          <h3 className="content_headings">Sub-topics</h3>
          <li>Git basics</li>
          <li>What is Github?</li>
          <li>Working with Github</li>
          <li>How to write good commit messages</li>
          <li>Resources</li>
          <li>Advance HTML and CSS</li>
          <li> JavaScript and The DOM</li>
          <li>React JS </li>
          <li>Introduction to Blockchain</li>
          <li>Introduction to smart contract</li>
          <h3 className="content_headings">Sub-topics</h3>
          <li>Solidity basics</li>
          <li> Gas price and Gas limit</li>
          <h3 className="content_headings">Resources</h3>
          <li>Building Decentralized applications</li>
          <h3 className="content_headings">Sub-topics</h3>
          <li>Building front end for your application</li>
          <li>Writing smart contract</li>
          <li> Integrating front-end with backend</li>
          <h3 className="content_headings">Resources</h3>
          <li>
            <a href="https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/">
              Javascript, from beginner to advanced guide
            </a>
          </li>
          Introduction to Internet Computer Protocol(ICP)
          <li> Sub-topic</li>
          <li> Introduction to Internet Computer</li>
          <li> Comparing Internet Computer with other Blockchain</li>
          <li>Introduction to Motoko</li>
          <li>Projects on Internet Computer</li>
          <h3 className="content_headings">Resources</h3>
          <li>Building Dapps on ICP</li>
          <h3 className="content_headings">Sub-topic</h3>
          <li>How to install the dfinity sdk</li>
          <li>Deploy a simple project on the Internet Computer</li>
          <li>Creating a Todo app on the Internet computer</li>
          <li> Resources</li>
          <h2 className="content_h2_headings">Final Project</h2>
          <h2 id="designer-track">Web3 (non-tech)Designer Track</h2>
          <h3 className="tbh">TBH</h3>
          <h2 id="backend-track">Web3 Backend Track</h2>
          <li> Fundamentals of the internet</li>
          <li>Introduction to HTML, CSS and Javascript</li>
          <li> Git and Github</li>
          <li>NodeJS basics</li>
          <li> Introduction to Blockchain</li>
          <li>Introduction to smart contract</li>
          <li> Writing smart contract with Solidity</li>
          <li>Deploying and testing with Hardhat</li>
          <li>Intermediate solidity</li>
          <li>Smart contract vulnerability</li>
          <li> EIP and token standards</li>
          <li>Introduction to Internet Computer Protocol(ICP)</li>
          <li>Introduction to motoko</li>
          <li>Building Dapps on ICP</li>
          Final Project
        </ul>
      </section>
    </div>
  );
}
