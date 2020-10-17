import React, { Component } from "react";

// import ProfileInfo from "./profile/partials/ProfileInfo.component";
// import ProfileEdit from "./profile//ProfileEdit.component";

// import Header from "./essentials/Header.component";

class Profile extends Component {
  state = { profileOption: "selection" };
  render() {
    return (
      <div id="profile">
        {this.state.profileOption === "selection" ? (
          <main>
            <div className="left">
              <button onClick="handleSelection('developer')" className="btn btn-black">Entwickler</button>
            </div>
            <div className="right">
              <button onClick="handleSelection('client')" className="btn btn-green">Kunde</button>
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
        </div>

        <style jsx>
          {`
            main {
              height: 100vh;
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
            @media (min-width: 768px) and (max-width: 1024px) {
              main {
                grid-template-columns: 1fr;
              }
            }
            @media (min-width: 320px) and (max-width: 767px) {
              main {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Profile;