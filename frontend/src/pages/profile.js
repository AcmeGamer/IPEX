function BoxArea(props) {
  return (
    <div className="course-data row hr-center">
      <img
        src={
          props.image ??
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seoclerk.com%2Fpics%2F500304-1KuyMq1482510124.jpg&f=1&nofb=1"
        }
        alt={props.name ?? "HTML"}
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
          <BoxArea
            name="React"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpmcaonline.org%2Fwp-content%2Fuploads%2F2020%2F07%2Freact-js-2.jpg&f=1&nofb=1"
          />
        </div>
        <div className="certificates">
          <h1>Certificates</h1>
          <div>
            <img src="images/certificates/html.jpg" alt="HTML/CSS" />
            <img src="images/certificates/react.jpg" alt="React" />
          </div>
        </div>
        <div className="partners">
          <h1>Your Partners</h1>
          <div>
            <div>
              <img
                src="https://i1.sndcdn.com/avatars-0QCRofC3yRV0mkpa-6XQLMA-t500x500.jpg"
                alt="Partner 1"
              />
              <img
                src="https://hairstylecamp.com/wp-content/uploads/anime-girl-with-brown-hair.jpg"
                alt="Partner 2"
              />
              <img
                src="https://png.pngtree.com/png-clipart/20210308/original/pngtree-anime-girl-in-white-t-shirt-png-image_5782046.jpg"
                alt="Partner 3"
              />
            </div>
            <div>
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLR_OMWJr_DWdNjGufy1jcZqFaU8f_Mkh1aD-b1q=s900-c-k-c0x00ffffff-no-rj"
                alt="Partner 1"
              />
              <img
                src="https://i1.sndcdn.com/avatars-OKOYYTFMIYIB59Aq-aX3xhw-t500x500.jpg"
                alt="Partner 2"
              />
              <img
                src="http://pm1.narvii.com/6390/2ea28959e78c81b41b8bde5059baf1e5ee5b7bfe_00.jpg"
                alt="Partner 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
