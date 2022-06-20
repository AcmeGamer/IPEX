export default function HTMLCourse() {
  return (
    <>
      {/* <section className="header">
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
                <a href="profile.html">
                  <img
                    alt=""
                    className="login-icon"
                    src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
                  />
                  Log In
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gCS5tyEf">
                  <img
                    alt=""
                    className="discord-icon"
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                  />
                  <span>Hang Out</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ilearnx">
                  <img
                    alt=""
                    className="twitter-icon"
                    src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504947.png?token=exp=1655346946~hmac=59eba848039fbf1db73cdfe0af22a5e2"
                  />
                  Latest Tweet
                </a>
              </li>
              <li>
                <a href="about.html">
                  <span>About Us</span>
                  <img alt="" className="about-icon" src="images/eyes.png" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section> */}
      <div
        className="row"
        style={{
          paddingTop: "5rem",
        }}
      >
        {/* Left Container */}
        <div className="left-container">
          <div className="left-title">
            Start Website Development with HTML/CSS
          </div>

          <div className="left-list">
            <ul>
              <style jsx>
                {`
                  ul.left-list {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                  }
                `}
              </style>

              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
                  HTML Basics
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asps">
                  W3 School html intro
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS">
                  Getting Started with CSS Basics
                </a>
              </li>
              <ki>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started">
                  Mozilla CSS intro
                </a>
              </ki>
              <li>Look for HTML/CSS Learners/Experienced to Connect</li>
              <li>Practice #1 Make Your Hobby Listing on Your Website</li>
              <li>Practice #2 Position Floating Boxes</li>
              <li>Practice #3 Style Your Website</li>
              <li>
                Practice #4 Set Forms and Get in Touch with Javascript Basics
              </li>
            </ul>
          </div>
        </div>

        <div style={{ width: "60%" }}>
          {/* Right Container */}
          <div className="right-container">
            <img
              alt=""
              className="html-banner"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seoclerk.com%2Fpics%2F500304-1KuyMq1482510124.jpg&f=1&nofb=1"
            />
            <h1 className="right-title">Mastering HTML/CSS</h1>
          </div>
          <div className="course-texts">
            <p>Before you start...</p>

            <ul className="key-takeaway">
              <li>Understand Fundamental of Internet</li>
              <li>How Server and Internet Works</li>
            </ul>
            <br />
            <p>
              You can go back to the <a href="/track">course track</a> to
              reflect what you learned/know so far!
            </p>
            <p className="course-intro">
              What is HTML? <br />
              <br />
              HTML stands for Hyper Text Markup Language. It is a set of
              detailed instructions, usually written on a manuscript to be
              typeset, concerning style of type, makeup of pages, and the like.{" "}
            </p>

            <br />
            <p>For further explanation, check out below video!</p>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qz0aGYrrlhU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <br />
            <strong>Review Video</strong>
            <ol className="video-summary">
              <br />
              <li>Elements and Tags</li>
              <li>Attributes</li>
              <li>Common HTML Elements</li>
              <li>OHTML Boilerplate </li>
              <li>Other elements(links, image, lists)</li>
            </ol>

            <p>Project</p>

            <em>Resources</em>
            <p>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
                HTML Basics
              </a>
            </p>
            <p>
              <a href="https://www.w3schools.com/html/html_intro.asps">
                W3 School html intro
              </a>
            </p>

            <p className="course-intro">
              What is CSS? <br />
              <br />
              CSS stands for Cascading Style Sheets. It allows you to create
              great-looking web pages, but how does it work under the hood? This
              article explains what CSS is with a simple syntax example and also
              covers some key terms about the language.
            </p>

            <br />
            <p>For further explanation, check out below video!</p>
            <br />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1PnVor36_40"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <br />
            <strong>Review Video</strong>
            <ol className="video-summary">
              <br />
              <li>Inline, Internal and External CSS</li>
              <li>CSS syntax</li>
              <li>The Box Model</li>
              <li>Flex Box </li>
            </ol>
            <p>Project</p>

            <em>Resources</em>
            <p>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS">
                Getting Started with CSS Basics
              </a>
            </p>
            <p>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started">
                Mozilla CSS intro
              </a>
            </p>

            <br />
            <h3 className="assignment">
              Complete assignment and unlock your first piece of{" "}
              <a href="/profile">NFT certificate!</a>
            </h3>
            <br />
            <h4 className="assignment1">
              Assignment #1: Make Your Hobby Listing on Your Website
            </h4>
            <h4 className="assignment2">
              Assignment #2: Position Floating Boxes{" "}
            </h4>
            <h4 className="assignment3">Assignment #3: Style Your Website</h4>
            <h4 className="assignment4">
              Assignment #4: Set Forms and Get in Touch with Javascript Basics
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}
