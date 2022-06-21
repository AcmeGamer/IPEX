export default function ReactCourse() {
  return (
    <div
      className="row"
      style={{
        paddingTop: "5rem",
      }}
    >
      {/* <section className="header">
        <nav>
          <a href="index.html">
            <img className="logo" src="images/logo.png" />
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
                    className="login-icon"
                    src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
                  />
                  Log In
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gCS5tyEf">
                  <img
                    className="discord-icon"
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                  />
                  <span>Hang Out</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ilearnx">
                  <img
                    className="twitter-icon"
                    src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504947.png?token=exp=1655346946~hmac=59eba848039fbf1db73cdfe0af22a5e2"
                  />
                  Latest Tweet
                </a>
              </li>
              <li>
                <a href="about.html">
                  <span>About Us</span>
                  <img className="about-icon" src="images/eyes.png" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section> */}

      <div className="left-container">
        <div className="left-title">Learning React</div>

        <div className="left-list">
          <style jsx>
            {`
              ul.left-list {
                list-style-type: none;
                margin: 0;
                padding: 0;
              }
            `}
          </style>
          <ul>
            <li>
              <a href="https://reactjs.org/docs/hello-world.html">
                Intro to React.js: Official React Guide
              </a>
            </li>
            <li>
              <a href="/react-course">
                Beginner Guide to React by Kent C. Dodds
              </a>
            </li>
            <li>
              <a href="https://procoders.tech/blog/popular-react-js-websites-examples/">
                Best Website Built By React
              </a>
            </li>
            <li>Look for React Learners/Experienced to Connect</li>
            <li>Practice #1 Build Shopping Cart</li>
            <li>Practice #2 Real-Time Clock</li>
            <li>Practice #3 To Do List</li>
            <li>Practice #4 Keep App</li>
          </ul>
        </div>
      </div>
      <div style={{ width: "60%" }}>
        {/* <!-- course page --> */}
        <div className="right-container">
          <img
            className="react-banner"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpmcaonline.org%2Fwp-content%2Fuploads%2F2020%2F07%2Freact-js-2.jpg&f=1&nofb=1"
          />
          <h1 className="right-title">Building on React</h1>
        </div>
        {/* Course Text */}
        <div className="course-texts">
          <p>Before you start...</p>
          <ul className="key-takeaway">
            <li>Learn basics of HTML, CSS and Javascript</li>
            <li>Understand how to use npm</li>
            <li>Understand ES6 feature</li>
            <li>Understand DOM</li>
          </ul>

          <br />
          <p>
            You can go back to the <a href="/track">course track</a> to reflect
            what you learned/know so far!
          </p>
          <p className="course-intro">
            What is React? <br />
            <br />
            React is front end heavy JavaScript library for building beautiful
            user interfaces. React can be used as a base in the development of
            single-page or mobile applications.{" "}
          </p>

          <br />
          <p>
            For further explanation, check out below video (or read the summary
            below if you are feeling lazy)!
          </p>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/N3AkSS5hXMA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <br />
          <br />
          <strong>Summary of the video</strong>
          <ol className="video-summary">
            <br />
            <li>
              React is the most popular and professionally on-demand JavaScript
              framework, created by Facebook in 2017.
            </li>
            <li>
              It is represented by components(piece) of UI, having root & child
              components (tree components).
            </li>
            <li>
              It is stated in JavaScript className that has some state & rendor
              method.
            </li>
            <li>
              Outcome of the rendoring gives a plain JavaScript that maps to DOM
              element(not real DOM, but reporesentation of DOM=virtual DOM).{" "}
            </li>
            <li>React will detect changes and update DOM automatically.</li>
          </ol>

          <p className="still">
            If you are still wondering if you should learn React, check{" "}
            <span>
              <a href="https://shufflegazine.com/make-discord-hyperlinks-bot-embeds/">
                article
              </a>
            </span>{" "}
            to learn about the pro&con!
          </p>
          <br />
          <h2>
            Assigment#1
            <br />
            Watch video tutorial and make a shopping cart by React.{" "}
          </h2>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ke90Tje7VS0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <h3 className="assignment">
            Complete assignment and unlock your first piece of{" "}
            <a href="/profile">NFT certificate!</a>
          </h3>

          <br />
          <h4 className="assignment2">Assignment #2: Real-Time Clock</h4>
          <h4 className="assignment3">Assignment #3: To Do List</h4>
          <h4 className="assignment4">Assignment #4: Keep Memo App</h4>
        </div>
        {/* <!-- end of course text --> */}
      </div>
    </div>
  )
}
