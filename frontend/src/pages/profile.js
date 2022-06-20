function BoxArea(props) {
  return (
    <div className="course-data row hr-center">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seoclerk.com%2Fpics%2F500304-1KuyMq1482510124.jpg&f=1&nofb=1"
        alt="HTML"
        className="course-image"
      />

      <p className="row hr-center" style={{ marginLeft: "20px" }}>
        <span>Progress</span>
        {/* progress bar */}
        <span className="progress-bar"></span>
        <span>100%</span>
      </p>
    </div>
  );
}

export default function Profile(props) {
  return (
    <div className="min-screen-height row user-profile">
      <div style={{ width: "20%" }} className="column hr-center">
        <img
          src={
            props.authData ??
            "https://media.discordapp.net/attachments/977134526964842536/988491799339339777/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview_1.jpg"
          }
          alt={props.authData ?? ""}
          className="user-image"
        />
        <p style={{ margin: "10px" }}>{props.authData ?? "Kaide"}</p>
        <p>{props.authData ?? "data@gmail.com"}</p>
      </div>
      <div style={{ width: "80%", padding: "0 5%" }}>
        <div>
          <h1>Your Progress</h1>
          <BoxArea />
        </div>
        <div>
          <h1>Certificates</h1>
        </div>
        <div>
          <h1>Your Partners</h1>
        </div>
        <div>
          <h1>Marketplace</h1>
        </div>
      </div>
    </div>
  );
}
