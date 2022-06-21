export default function Box(props) {
  return (
    <div className={props.className} a="start-button" href="html-course.html">
      <h3 className="course-intro">
        <a href="html-course.html">{props.name}</a>
      </h3>
      <p className="nutshells">{props.desription}</p>
      <a className="start-button" href="html-course.html">
        Get Started
      </a>
    </div>
  )
}
