import React from "react";

class FilterTag extends React.Component {
  state = {};
  render() {
    return (
      <div className="filter-tag">
        {this.props.tag}
        <style jsx>{`
          .filter-tag {
            display: inline-block;
            padding: 0.3rem 0.6rem;
            border-radius: 0.5rem;
            border: 1px solid #99879d;
            color: #99879d;
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
        `}</style>
      </div>
    );
  }
}

export default FilterTag;
