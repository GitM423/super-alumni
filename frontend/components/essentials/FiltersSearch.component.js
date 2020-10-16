import React from "react";

class Filters extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div onClick={this.expandFilters}>Alle Filter</div>
        {this.state.filtesExpanded ? (
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Filters;
