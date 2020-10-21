import React, { Component } from "react";

import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleProfileSelectionType = this.handleProfileSelectionType.bind(
      this
    );
    console.log(props);
    this.state = {
      // profileOption: props.profileOption,
      profileType: "",
      userId: props.userId,
    };
  }

  handleProfileSelectionType(profileType) {
    const data = {
      userId: this.props.userId,
      profileType: profileType,
    };
    axios
      .post("http://localhost:5000/api/profile/updateType", data)
      .then((response) => {
        console.log(response.msg);
        this.props.router.push(`/profile/${this.props.userId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // handleEdit() {
  //   this.setState({ profileOption: "edit" });
  // }

  render() {
    return (
      <div id="profile">
        <main>
          <div className="vertical-text">Start</div>
          <div className="left">
            <button
              onClick={this.handleProfileSelectionType("developer")}
              className="btn btn-black"
            >
              Entwickler
            </button>
          </div>
          <div className="right">
            <button
              onClick={this.handleProfileSelectionType("client")}
              className="btn btn-green"
            >
              Kunde
            </button>
          </div>
        </main>

        <style jsx>
          {`
            main {
              min-height: 100vh;
              padding-top: 10vh;
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
