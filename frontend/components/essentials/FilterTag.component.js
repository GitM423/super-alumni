import React from "react";

class FilterTag extends React.Component {
  state = {};
  render() {
    return (
      <div className="filter-tag-container">
        {this.props.status === "active" ? (
          <div
            className="filter-tag filter-tag-active"
            onClick={() => {
              this.props.toggleFilters(this.props.tag);
            }}
          >
            {this.props.tag} <span>-</span>
          </div>
        ) : this.props.status === "inactive" ? (
          <div
            className="filter-tag"
            onClick={() => {
              this.props.toggleFilters(this.props.tag);
            }}
          >
            {this.props.tag} <span>+</span>
          </div>
        ) : this.props.status === "profile" ? (
          <div className="filter-tag">{this.props.tag}</div>
        ) : (
          {}
        )}

        <style jsx>{`
          .filter-tag-container {
            display: inline-block;
            margin: 0.2rem;

            // margin: 0 0.5rem 0.5rem 0;
          }
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
