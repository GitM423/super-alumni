import React, { Component } from "react";
import axios from "axios";

import FiltersSearch from "./essentials/FiltersSearch.component";
import FilterTag from "./essentials/FilterTag.component";
import FilterTagActive from "./essentials/FilterTag.component";

import AlumniList from "./pool/partials/AlumniList.component";
import OrderList from "./pool/partials/OrdersList.component";

class Pool extends Component {
  constructor(props) {
    super(props);
    this.expandFilters = this.expandFilters.bind("this");

    this.state = {
      poolSelection: "",
      activeFilterTags: [],
      filtesExpanded: false,
      filtersData: [{ _id: "", options: ["test"] }],
    };
  }

  async componentDidMount() {
    await axios
      .get("http://localhost:5000/api/filters")
      .then((response) => {
        console.log("Data: ", response.data);
        this.setState({ filtersData: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  expandFilters() {}

  render() {
    return (
      <main id="pool">
        {this.state.poolSelection === "" ? (
          <div>
            <h1>Select Pool</h1>
            <button
              onClick={() => {
                this.setState({ poolSelection: "alumni" });
              }}
            >
              Super Alumni
            </button>
            <button
              onClick={() => {
                this.setState({ poolSelection: "orders" });
              }}
            >
              Orders
            </button>
          </div>
        ) : this.state.poolSelection === "alumni" ? (
          <div>
            <div>
              <h1>Super Alumni Pool</h1>
              <button
                onClick={() => {
                  this.setState({ poolSelection: "orders" });
                }}
              >
                Orders
              </button>
              <div>
                {this.state.activeFilterTags.map((tag) => {
                  return <FilterTagActive tag={tag} />;
                })}
              </div>
              <div className="add-filter">
                {this.state.filtersData.map((filter) => {
                  <div>
                    <h2>{filter._id}</h2>
                    {filter.options.map((filterOption) => {
                      return <FilterTag tag={filterOption} />;
                    })}
                  </div>;
                })}
              </div>
              <p>
                Army had half a day. Bad news. Andy Griffith turned us down. He
                didn't like his nice trailer. Did you enjoy your meal, Mom? You
                drank it fast enough. Get me a vodka rocks. And a piece of
                toast. Marry me.”
              </p>
            </div>
            {/* <AlumniList /> */}
          </div>
        ) : this.state.poolSelection === "orders" ? (
          <div>
            <div>
              <h1>Order Pool</h1>
              <button
                onClick={() => {
                  this.setState({ poolSelection: "alumni" });
                }}
              >
                Super Alumni
              </button>
              <div>
                {this.state.activeFilterTags.map((tag) => {
                  return <FilterTagActive tag={tag} />;
                })}
                <div>Alle Filter</div>
              </div>
              <div className="add-filter"></div>
              <p>
                Army had half a day. Bad news. Andy Griffith turned us down. He
                didn't like his nice trailer. Did you enjoy your meal, Mom? You
                drank it fast enough. Get me a vodka rocks. And a piece of
                toast. Marry me.”
              </p>
            </div>
            {/* <OrderList /> */}
          </div>
        ) : (
          <div>Error</div>
        )}

        <style jsx>{``}</style>
      </main>
    );
  }
}

export default Pool;
