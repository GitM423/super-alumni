import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "next/router";

import FiltersEdit from "./partials/FiltersEdit.component";

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
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.loadFilters = this.loadFilters.bind(this);
    this.toggleWorkingHours = this.toggleWorkingHours.bind(this);
    this.toggleFields = this.toggleFields.bind(this);
    this.toggleSkills = this.toggleSkills.bind(this);
    this.toggleExperience = this.toggleExperience.bind(this);

    this.onChangeSkillsSearch = this.onChangeSkillsSearch.bind(this);

    this.state = {
      profileType: props.profile?.profileType,
      displayName: props.profile?.displayName,
      email: props.profile?.email,
      githubUrl: props.profile?.githubUrl,
      linkedinUrl: props.profile?.linkedinUrl,
      imageUrl: props.profile?.imageUrl,
      workingHours: props.profile?.workingHours,
      field: props.profile?.field,
      skills: props.profile?.skills,
      experience: props.profile?.experience,
      description: props.profile?.description,
      passedInProfile: props.profile,

      filtersLoaded: false,
    };

    console.log(props.profile);
  }

  loadFilters() {
    axios
      .get("http://localhost:5000/api/filters")
      .then((response) => {
        // console.log("Filter Data: ", response.data);
        this.setState({
          filtersData: response.data,
          filtersLoaded: true,
          filtersSkills: response.data.filter((e) => e._id === "skills"),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeSkillsSearch(e) {
    let filteredSkillsArray = [];
    let filteredSkillsOptions = [];

    console.log(this.state.filtersSkills);
    this.state.filtersData
      .filter((e) => e._id === "skills")[0]
      .options.map((filter) => {
        console.log(filter);
        if (filter.toLowerCase().includes(e.target.value.toLowerCase())) {
          filteredSkillsOptions.push(filter);
        }
      });

    filteredSkillsArray = [{ _id: "skills", options: filteredSkillsOptions }];
    this.setState({
      filtersSkills: filteredSkillsArray,
    });
    this.setState({ skillsSearch: e.target.value });
  }

  toggleWorkingHours(e) {
    let adjustedActive = this.state.workingHours;
    if (!adjustedActive.includes(e)) {
      adjustedActive = [...adjustedActive, e];
    } else {
      adjustedActive = adjustedActive;
      let index = adjustedActive.indexOf(e);
      adjustedActive.splice(index, 1);
    }
    this.setState({ workingHours: adjustedActive });
  }

  toggleFields(e) {
    let adjustedActive = this.state.field;
    if (!adjustedActive.includes(e)) {
      adjustedActive = [...adjustedActive, e];
    } else {
      adjustedActive = adjustedActive;
      let index = adjustedActive.indexOf(e);
      adjustedActive.splice(index, 1);
    }
    this.setState({ field: adjustedActive });
  }

  toggleSkills(e) {
    let adjustedActive = this.state.skills;
    if (!adjustedActive.includes(e)) {
      adjustedActive = [...adjustedActive, e];
    } else {
      adjustedActive = adjustedActive;
      let index = adjustedActive.indexOf(e);
      adjustedActive.splice(index, 1);
    }
    this.setState({ skills: adjustedActive });
  }

  toggleExperience(e) {
    let adjustedActive = this.state.experience;
    if (!adjustedActive.includes(e)) {
      adjustedActive = [...adjustedActive, e];
    } else {
      adjustedActive = adjustedActive;
      let index = adjustedActive.indexOf(e);
      adjustedActive.splice(index, 1);
    }
    this.setState({ experience: adjustedActive });
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
  onChangeDescription = (e) => this.setState({ description: e.target.value });
  onChangeTitle = (e) => this.setState({ title: e.target.value });

  onSubmitForm(e) {
    e.preventDefault();

    const data = {
      displayName: this.state.displayName,
      email: this.state.email,
      githubUrl: this.state.githubUrl,
      linkedinUrl: this.state.linkedinUrl,
      imageUrl: this.state.imageUrl,
      workingHours: this.state.workingHours,
      field: this.state.field,
      skills: this.state.skills,
      experience: this.state.experience,
      description: this.state.description,
      title: this.state.title,
      profileType: this.state.profileType,
    };

    if (!this.state.passedInProfile) {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profiles`, data);
    } else {
      axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/profiles`, data);
    }

    this.props.router.push(`/profile/info/${this.props._id}`);
  }

  render() {
    return (
      <main>
        {!this.state.filtersLoaded ? (
          this.loadFilters()
        ) : (
          <form className="profile-form" onSubmit={this.onSubmitForm}>
            <section>
              <div className="vertical-text">Profil bearbeiten</div>

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
                  {/* <h4>Field of Work:</h4> */}
                  <FiltersEdit
                    filtersData={this.state.filtersData}
                    activeFilterTags={this.state.field}
                    toggleFilters={this.toggleFields}
                    filtersCategory="field"
                  />
                </div>

                <input
                  value={this.state.title}
                  type="text"
                  placeholder="Job title"
                  onChange={this.onChangeTitle}
                ></input>
                <textarea
                  value={this.state.description}
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Description"
                  onChange={this.onChangeDescription}
                ></textarea>

                <div>
                  <h4>Prefered working hours:</h4>
                  <FiltersEdit
                    filtersData={this.state.filtersData}
                    activeFilterTags={this.state.workingHours}
                    toggleFilters={this.toggleWorkingHours}
                    filtersCategory="workingHours"
                  />
                </div>

                <input
                  className="search"
                  value={this.state.skillsSearch}
                  type="search"
                  placeholder="Skills"
                  onChange={this.onChangeSkillsSearch}
                ></input>
                <div>
                  <h4>Skills:</h4>
                  <FiltersEdit
                    filtersData={this.state.filtersSkills}
                    activeFilterTags={this.state.skills}
                    toggleFilters={this.toggleSkills}
                    filtersCategory="skills"
                  />
                </div>

                <div>
                  <h4>Experience:</h4>
                  <FiltersEdit
                    filtersData={this.state.filtersData}
                    activeFilterTags={this.state.experience}
                    toggleFilters={this.toggleExperience}
                    filtersCategory="experience"
                  />
                  {/* <h3>Berufserfahrung</h3>
                  <div className="full-bar">
                    <span className="bar"></span>
                  </div> */}
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
                  min-height: 100vh;
                  padding-top: 10vh;
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
                .center-btn {
                  position: absolute;
                  bottom: 5%;
                  left: 45%;
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
                h4 {
                  margin-top: 1rem;
                }
              `}
            </style>
          </form>
        )}
      </main>
    );
  }
}

export default withRouter(ProfileEdit);
