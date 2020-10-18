import React, { Component } from "react";
import axios from "axios";

class ProfileEdit extends Component {

  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGithubUrl = this.onChangeGithubUrl.bind(this);
    this.onChangeLinkedinUrl = this.onChangeLinkedinUrl.bind(this);
    this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
    this.onChangeWorkingHours = this.onChangeWorkingHours.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onChangeAbout = this.onChangeAbout.bind(this);

    this.state = {
      profileType: props.profileType,
      displayName: "",
      email: "",
      githubUrl: "",
      linkedinUrl: "",
      imageUrl: "",
      workingHours: "",
      field: "",
      skills: "",
      experience: "",
      about: ""
    };
  }

  onChangeDisplayName = (e) => this.setState({ displayName: e.target.value });
  onChangeEmail = (e) => this.setState({ email: e.target.value });
  onChangeGithubUrl = (e) => this.setState({ githubUrl: e.target.value });
  onChangeLinkedinUrl = (e) => this.setState({ linkedinUrl: e.target.value });
  onChangeImageUrl = (e) => this.setState({ imageUrl: e.target.value });
  onChangeWorkingHours = (e) => this.setState({ workingHours: e.target.value });
  onChangeField = (e) => this.setState({ field: e.target.value });
  onChangeSkills = (e) => this.setState({ skills: e.target.value });
  onChangeExperience = (e) => this.setState({ experience: e.target.value });
  onChangeAbout = (e) => this.setState({ about: e.target.value });

  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.firstName);

    axios.post("http://localhost:5000/api/profiles", {
      displayName: this.state.displayName,
      email: this.state.email,
      githubUrl: this.state.githubUrl,
      linkedinUrl: this.state.linkedinUrl,
      imageUrl: this.state.imageUrl,
      workingHours: this.state.workingHours,
      field: this.state.field,
      skills: this.state.skills,
      experience: this.state.experience,
      about: this.state.about,
      profileType: this.state.profileType
    });
    window.location.href = "/profile"
  }

  render() {
    return (
      <form className="profile-form" onSubmit={this.onSubmitForm}>
        <section>
          <div className="vertical-text">Profil erstellen</div>

          <fieldset>
            <h2>Dein Profil</h2>
            <input
              value={this.state.displayName}
              type="text"
              placeholder="Display name"
              onChange={this.onChangeDisplayName}
            ></input>
            <input
              value={this.state.email}
              type="text"
              placeholder="Email"
              onChange={this.onChangeEmail}
            ></input>
            <input
              value={this.state.githubUrl}
              type="text"
              placeholder="Github repository-Url"
              onChange={this.onChangeGithubUrl}
            ></input>
            <input
              value={this.state.linkedinUrl}
              type="text"
              placeholder="LinkedIn-Url"
              onChange={this.onChangeLinkedinUrl}
            ></input>
            <input
              value={this.state.imageUrl}
              type="text"
              placeholder="Profile picture-Url"
              onChange={this.onChangeImageUrl}
            ></input>
          </fieldset>
        </section>

        <section>
          <fieldset>
            <div>
              <div className="filter-tag">tag1</div>
              <div className="filter-tag">tag2</div>
              <div className="filter-tag">tag3</div>
            </div>

            <input
              value={this.state.field}
              type="text"
              placeholder="Job field"
              onChange={this.onChangeField}
            ></input>
            <textarea
              value={this.state.about}
              id=""
              cols="30"
              rows="10"
              placeholder="About"
              onChange={this.onChangeAbout}
            ></textarea>

            <div>
              <label for="workingHours">Prefered working hours</label>
              <select name="" id="">
                <option value="">Freelance</option>
                <option value="">Full-time</option>
                <option value="">Part-time</option>
              </select>
            </div>

            <input
              className="search"
              value={this.state.skills}
              type="search"
              placeholder="Skills"
              onChange={this.onChangeSkills}
            ></input>
            <div>
              <div className="filter-tag">tag1 +</div>
              <div className="filter-tag">tag2 +</div>
              <div className="filter-tag">tag3 +</div>
            </div>

            <div className="bar-wrap">
              <label for="experience">Experience</label>
              <select name="" id="">
                <option value="">Less then 1 Year</option>
                <option value="">1-2 Years</option>
                <option value="">More than 2 years</option>
              </select>
              {/* <h3>Berufserfahrung</h3>
                            <div className="full-bar">
                                <span className="bar"></span>
                            </div> */}
            </div>

            <div className="wrap">
              <div className="wrap-tags">
                <div className="filter-tag">tag1 +</div>
                <div className="filter-tag">tag2 +</div>
                <div className="filter-tag">tag3 +</div>
                <div className="filter-tag">tag1 +</div>
                <div className="filter-tag">tag2 +</div>
                <div className="filter-tag">tag3 +</div>
              </div>
            </div>
          </fieldset>
          <div className="center-btn">
            <input
              className="btn btn-purple"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </section>

        <style jsx>
          {`
            form {
              height: 100vh;
              display: grid;
              grid-template-columns: 1fr 1fr;
              font-family: "neue-machina-light", sans-serif;
            }
            form section {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            form section:nth-of-type(1) {
              background: #5d3ede;
            }
            form section:nth-of-type(2) {
              background: white;
            }
            .vertical-text {
              font-size: 4em;
              position: absolute;
              bottom: 15%;
              left: 50%;
              transform: rotate(-90deg);
              transform-origin: left center;
              -webkit-text-stroke: 2px #000000;
              -webkit-text-fill-color: white;
            }
            ::placeholder {
              color: #99879d;
            }
            .search::placeholder {
              color: #99879d;
              background: url(/search-icon.png) left/contain no-repeat;
              padding-left: 1.5em;
            }
            fieldset {
              width: 70%;
            }
            form fieldset {
              padding: 2em;
              border: 1px solid white;
              background: rgba(255, 255, 255, 0.2);
            }
            form input,
            form textarea {
              display: block;
              width: 100%;
              background: white;
              border: 1px solid #000000;
              outline: none;
              padding: 1em;
              margin: 0.7em 0;
              font-size: 0.9em;
              font-weight: 200;
              color: #99879d;
              /* min-width: 25em; */
              font-family: "neue-machina-light", sans-serif;
            }
            .bar-wrap {
              margin: 1.5em 0;
            }
            // .bar-wrap h3 {
            //   padding-bottom: 5px;
            // }
            // .full-bar {
            //   background: rgb(93, 62, 222, 0.2);
            //   height: 0.4em;
            //   border-radius: 10px;
            // }
            // .bar {
            //   height: 0.4em;
            //   border-radius: 10px;
            //   display: flex;
            //   justify-content: flex-end;
            //   align-items: center;
            //   width: 70%;
            //   background: #5d3ede;
            // }
            .wrap {
              display: flex;
              align-items: center;
            }
            .wrap-tags {
              margin-right: 2em;
              display: flex;
              flex-wrap: wrap;
            }
            form .btn {
              font-family: "neue-machina-regular", sans-serif;
              padding: 10px 40px;
              display: inline-block;
              text-decoration: none;
              text-align: center;
              transition: top 0.5s linear 0s, box-shadow 0.5s linear 0s,
                left 0.5s linear 0s;
              min-width: 150px;
              letter-spacing: 1px;
              cursor: pointer;
              outline: none;
            }
            form .btn-purple {
              background: #5d3ede;
              color: white;
              border: 3px solid white;
              outline: none;
              text-transform: uppercase;
              padding: 15px;
              transition: all 0.5s;
            }
            form .btn-purple:hover {
              box-shadow: white -5px 5px 0px 0px;
              top: -5px;
              left: 5px;
              color: black;
            }
            .filter-tag {
              display: inline-block;
              padding: 0.3rem 0.6rem;
              border-radius: 0.5rem;
              border: 1px solid #99879d;
              color: #99879d;
              margin: 0.1em;
            }
            .filter-tag:hover {
              background: #99879d80;
              color: #ffffff;
              cursor: pointer;
            }
            .filter-tag-active {
              background: #99879d;
              color: #ffffff;
            }
            .center-btn {
              position: absolute;
              bottom: 5%;
              left: 43%;
            }
            @media (min-width: 768px) and (max-width: 1024px) {
              form {
                height: auto;
                grid-template-columns: 1fr;
                gap: 1em;
              }
              fieldset {
                width: 90%;
              }
              form section {
                display: flex;
                flex-direction: column;
                justify-content: normal;
                align-items: center;
              }
              form section:nth-of-type(1) {
                padding: 2em 5%;
              }
              .vertical-text {
                padding: 0.5em 0;
                font-size: 3em;
                position: static;
                transform: none;
              }
              #profile-info section:nth-of-type(2) {
                padding: 2em 15%;
              }
              .center-btn {
                position: static;
                padding-bottom: 1em;
              }
            }

            @media (min-width: 320px) and (max-width: 767px) {
              form {
                height: auto;
                grid-template-columns: 1fr;
                gap: 1em;
              }
              fieldset {
                width: 90%;
              }
              form section {
                display: flex;
                flex-direction: column;
                justify-content: normal;
                align-items: center;
              }
              form section:nth-of-type(1) {
                padding: 2em 5%;
              }
              .vertical-text {
                padding: 0.5em 0;
                font-size: 3em;
                position: static;
                transform: none;
              }
              #profile-info section:nth-of-type(2) {
                padding: 2em 5%;
              }
              .wrap {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .wrap-tags {
                margin-right: 0;
                display: flex;
                flex-wrap: wrap;
              }
              .center-btn {
                position: static;
                padding-bottom: 1em;
              }
            }
          `}
        </style>
      </form>
    );
  }
}

export default ProfileEdit;