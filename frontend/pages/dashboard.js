import React, { Component } from "react";
import { withRouter } from "next/router";

import axios from "axios";

import Layout from "../components/Layout.component";

import DashboardComp from "../components/Dashboard.component";

class Dashboard extends Component {
  state = {};

  componentWillMount() {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        // localStorage.setItem("auth-token", "");
        // token = "";
        // return this.props.router.push("/login");
      }
      // console.log(token);

      axios
        .get("http://localhost:5000/auth/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((user) =>
          this.setState({
            userData: {
              token,
              user: user.data,
            },
          })
        )
        .catch((err) => {
          // return this.props.router.push("/login");
        });
      // console.log(token);
    };

    checkLoggedIn();
  }

  render() {
    return (
      <Layout>
        <DashboardComp />
      </Layout>
    );
  }
}

export default withRouter(Dashboard);
