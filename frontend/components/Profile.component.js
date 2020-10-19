import React, { Component } from "react";
import ProfileInfo from "./profile//ProfileInfo.component";
import ProfileEdit from "./profile//ProfileEdit.component";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileOption: props.profileOption,
      profileType: "",
      profile: props.profile
    };
  }

  handleProfileSelectionType(profileType) {
    this.setState({ profileOption: "edit", profileType: profileType })
  }

  render() {
    return (
      <div id="profile">
        {this.state.profileOption === "selection" ? (
          <main>
            <div className="vertical-text">Start</div>
            <div className="left">
              <button
                onClick={() => this.handleProfileSelectionType("developer")}
                className="btn btn-black"
              >
                Entwickler
              </button>
            </div>
            <div className="right">
              <button
                onClick={() => this.handleProfileSelectionType("client")}
                className="btn btn-green"
              >
                Kunde
              </button>
            </div>
          </main>
        ) : this.state.profileOption === "info" ? (
          <ProfileInfo profile={this.state.profile} />
        ) : this.state.profileOption === "edit" ? (
              <ProfileEdit profile={this.state.profile} profileType={this.state.profileType} />
        ) : (
          <div>Error</div>
        )}

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