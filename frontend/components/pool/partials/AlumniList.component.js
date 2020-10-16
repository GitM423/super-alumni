import React, { Component } from "react";
import axios from "axios";

class AlumniList extends Component {
  constructor(props) {
    super(props);
    this.alumniList = this.alumniList.bind(this);

    this.state = {};
  }

  alumniList() {}

  render() {
    return (
      <section className="alumni-list">
        {this.alumniList()}
        <style jsx>{``}</style>
      </section>
    );
  }
}

export default AlumniList;
