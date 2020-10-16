import React, { Component } from "react";

// import ProfileInfo from "./profile/ProfileInfo.component";
// import ProfileEdit from "./profile/ProfileEdit.component";

class Profile extends Component {
  state = { profileOption: "selection" };
  render() {
    return (
      <div id="profile">
        {this.state.profileOption === "selection" ? (
          <main>
            <div className="left">
              <button className="btn btn-black">Entwickler</button>
            </div>
            <div className="right">
              <button className="btn btn-green">Kunde</button>
            </div>
          </main>
        ) : this.state.profileOption === "info" ? (
          <ProfileInfo />
        ) : this.state.profileOption === "edit" ? (
          <ProfileEdit />
        ) : (
          <div>Error</div>
        )}

        <div>
          <div className="vertical-text">Start</div>
          <div className="middle">
            <input
              className="btn btn-purple"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </div>

        <style jsx>
          {`
            @font-face {
              font-family: "neue-machina-light";
              src: url("../font/neue-machina-light.otf") format("opentype");
            }
            @font-face {
              font-family: "neue-machina-regular";
              src: url("../font/neue-machina-regular.otf") format("opentype");
            }
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            header {
              height: 5vh;
            }
            main {
              height: 95vh;
              display: grid;
              grid-template-columns: 1fr 1fr;
              font-family: "neue-machina-light";
            }
            main div {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            main .left {
              background: #5d3ede;
            }
            main .right {
              background: white;
            }
            .vertical-text {
              font-size: 5.5em;
              position: absolute;
              top: 60%;
              left: 50%;
              transform: rotate(-90deg);
              transform-origin: left center;
              -webkit-text-stroke: 2px #000000;
              -webkit-text-fill-color: white;
              font-family: "neue-machina-light", sans-serif;
            }
            .middle {
              position: absolute;
              top: 75%;
              left: 43%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Profile;

// class ProfileChoice extends Component {
//     state = {}
//     render() {
//         return (
//             <div id="profile">
//                 <header></header>

//                 <main id="profile-choice">
//                     <div className="left">
//                         <a className="btn btn-black" href="#">Entwickler</a>
//                     </div>

//                     <div className="right">
//                         <a className="btn btn-green" href="#">Kunde</a>
//                     </div>
//                 </main>

//                 <div>
//                     <div className="vertical-text">Start</div>
//                     <div className="middle">
//                         <input className="btn btn-purple" type="submit" value="Submit">
//     </div>
//                     </div>
//                 </div>
//          );
//     }
// }

// export default ProfileChoice;
