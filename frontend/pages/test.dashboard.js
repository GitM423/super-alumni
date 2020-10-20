import React, { Component } from "react";
import { withRouter } from "next/router";

import axios from "axios";

import Layout from "../components/Layout.component";

import DashboardComp from "../components/Dashboard.component";

import Cookies from "universal-cookie";

const cookies = new Cookies(this.props.headers.cookie);

class Dashboard extends Component {
  state = {};

  componentWillMount() {
    console.log(cookies.get("cookie-session"));
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        // return this.props.router.push("/login");
      }
      // console.log(token);

      axios
        .get("http://localhost:5000/auth/withToken", {
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

// import React, { Component } from "react";
// import { withRouter } from "next/router";

// import axios from "axios";

// import Layout from "../components/Layout.component";

// import DashboardComp from "../components/Dashboard.component";

// const Dashboard = ({ auth, profileOption }) => {
//   if (!auth) {
//     profileOption = "selection";
//   } else if (auth) {
//     profileOption = "info";
//   }

//   return (
//     <Layout>
//       <DashboardComp />
//     </Layout>
//   );
// };

// function Page({ stars }) {
//   return <div>Next stars: {stars}</div>;
// }

// Page.getInitialProps = async (ctx) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

// Dashboard.getInitialProps = async ({ query }) => {
//   try {
//     const checkLoggedIn = async () => {
//       let token = localStorage.getItem("auth-token");
//       if (token === null) {
//         localStorage.setItem("auth-token", "");
//         token = "";
//         return this.props.router.push("/login");
//       }
//       console.log(token);

//       axios
//         .get("http://localhost:5000/auth/withToken", {
//           headers: { Authorization: "Bearer " + token },
//         })
//         .then((user) =>
//           this.setState({
//             userData: {
//               token,
//               user: user.data,
//             },
//           })
//         )
//         .catch((err) => {
//           return this.props.router.push("/login");
//         });
//       // console.log(token);
//     };

//     checkLoggedIn();
//   }
// };

// // class Dashboard extends Component {
// //   state = {};

// //   componentWillMount() {
// //     const checkLoggedIn = async () => {
// //       let token = localStorage.getItem("auth-token");
// //       if (token === null) {
// //         localStorage.setItem("auth-token", "");
// //         token = "";
// //         return this.props.router.push("/login");
// //       }
// //       console.log(token);

// //       axios
// //         .get("http://localhost:5000/auth/withToken", {
// //           headers: { Authorization: "Bearer " + token },
// //         })
// //         .then((user) =>
// //           this.setState({
// //             userData: {
// //               token,
// //               user: user.data,
// //             },
// //           })
// //         )
// //         .catch((err) => {
// //           return this.props.router.push("/login");
// //         });
// //       // console.log(token);
// //     };

// //     checkLoggedIn();
// //   }

// //   render() {
// //     return (
// //       <Layout>
// //         <DashboardComp />
// //       </Layout>
// //     );
// //   }
// // }

// export default withRouter(Dashboard);
