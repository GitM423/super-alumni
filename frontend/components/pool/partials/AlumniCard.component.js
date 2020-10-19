import React, { Component } from "react";
import Link from "next/link";

class AlumniCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <article className="alumni-card">
        <div className="alumni-card-title">{this.props.alumni.title}</div>
        <div className="alumni-card-content">
          <div className="alumni-card-image">
            <img src={this.props.alumni.imageURL} alt="" />
          </div>
          <div className="alumni-card-description">
            <h2>
              {this.props.alumni.firstName} {this.props.alumni.lastName}
            </h2>
            <p>{this.props.alumni.description}</p>
          </div>
        </div>
        <div className="alumni-card-socials">
          <Link href="">
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
          </Link>
        </div>

        <style jsx>{`
          .alumni-card {
            display: flex;
          }

          .alumni-card .alumni-card-title {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            justify-content: flex-end;
            padding-left: 1rem;
            text-transform: uppercase;
          }

          .alumni-card .alumni-card-image {
            display: flex;
            justify-content: center;
            align-items: center;
            object-fit: contain;
            overflow: hidden;
            max-height: 20rem;
            max-width: 100%;
          }

          .alumni-card img {
            width: 100%;
          }

          .alumni-card .alumni-card-description h2 {
            padding: 2rem 0;
            font-size: 1.9rem;
          }

          .alumni-card .alumni-card-description p {
            font-size: 1.4rem;
            letter-spacing: 0.1rem;
            word-spacing: 0.2rem;
            line-height: 2.5rem;
          }

          .alumni-card .alumni-card-socials {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-left: 1rem;
          }

          .alumni-card .alumni-card-socials div {
            width: 1.8rem;
          }
          .alumni-card .alumni-card-socials div:hover {
            cursor: pointer;
          }
        `}</style>
      </article>
    );
  }
}

export default AlumniCard;
