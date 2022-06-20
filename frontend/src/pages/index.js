import React, { useRef } from "react"

export default function Home() {
  var x = 0,
    y = 0,
    size = 0,
    rotation = 0,
    transitiontimer,
    wingtimer,
    nexttimer

  const butterfly_wrapper = useRef(),
    upperwing_left = useRef(),
    upperwing_right = useRef(),
    lowerwing_left = useRef(),
    lowerwing_right = useRef()

  function flutter(vartimer) {
    nexttimer = vartimer + generaterandomno(-200, 200)
    nexttimer = nexttimer < 1500 || nexttimer > 3000 ? 1500 : nexttimer

    x += generaterandomno(-80, 80)
    y += generaterandomno(-80, 80)

    x = x < 20 ? 30 : x
    y = y < 20 ? 30 : y
    x = x > 250 ? 240 : x
    y = y > 250 ? 240 : y

    size += generaterandomno(-10, 10)
    size = size < 10 ? 20 : size
    size = size > 50 ? 40 : size

    rotation += generaterandomno(-10, 10)
    rotation = rotation < -20 ? 0 : rotation
    rotation = rotation > 20 ? 0 : rotation

    transitiontimer = generaterandomno(20, 50) / 10

    butterfly_wrapper.current.style.marginLeft = x + "px"
    butterfly_wrapper.current.style.marginTop = y + "px"
    butterfly_wrapper.current.style.width = size + "px"
    butterfly_wrapper.current.style.height = size + "px"
    butterfly_wrapper.current.style.transform = "rotate(" + rotation + "deg)"
    butterfly_wrapper.current.style.webkitTransform =
      "rotate(" + rotation + "deg)"
    butterfly_wrapper.current.style.transition = "all " + transitiontimer + "s"
    butterfly_wrapper.current.style.webkitTransition =
      "all " + transitiontimer + "s"

    wingtimer = generaterandomno(1, 5)

    for (var k = 0; k <= 1; k++) {
      // Upper Wings
      ///Left
      upperwing_left.current.style.animationDuration = "0." + wingtimer + "s"
      upperwing_left.current.style.webkitAnimationDuration =
        "0." + wingtimer + "s"
      /// Right
      upperwing_right.current.style.animationDuration = "0." + wingtimer + "s"
      upperwing_right.current.style.webkitAnimationDuration =
        "0." + wingtimer + "s"

      // Lower Wings
      ///Left
      lowerwing_left.current.style.animationDuration = "0." + wingtimer + "s"
      lowerwing_left.current.style.webkitAnimationDuration =
        "0." + wingtimer + "s"
      /// Right
      lowerwing_right.current.style.animationDuration = "0." + wingtimer + "s"
      lowerwing_right.current.style.webkitAnimationDuration =
        "0." + wingtimer + "s"
    }

    setTimeout(function () {
      flutter(nexttimer)
    }, vartimer)
  }

  function generaterandomno(varmin, varmax) {
    return Math.floor(Math.random() * (varmax - varmin + 1) + varmin)
  }

  return (
    <>
      {/* First Container */}
      <div className="first-container">
        <div className="first-texts">
          <h1 className="sub-title">Learn Web3 & Beyond.</h1>
          <p className="project-description">
            Welcome to iLearnX Beyond Web3, where you can learn from the basic of
            internet to how-to-Web3 development. We curated free learning
            materials (HTML, CSS, JavaScript, React etc) & will walk you through
            till the end of your goal.{" "}
          </p>

          <a className="button" href="#track-page">
            Check Course
          </a>

          <a
            className="discord-button"
            href="https://discord.gg/gCS5tyEf"
            target={"_blank"}
          >
            Get In Touch
          </a>
        </div>

        <div className="inside-box2">
          <p className="box-title">
            <a href="/icp">Featured Article</a>
          </p>
          <img
            alt=""
            className="icp-image"
            src="https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          />
          <p className="icp">ICP Hackathon: What’s "Internet Computer"?</p>
        </div>
      </div>
      {/* Second Container */}
      <div className="second-container">
        <hr />
        <div className="courses">
          <h1 className="second-title" id="courses">
            Course Insight
          </h1>
          <p className="second-desc">
            We curated free learning materials (HTML, CSS, JavaScript, React
            etc)
          </p>

          {/* Courses Pics */}
          <div className="courses-pic">
            <img
              alt=""
              className="html"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7420966.jpg&f=1&nofb=1"
            />
            <img
              alt=""
              className="react"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.filestackcontent.com%2FIEMTnwZrR2SJNoRUw6Tq&f=1&nofb=1"
            />
            <img
              alt=""
              className="solidity"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnyc3.digitaloceanspaces.com%2Fduomly%2Fcourses%2FcourseID1%2Fcourse-1-solidity-basics.jpg&f=1&nofb=1"
            />
          </div>

          {/* Boxes */}
          <div className="boxes">
            {/* Box 1 */}

            <div className="box1" a="start-button" href="html-course.html">
              <h3 className="course-intro">
                <a href="/html-course">HTML/CSS</a>
              </h3>
              <p className="nutshells">
                Pretty basic but this is your first step to become wizard of Oz.
              </p>
              <a className="start-button" href="/html-course">
                Get Started
              </a>
            </div>
            {/* Box 2 */}
            <div className="box2">
              <h3 className="course-intro">
                <a href="/react-course">React</a>
              </h3>
              <p className="nutshells">
                React is one of the most populat language for web dev
              </p>
              <a className="start-button" href="/react-course">
                Get Started
              </a>
            </div>
            {/* Box 3 */}
            <div className="box3">
              <h3 className="course-intro">
                <a href="/solidity">Solidity</a>
              </h3>
              <p className="nutshells">Now it’s getting real for web3</p>
              <a className="start-button-solidity" href="/solidity">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Third Container */}
      <div className="third-container">
        <title>Butterfly</title>

        {/* Butterfly JSX */}
        <style jsx>
          {`
            <style > div {
              border: 0px solid #ff0000;
            }

            #butterfly_wrapper {
              width: 150px;
              height: 150px;
              position: absolute;
              top: 2250px;
              left: 20%;
            }

            .leftwings,
            .rightwings {
              position: absolute;
              width: 50%;
              height: 100%;
              top: 20%;
            }

            .leftwings {
              left: 0;
            }

            .rightwings {
              right: 0;
            }

            .perspective {
              position: relative;
              width: 100%;
              height: 50%;
              -webkit-perspective: 150px;
              -webkit-perspective-origin: 50% 50%;
              perspective: 150px;
              perspective-origin: 50% 50%;
            }

            .upperwing,
            .lowerwing {
              /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#FF4400+0,FFEE00+50,FF4400+100 */
              background: #ff4400; /* Old browsers */
              background: -moz-radial-gradient(
                center,
                ellipse cover,
                #0c76e0 0%,
                #0066ff 50%,
                #0c76e0 100%
              ); /* FF3.6-15 */
              background: -webkit-radial-gradient(
                center,
                ellipse cover,
                #0c76e0 0%,
                #00a2ff 50%,
                #0c76e0 100%
              ); /* Chrome10-25,Safari5.1-6 */
              background: radial-gradient(
                ellipse at center,
                #0c76e0 0%,
                #00a2ff 50%,
                #0c76e0 100%
              ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0c76e0', endColorstr='#0c76e0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
              -webkit-animation-duration: 0.3s;
              -webkit-animation-iteration-count: infinite;
              -webkit-animation-direction: alternate;
              animation-duration: 0.3s;
              animation-iteration-count: infinite;
              animation-direction: alternate;
            }

            .upperwing {
              position: absolute;
              width: 100%;
              height: 100%;
            }

            .upperwing_left {
              border-top-left-radius: 10%;
              border-top-right-radius: 80%;
              border-bottom-right-radius: 0%;
              border-bottom-left-radius: 30%;
              -webkit-transform-origin: 100% 50%;
              transform-origin: 100% 50%;
              -webkit-animation-name: movewing_left;
              animation-name: movewing_left;
            }

            .upperwing_right {
              border-top-left-radius: 80%;
              border-top-right-radius: 10%;
              border-bottom-right-radius: 30%;
              border-bottom-left-radius: 0%;
              -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
              -webkit-animation-name: movewing_right;
              animation-name: movewing_right;
            }

            .lowerwing {
              position: absolute;
              top: 0;
              width: 80%;
              height: 80%;
            }

            .lowerwing_left {
              right: 0;
              border-top-left-radius: 30%;
              border-top-right-radius: 0%;
              border-bottom-right-radius: 80%;
              border-bottom-left-radius: 10%;
              -webkit-transform-origin: 100% 50%;
              transform-origin: 100% 50%;
              -webkit-animation-name: movewing_left;
              animation-name: movewing_left;
            }

            .lowerwing_right {
              left: 0;
              border-top-left-radius: 0%;
              border-top-right-radius: 30%;
              border-bottom-right-radius: 10%;
              border-bottom-left-radius: 80%;
              -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
              -webkit-animation-name: movewing_right;
              animation-name: movewing_right;
            }

            @-webkit-keyframes movewing_left {
              from {
                -webkit-transform: rotateX(0deg);
              }
              to {
                -webkit-transform: rotateY(65deg);
              }
            }

            @keyframes movewing_left {
              from {
                transform: rotateY(0deg);
              }
              to {
                transform: rotateY(65deg);
              }
            }

            @-webkit-keyframes movewing_right {
              from {
                -webkit-transform: rotateX(0deg);
              }
              to {
                -webkit-transform: rotateY(-65deg);
              }
            }

            @keyframes movewing_right {
              from {
                transform: rotateY(0deg);
              }
              to {
                transform: rotateY(-65deg);
              }
            }
          `}
        </style>
        {/* <div onLoad={flutter(1500)}> */}
        <div>
          {/* Wrapper */}
          <div id="butterfly_wrapper" ref={butterfly_wrapper}>
            <div className="leftwings">
              <div className="perspective">
                <div
                  className="upperwing upperwing_left"
                  ref={upperwing_left}
                ></div>
              </div>
              <div className="perspective">
                <div className="lowerwing lowerwing_left"></div>
              </div>
            </div>
            <div className="rightwings">
              <div className="perspective">
                <div
                  className="upperwing upperwing_right"
                  ref={upperwing_right}
                ></div>
              </div>
              <div className="perspective">
                <div className="lowerwing lowerwing_right"></div>
              </div>
            </div>
          </div>

          <div id="track-page">
            <h1 className="choose-track">Choose Your Track</h1>
            <div className="space"></div>
            <br />
            <p className="third-desc">
              Check out our curated roadmap for aspired Web3 developer and
              designer!
            </p>
            <div className="space"></div>
            <br />
            <div className="space"></div>
            <h1 className="frontend-dev">
              <img
                alt=""
                className="icon1"
                src="https://cdn-icons-png.flaticon.com/512/1197/1197460.png"
              />
              <div className="text">
                <a href="/react-course">JS / React</a>
              </div>
            </h1>
            <div className="space"></div>

            <h1 className="frontend-designer">
              <div className="text">
                <a href="/html-course">HTML / CSS</a>
              </div>
            </h1>
            <div className="space">
              <a href="https://ilearnx.vercel.app/">
                <img
                  alt=""
                  className="flower"
                  src="https://cdn-icons.flaticon.com/png/512/2963/premium/2963323.png?token=exp=1655450323~hmac=d00085089ebaa1dca73cc502ad8832ac"
                />
              </a>
            </div>
            <h1 className="backend-dev">
              <div className="text">
                <img
                  alt=""
                  className="icon2"
                  src="https://cdn-icons-png.flaticon.com/512/2219/2219516.png"
                />
                <a href="/solidity">Web3 Developer</a>
              </div>
            </h1>
          </div>
        </div>
      </div>
      {/* Fourth Container */}
      <div className="forth-container">
        <h1 className="getsupport">Get Learning Support</h1>

        <p className="description">
          We will support your learning all the way and help you survive web3 &
          life.
        </p>
        <div className="list-of-support">
          <ul>
            <li>
              <h2>Q&A</h2>
            </li>
            <li>
              <h2>Learning Support System</h2>
            </li>
            <li>
              <h2>Our Library</h2>
            </li>
          </ul>
        </div>

        <div className="mini-boxes">
          {/* Minibox 1 */}
          <div className="minibox1">
            <p className="minibox1-text">Q. Can I just learn normal programming?</p>           
            <p className="minibox1-text">A. Absolutely! What you learn is all your choice!</p>
           
          </div>
          {/* Minibox 2 */}
          <div className="minibox2">
            <p className="minibox2-text"> Q. I am a beginner. A.Start from <a href="/track">Here!</a></p>
          </div>
          {/* Minibox 3 */}
          <div className="minibox3">
            Q. I want a quick buck?
            <p className="minibox3-text">
              A.Ain’t no easy money!! if there is it's mostly scam, but you
              can join <a href="/icp">ICP hackathon</a> or <a href="https://ilearnx.vercel.app/">our hackathon course</a> to learn&earn!
            </p>
          </div>
          {/* Minibox 4 */}
          <div className="minibox4">
            Q.I don’t want to study alone.
            <p className="minibox4-text">
              A.Use our Discord to do focus session with friends!
            </p>
          </div>
          {/* Minibox 5 */}
          <div className="minibox5">
            Q. Where can I get a job?
            <p className="minibox5-text">
             A. Use our up-coming marketplace to list your progress and sell by hour/task!
            </p>
          </div>
          {/* Minibox 6 */}
          <div className="minibox6">
           Q. How do I make a session? 
            <p className="minibox6-text">
          A. Join Discord 24h focus session or book in-person session.          
            </p>
          </div>
          {/* Minibox 7 */}
          <div className="minibox7">
            Check <a href="/track">Web3 Roadmap</a><p className="minibox7-text"></p>
          </div>
          {/* Minibox 8 */}
          <div className="minibox8">
            Hackathon of this season
            <p className="minibox8-text"><a href="/icp">ICP</a></p>
          </div>
          {/* Minibox 9 */}
          <div className="minibox9">
            Wanna Join Hackathon?
            <p className="minibox9-text">
              Form a team on discord or <a href="https://ilearnx.vercel.app/">sign-up!</a>(Beginner friendly)
            </p>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <hr />
    </>
  )
}
