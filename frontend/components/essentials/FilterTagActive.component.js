import React from "react";

class FilterTag extends React.Component {
  state = {};
  render() {
    return <div className="filter-tag filter-tag-active">{this.props.tag}</div>;
  }
}

export default FilterTag;
