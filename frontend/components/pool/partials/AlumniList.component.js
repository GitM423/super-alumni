import React, { Component } from "react";
import axios from "axios";

import AlumniCard from "./AlumniCard.component";

class AlumniList extends Component {
  constructor(props) {
    super(props);
    this.alumniList = this.alumniList.bind(this);
    this.loadList = this.loadList.bind(this);

    this.state = {};
  }

  loadList() {
    axios
      .get("http://localhost:5000/api/alumni")
      .then((response) => {
        // console.log("Data: ", response);
        this.setState({
          alumniList: response.data,
          alumniListLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  alumniList() {
    let counter = 0;
    return this.state.alumniList.map((alumni) => {
      let check = true;
      this.props.activeFilterTags.map((activeTag) => {
        if (
          !alumni.workingHours.includes(activeTag) &&
          !alumni.field.includes(activeTag) &&
          !alumni.skills.includes(activeTag) &&
          this.props.activeFilterTags != []
        ) {
          check = false;
        }
      });
      if (check) {
        counter++;
        return <AlumniCard alumni={alumni} />;
      }
    });
  }

  render() {
    return (
      <section className="alumni-list">
        {this.state.alumniListLoaded ? this.alumniList() : this.loadList()}

        <style jsx>{`
          .alumni-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10rem;
          }

          @media only screen and (max-width: 1440px) {
            .alumni-list {
              grid-template-columns: 1fr 1fr;
            }
          }

          /* mobile */
          @media only screen and (max-width: 767px) {
            .alumni-list {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default AlumniList;
