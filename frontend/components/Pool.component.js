import React, { Component } from "react";
import axios from "axios";

import { useRouter, withRouter, location } from "next/router";

import FiltersSearch from "./essentials/FiltersSearch.component";
import FilterTag from "./essentials/FilterTag.component";
import PoolFilters from "./pool/partials/PoolFilters.component";

import AlumniList from "./pool/partials/AlumniList.component";
import OrderList from "./pool/partials/OrdersList.component";

class Pool extends Component {
  constructor(props) {
    super(props);
    this.loadQuery = this.loadQuery.bind(this);
    this.loadFilters = this.loadFilters.bind(this);

    this.toggleFilters = this.toggleFilters.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.resultCounter = this.resultCounter.bind(this);

    this.state = {
      poolSelection: "",
      filtersExpanded: true,
      filtersData: [],
      activeFilterTags: [],
    };
  }

  loadFilters() {
    axios
      .get("http://localhost:5000/api/filters")
      .then((response) => {
        // console.log("Filter Data: ", response.data);
        this.setState({ filtersData: response.data, filtersLoaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadQuery() {
    let queryFilters;
    if (this.props.router.query.filters != null) {
      queryFilters = this.props.router.query.filters.split(" ");
    } else {
      queryFilters = [];
    }
    this.setState({ activeFilterTags: queryFilters, queryLoaded: true });
  }

  toggleFilters(e) {
    let adjustedActive;
    if (!this.state.activeFilterTags.includes(e)) {
      adjustedActive = [...this.state.activeFilterTags, e];
    } else {
      adjustedActive = this.state.activeFilterTags;
      let index = this.state.activeFilterTags.indexOf(e);
      adjustedActive.splice(index, 1);
    }

    let joined = adjustedActive;

    let searchUrl = "?filters=" + joined.join("+");

    this.setState({ activeFilterTags: adjustedActive });
    this.props.router.push(searchUrl, undefined, { shallow: true });
  }

  resetFilters() {
    this.setState({ activeFilterTags: [] });
    this.props.router.push("/pool", undefined, { shallow: true });
  }

  resultCounter() {}

  render() {
    return (
      <main id="pool">
        {!this.state.filtersLoaded ? (
          this.loadFilters()
        ) : !this.state.queryLoaded ? (
          this.loadQuery()
        ) : this.state.poolSelection === "" ? (
          <section className="hero">
            <h1 className="stroke">Select Pool</h1>
            <button
              className="btn btn-black"
              onClick={() => {
                this.setState({ poolSelection: "alumni" });
              }}
            >
              Super Alumni
            </button>
            <button
              className="btn btn-black"
              onClick={() => {
                this.setState({ poolSelection: "orders" });
              }}
            >
              Orders
            </button>
          </section>
        ) : this.state.poolSelection === "alumni" ? (
          <div>
            <section className="hero">
              <h1 className="stroke">Super Alumni Pool</h1>
              <button
                className="btn btn-black"
                onClick={() => {
                  this.setState({ poolSelection: "orders" });
                }}
              >
                Go To Orders Pool
              </button>

              <PoolFilters
                filtersData={this.state.filtersData}
                activeFilterTags={this.state.activeFilterTags}
                toggleFilters={this.toggleFilters}
                resetFilters={this.resetFilters}
              />

              <div className="description">
                <p>
                  Army had half a day. Bad news. Andy Griffith turned us down.
                  He didn't like his nice trailer. Did you enjoy your meal, Mom?
                  You drank it fast enough. Get me a vodka rocks. And a piece of
                  toast. Marry me.”
                </p>
              </div>
            </section>
            <AlumniList activeFilterTags={this.state.activeFilterTags} />
          </div>
        ) : this.state.poolSelection === "orders" ? (
          <div>
            <section className="hero">
              <h1 className="stroke">Order Pool</h1>
              <button
                className="btn btn-black"
                onClick={() => {
                  this.setState({ poolSelection: "alumni" });
                }}
              >
                Go To Super Alumni Pool
              </button>

              <PoolFilters
                filtersData={this.state.filtersData}
                activeFilterTags={this.state.activeFilterTags}
                toggleFilters={this.toggleFilters}
                resetFilters={this.resetFilters}
              />

              <div className="description">
                <p>
                  Army had half a day. Bad news. Andy Griffith turned us down.
                  He didn't like his nice trailer. Did you enjoy your meal, Mom?
                  You drank it fast enough. Get me a vodka rocks. And a piece of
                  toast. Marry me.”
                </p>
              </div>
            </section>
            <OrderList activeFilterTags={this.state.activeFilterTags} />
          </div>
        ) : (
          <div>Error</div>
        )}

        <style jsx>{`
          #pool {
            padding: 10rem;
            color: #1e252c;
          }

          #pool p {
            color: #4a4a4a;
          }

          #pool h1 {
            font-size: 5rem;
            font-family: "neue-machina-light", sans-serif;
            font-weight: 100;
          }

          #pool .hero > div:first-of-type {
            display: flex;
            align-items: center;
          }
          #pool .hero > div:first-of-type button {
            margin-left: 5rem;
          }

          #pool .hero .description {
            max-width: 850px;
            padding: 3rem 0;
          }

          #pool .hero .description p {
            font-size: 1.6rem;
            letter-spacing: 0.1rem;
            word-spacing: 0.2rem;
            line-height: 2.5rem;
          }

          // /* ---------------STROKE--------------- */

          .stroke {
            -webkit-text-stroke: 2px #3dd7ac;
            -webkit-text-fill-color: #ffffff;
          }
        `}</style>
      </main>
    );
  }
}

export default withRouter(Pool);
