import React from "react";

class FilterTag extends React.Component {
  state = {};
  render() {
    return <div className="filter-tag">{this.props.tag}</div>;
  }
}

export default FilterTag;
