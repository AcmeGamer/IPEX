export default function Profile(props) {
  return (
    <div className="min-screen-height row user-profile">
      <div style={{ width: "40%" }}>
        <img
          src={
            props.authData ??
            "https://media.discordapp.net/attachments/977134526964842536/988491799339339777/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview_1.jpg"
          }
          alt={props.authData ?? ""}
          className="user-image"
        />
        <h1>{props.authData ?? "Kaide"}</h1>
        <p>{props.authData ?? "data@gmail.com"}</p>
      </div>
      <div style={{ width: "60%" }}>
        {/* <h1>Your Progress</h1>
      <h1>NFT Certificate</h1>
      <h1>Your Partners</h1>
      <h1>Questions:</h1>
      <p>Which course/media/article taught you the most about React.js?</p>
      <h1>Marketplace</h1> */}
      </div>
    </div>
  );
}
