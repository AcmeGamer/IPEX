import Logo from "../../images/logo.png";

export default function Header() {
  return (
    <section className="header">
      <nav>
        <a href="index.html">
          <img alt="" className="logo" src={Logo} />
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
    </section>
  );
}

function Link(props) {
  return (
    <li>
      <a target={props.target ? props.target : ""} href={props.href}>
        {props.name}
      </a>
      {props.children}
    </li>
  );
}

export function HeaderV2() {
  return (
    <section className="header">
      {/* Style */}
      <style jsx>{`
        nav {
          box-shadow: 1px 6px 13px #ffffff0a;
          background: #1e1e1ee8;
          font-family: sans-serif;
        }
        nav a {
          cursor: pointer;
        }

        li:hover > ul,
        li > ul:hover {
          display: flex;
          flex-direction: column;
        }
        li > ul {
          display: none;
          position: absolute;
          width: max-content;
          background: #464646;
          text-align: initial;
          top: 30px;
          z-index: 2;
          border-radius: 5px;
        }
        li ul a {
          z-index: 10;
        }
      `}</style>
      <nav>
        <a href="/">
          <img alt="" className="logo" src={Logo} />
        </a>
        <h5 className="title">
          Beyond Web3 <br />
          <span className="bywho">By Yaruhito Project</span>
        </h5>
        <div className="nav-links">
          <ul>
            <Link href="/" name="Home" />
            <Link href="/about" name="About" />

            <Link href="/#courses" name="Courses">
              <ul>
                <Link href="/html-course" name="HTML Course" />
                <Link href="/react-course" name="React Course" />
                <Link href="/solidity" name="Solidity" />
              </ul>
            </Link>

            <Link href="/icp" name="ICP" />
            <Link href="/profile" name="Profile">
              <ul>
                <Link href="/track" name="Track" />
                <Link href="/" name="Sign Out" />
              </ul>
            </Link>
          </ul>
        </div>
      </nav>
    </section>
  );
}
