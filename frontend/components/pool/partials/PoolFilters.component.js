import React, { Component } from "react";

import FilterTag from "../../essentials/FilterTag.component";

class PoolFilters extends Component {
  constructor(props) {
    super(props);
    this.toggleExpanded = this.toggleExpanded.bind(this);

    this.state = {
      expanded: false,
    };
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div>
        <div className="filters-list">
          <div className="active-filter-tags">
            {this.props.activeFilterTags.map((tag) => {
              return (
                <FilterTag
                  tag={tag}
                  toggleFilters={this.props.toggleFilters}
                  active={true}
                />
              );
            })}
          </div>
          <div className="filters-btns">
            <div className="show-filters pointer" onClick={this.toggleExpanded}>
              <h2>Alle&nbsp;Filter</h2>
            </div>
            <div
              className="reset-filters pointer"
              onClick={this.props.resetFilters}
            >
              <h2>Reset&nbsp;Filters</h2>
            </div>
          </div>
        </div>

        <div
          className={this.state.expanded ? "expanded-filters-list" : " hidden"}
        >
          {this.props.filtersData.map((filter) => {
            return (
              <div className="filter-category">
                <h2>{filter.category}:</h2>
                {filter.options.map((filterOption) => {
                  if (this.props.activeFilterTags.includes(filterOption)) {
                    return (
                      <FilterTag
                        tag={filterOption}
                        toggleFilters={this.props.toggleFilters}
                        active={true}
                      />
                    );
                  } else {
                    return (
                      <FilterTag
                        tag={filterOption}
                        toggleFilters={this.props.toggleFilters}
                      />
                    );
                  }
                })}
              </div>
            );
          })}
        </div>

        <style jsx>{`
          h2 {
            font-size: 1.2em;
          }
          .filters-list {
            padding: 2rem 0;
          }
          .active-filter-tags {
          }
          .filters-btns {
            display: flex;
            margin-top: 1rem;
            outline: none;
            background: none;
          }
          .filters-btns div {
            margin-right: 2rem;
          }
          .show-filters {
            margin: 0.5rem 0;
            background: url(/settingsSlider.svg) left/contain no-repeat;
            padding-left: 2rem;
          }
          .reset-filters {
            margin: 0.5rem 0;
            background: url(/undoArrow.svg) left/contain no-repeat;
            padding-left: 2rem;
          }
          .pointer {
            transition: all 0.5s;
          }
          .pointer:hover {
            cursor: pointer;
            color: #3dd7ac;
          }
          .hidden {
            display: none;
          }
          .expanded-filters-list {
            padding: 2rem;
            border: 2px solid #99879d;
            border-radius: 2rem;
            margin-bottom: 2rem;
          }
          .filter-category:not(:last-of-type) {
            margin-bottom: 1rem;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            h2 {
              font-size: 1em;
            }
          }
          @media (min-width: 320px) and (max-width: 767px) {
            h2 {
              font-size: 1em;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default PoolFilters;
