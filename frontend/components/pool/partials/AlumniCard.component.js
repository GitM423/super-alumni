import React, { Component } from "react";
import Link from "next/link";

class AlumniCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <figure>
        <figcaption>{this.props.alumni.title}</figcaption>
        <img src={this.props.alumni.imageURL} alt=""></img>

        {/* ******** placeholder links */}
        <div className="social-wrap">
          <a href="mailto: + email@example.com" get="_blank">
            <img src="email-icon-black.png" alt=""></img>
          </a>
          <a href="www.change.this" target="_blank">
            <img src="github-black.png" alt=""></img>
          </a>
          <a href="www.change.this" target="_blank">
            <img src="Linkedin-black.png" alt=""></img>
          </a>
        </div>

        <div className="alumni-card-description">
          <h2>
            {this.props.alumni.firstName} {this.props.alumni.lastName}
          </h2>
          <p>{this.props.alumni.description}</p>
        </div>

        {/* // <article className="alumni-card">
      //   <div className="alumni-card-title">{this.props.alumni.title}</div>
      //   <div className="alumni-card-content">
      //     <div className="alumni-card-image">
      //       <img src={this.props.alumni.imageURL} alt="" />
      //     </div>
          
      //     <div className="alumni-card-description">
      //       <h2>
      //         {this.props.alumni.firstName} {this.props.alumni.lastName}
      //       </h2>
      //       <p>{this.props.alumni.description}</p>
      //     </div>
      //   </div>

        {/* <div className="alumni-card-socials"> */}
        {/* <Link href="">
            <div>
              1
              <img src="" alt="" />
            </div>
          </Link>
          <Link href="">
            <div>
              2
              <img src="" alt="" />
            </div>
          </Link>
          <Link href="">
            <div>
              3
              <img src="" alt="" />
            </div>
          </Link>  */}
        {/* </div> */}

        <style jsx>{`
          .alumni-card {
            display: flex;
          }
          .alumni-card .alumni-card-title {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            justify-content: flex-end;
            margin-right: 1rem;
            text-transform: uppercase;
            margin-top: 1em;
            letter-spacing: 2px;
          }
          .alumni-card .alumni-card-image {
            display: flex;
            justify-content: center;
            align-items: center;
            object-fit: contain;
            overflow: hidden;
            // max-height: 20rem;
            // max-width: 100%;
          }
          // .alumni-card img {
          //   width: 20em;
          //   height: 20em;
          //   object-fit: cover;
          // }
          .alumni-card-description h2 {
            padding: 1rem 0;
            font-size: 1.5em;
          }
          .alumni-card-description p {
            font-size: 1rem;
            letter-spacing: 0.1rem;
            word-spacing: 0.2rem;
            line-height: 2rem;
            font-family: "neue-machina-light", sans-serif;
          }
          // .alumni-card .alumni-card-socials {
          //   display: flex;
          //   flex-direction: column;
          //   justify-content: center;
          //   align-items: center;
          //   padding-right: 1rem;
          //   margin-top: -9em;
          // }

          figure {
            display: flex;
            flex-direction: column;
          }
          figure img {
            width: 100%;
            height: 50vh;
            object-fit: cover;
            margin: 0.2em 0;
          }
          figcaption {
            font-size: 0.8em;
            padding: 0.5em 0;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: black;
          }
          .social-wrap {
            align-self: flex-end;
          }
          .social-wrap img {
            height: 1.5em;
            width: 1.5em;
            margin: 0.1em;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            figcaption {
              align-self: flex-start;
            }
            .social-wrap {
              align-self: flex-end;
            }
            figure img {
              height: 30vh;
            }
            .alumni-card-description p {
              font-size: 0.9em;
            }
          }
            @media (min-width: 320px) and (max-width: 767px) {
              figure {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              figcaption {
                align-self: flex-start;
              }
              figure img {
                height: 40vh;
              }
              .alumni-card-description p {
                font-size: 0.9em;
              }
            }
        `}</style>
        {/* </article> */}
      </figure>
    );
  }
}

export default AlumniCard;
