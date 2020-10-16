// import ProfileInfo from "../components/profile/ProfileInfo.component";
// import ProfileEdit from "../components/profile/ProfileEdit.component";

class ProfileChoice extends React.Component {
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
            .btn {
              padding: 10px 40px;
              text-transform: uppercase;
              display: inline-block;
              text-decoration: none;
              text-align: center;
              transition: top 0.5s linear 0s, box-shadow 0.5s linear 0s,
                left 0.5s linear 0s;
              min-width: 200px;
            }
            .btn:hover {
              box-shadow: #000000 -5px 5px 0px 0px;
              top: -5px;
              left: 5px;
            }
            .btn-black {
              background: #000000;
              color: #3dd7ac;
              border: 3px solid #3dd7ac;
            }
            .btn-black:hover {
              box-shadow: #3dd7ac -5px 5px 0px 0px;
              top: -5px;
              left: 5px;
            }
            .btn-green {
              background: #3dd7ac;
              color: white;
              border: 3px solid #000000;
            }
            .btn-green:hover {
              box-shadow: #000000 -5px 5px 0px 0px;
              top: -5px;
              left: 5px;
            }
            .btn-purple {
              background: #5d3ede;
              color: white;
              border: 3px solid white;
              outline: none;
            }
            .btn-purple:hover {
              box-shadow: white -5px 5px 0px 0px;
              top: -5px;
              left: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ProfileChoice;

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
