import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="bottom-container">
        <h2>Get In Touch</h2>
        <h3>Please ask for collaboration.</h3>
        <p className="text">
          Yaruhito project is an initiative to spread internet knowledge across
          globe and contribute to Web3 learning ecosystem.
        </p>
        <a className="btn" href="mailto:ley.hanamura@email.com">
          CONTACT ME
        </a>
      </div>

      <a className="footer-link" href="https://discord.gg/gCS5tyEf">
        Discord
      </a>
      <a className="footer-link" href="https://twitter.com/ilearnx">
        Twitter
      </a>
      <p>© Yaruhito Project.</p>
    </footer>
  );
}

function Link(props) {
  return <a href={props.href}>{props.name}</a>;
}

export function FooterV2() {
  return (
    <footer className="column hr-center space-between">
      <div className="footer-data">
        <div className="footer-col site-info">
          <p>Yaruhito Project</p>
          <div className="footer-row">
            Welcome to Web3Journey! Learn the basic of internet to how-to-Web3
            development. We curated free learning materials (HTML, CSS,
            JavaScript, and React) to help you learn the important aspects of
            Web2 and Web3.
          </div>
        </div>
        <div className="footer-col">
          <p>Navigation</p>
          <Link name="Home" href="/" />
          <Link name="About" href="/about" />
          <Link name="Courses" href="/#courses" />
        </div>
        <div className="footer-col">
          <p>Courses</p>
          <Link name="HTML / CSS" href="/html-course" />
          <Link name="React" href="/react-course" />
          <Link name="Solidity" href="/solidity" />
        </div>
        <div className="footer-col">
          <p>Sitemap</p>

          <Link name="Profile" href="/profile" />
          <Link name="Track" href="/tract" />
          <Link name="ICP" href="icp" />
        </div>
      </div>
      <div className="footer-ending full-width">
        <p>©Copyright {new Date().getFullYear()} Yaruhito Project.</p>
      </div>
    </footer>
  );
}
