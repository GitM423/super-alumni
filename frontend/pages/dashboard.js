import React from "react";

import { withRouter } from "next/router";

import axios from "axios";

import Layout from "../components/Layout.component";

import DashboardComp from "../components/Dashboard.component";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardComp />
    </Layout>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  try {
    let cookieName = "super-session=s%3A";
    let cookie = ctx.req.headers.cookie.substr(
      ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
      32
    );

    await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${cookie}`
    );
    return {};
  } catch (error) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/login",
      });

      ctx.res.end();
    }
  }
};

export default withRouter(Dashboard);
