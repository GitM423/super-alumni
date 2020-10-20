import axios from "axios";
import React, { Component } from "react";
import Link from "next/link";

import FiltersProfile from "./partials/FiltersProfile.component";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);

    // console.log(props.profile);

    this.state = {
      profileOption: props.profileOption,
      profile: props.profile,
    };
  }

  deleteProfile = (e) => {
    axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/${this.state.profile.email}`
    );

    window.location.href = "/profile";
  };

  editProfile = (e) => {
    window.location.href = "/profile?profileOption=edit";
  };

  render() {
    return (
      <main id="profile-info">
        <section>
          {/* <div className="wrapDiv">
            <h1>{this.props.profile.displayName}</h1>
          </div> */}

          {/* <div className="animation-wrap">
            <div className="vertical-text-name">
              <div className="scrolling name">{this.props.profile.displayName}</div>
            </div>
          </div> */}
          <h1 className="visible">{this.props.profile.displayName}</h1>
          <figure>
            <figcaption>{this.props.profile.title}</figcaption>
            <img
              className="profile-photo"
              src={this.props.profile.imageUrl}
              alt=""
            ></img>
            <div className="social-wrap">
              <a href={"mailto:" + this.props.profile.email} get="_blank">
                <img src="/Mail.png" alt=""></img>
              </a>
              <a href={this.props.profile.githubUrl} target="_blank">
                <img src="/github.png" alt=""></img>
              </a>
              <a href={this.props.profile.linkedinUrl} target="_blank">
                <img src="/Linkedin.png" alt=""></img>
              </a>
            </div>
          </figure>
          <h1 className="invisible">Easter Egg :)</h1>
        </section>

        <section>
          <FiltersProfile data={this.props.profile.field} />
          {/* <h2>{this.props.profile.displayName}</h2> */}
          <p>{this.props.profile.description}</p>
          <h6>Berufserfahrung: {this.props.profile.experience} </h6>
          <div className="wrap">
            <FiltersProfile data={this.props.profile.skills} />
          </div>
          <div className="change-wrap">
            <button className="edit-btn" onClick={this.editProfile}>
              <img src="/edit.png" alt=""></img>
            </button>
            <button className="delete-btn" onClick={this.deleteProfile}>
              <img src="/minus.png" alt=""></img>
            </button>
          </div>
        </section>

        <style jsx>
          {`
            main {
              height: 90vh;
              display: grid;
              grid-template-columns: 1fr 1fr;
              font-family: "neue-machina-light", sans-serif;
            }
            main section:nth-of-type(1) {
              background: #5d3ede;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            main section figure {
              display: flex;
              flex-direction: column;
            }
            main figure img {
              width: 27em;
              height: 27em;
              object-fit: cover;
              margin: 0.2em 0;
            }
            main .visible {
              padding: 0.5em 0;
              font-family: "neue-machina-regular", sans-serif;
              font-weight: 100;
              font-size: 3em;
              transform-origin: left center;
              // -webkit-text-stroke: 2px #000000;
              // -webkit-text-fill-color: #5d3ede;
              color: #04c35c;
              width: 80%;
              text-align: center;
            }

            main figcaption {
              font-size: 0.8em;
              padding: 0.5em 0;
              text-transform: uppercase;
              letter-spacing: 3px;
              color: white;
            }
            main .social-wrap {
              color: white;
              align-self: flex-end;
            }
            main .social-wrap img {
              height: 1.7em;
              width: 1.7em;
              margin: 0.1em;
              transition: all 0.5s;
            }
            main .social-wrap img:hover {
              transform: scale(0.9);
            }
            main section:nth-of-type(2) {
              background: white;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 0 20%;
            }
            main section:nth-of-type(2) p {
              line-height: 1.8;
              padding: 1em 0;
              font-family: "neue-machina-light", sans-serif;
            }
            main section:nth-of-type(2) h6 {
              font-size: 1em;
              padding-bottom: 2em;
              font-family: "neue-machina-regular", sans-serif;
            }
            main section:nth-of-type(2) h2 {
              padding: 1em 0;
            }

            // /* animated letters */
            // .vertical-text-name {
            //   font-family: "neue-machina-regular", sans-serif;
            //   font-size: 4em;
            //   position: absolute;
            //   height: 100vh;
            //   // top: 50vh;
            //   left: 50%;
            //   transform: rotate(-90deg);
            //   transform-origin: left center;
            //   -webkit-text-stroke: 2px #000000;
            //   -webkit-text-fill-color: white;
            // }

            // .animation-wrap {
            //   overflow: hidden;
            // }
            // .scrolling {
            //   animation: marquee 15s linear infinite;
            // }
            // @keyframes marquee {
            //   from {
            //     transform: translateX(135%);
            //   }
            //   to {
            //     transform: translateX(-110%);
            //   }
            // }

            .filter-tag {
              display: inline-block;
              padding: 0.3rem 0.6rem;
              border-radius: 0.5rem;
              border: 1px solid #99879d;
              color: #99879d;
              margin: 0.1em;
              transition: 0.5s all;
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
            .wrap {
              display: flex;
              align-items: center;
            }
            .wrap-tags {
              margin-right: 2em;
              display: flex;
              flex-wrap: wrap;
            }
            .change-wrap {
              display: flex;
              justify-content: flex-end;
              padding-top: 2em;
            }
            .change-wrap div {
              margin: 0 0.5em;
            }
            .delete-btn,
            .edit-btn {
              background: none;
              border: none;
              outline: none;
              cursor: pointer;
              margin: 0.3em;
              transition: 0.5s all;
            }
            .delete-btn:hover,
            .edit-btn:hover {
              transform: scale(0.9);
            }
            main .invisible {
              color: transparent;
              padding: 0.5em 0;
              font-family: "neue-machina-regular", sans-serif;
              font-weight: 100;
              font-size: 3em;
            }

            @media (min-width: 768px) and (max-width: 1024px) {
              main {
                height: auto;
                grid-template-columns: 1fr;
                gap: 1em;
              }
              main section:nth-of-type(1) {
                padding: 3em;
              }
              main .profile-photo {
                width: 20em;
                height: 20em;
              }
              main figcaption {
                align-self: flex-start;
              }
              .vertical-text-name {
                padding: 0.5em 0;
                font-size: 3em;
                position: static;
                transform: none;
              }
              .scrolling {
                animation: none;
              }
              main section:nth-of-type(2) {
                padding: 2em 15%;
              }
            }
            @media (min-width: 320px) and (max-width: 767px) {
              main {
                height: auto;
                grid-template-columns: 1fr;
                gap: 1em;
              }
              main section:nth-of-type(1) {
                padding: 3em;
              }
              main section figure {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              main .profile-photo {
                width: 20em;
                height: 20em;
                margin: 0.5em 0;
              }
              main figcaption {
                align-self: flex-start;
              }
              .vertical-text-name {
                padding: 0.5em 3%;
                font-size: 2.5em;
                position: static;
                transform: none;
              }
              .scrolling {
                animation: none;
              }
              main section:nth-of-type(2) {
                padding: 2em 10%;
              }
            }
          `}
        </style>
      </main>
    );
  }
}

export default ProfileInfo;
