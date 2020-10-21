import React, { Component } from "react";

import FilterTag from "../../essentials/FilterTag.component";

class PoolFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {this.props.filtersData.map((filter) => {
            if (filter._id === this.props.filtersCategory) {
              return (
                <div className="filter-category">
                  {filter.options.map((filterOption) => {
                    if (this.props.activeFilterTags.includes(filterOption)) {
                      return (
                        <FilterTag
                          tag={filterOption}
                          toggleFilters={this.props.toggleFilters}
                          status="active"
                        />
                      );
                    } else {
                      return (
                        <FilterTag
                          tag={filterOption}
                          toggleFilters={this.props.toggleFilters}
                          status="inactive"
                        />
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>

        <style jsx>{`
          h2 {
            font-size: 1.2em;
            padding-bottom: 0.5rem;
          }
          .filters-list {
            padding: 1rem 0;
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
