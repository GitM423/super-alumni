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
        let sorted = response.data.sort((a, b) => {
          if (a.displayName.toUpperCase() < b.displayName.toUpperCase()) {
            return -1;
          }
          if (a.displayName.toUpperCase() > b.displayName.toUpperCase()) {
            return 1;
          }
          return 0;
        });
        this.setState({
          alumniList: sorted,
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
          section {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 5rem;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            section {
              grid-template-columns: 1fr 1fr;
              gap: 2em;
            }
          }
            @media (min-width: 320px) and (max-width: 767px){
              section {
                grid-template-columns: 1fr;
                gap: 3em;
              }
            }
          }
        `}</style>
      </section>
    );
  }
}

export default AlumniList;
