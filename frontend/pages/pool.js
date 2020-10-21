import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import axios from "axios";

import PoolComponent from "../components/Pool.component";
import HeaderComponent from "../components/essentials/Header.component";

const Pool = (props) => {
  return (
    <Layout>
      <HeaderComponent />
      <PoolComponent />
    </Layout>
  );
};

Pool.getInitialProps = async (ctx) => {
  try {
    let cookieName = "super-session=s%3A";
    let cookie = ctx.req.headers.cookie.substr(
      ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
      32
    );
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${cookie}`
    );
    // console.log("response: ", response);
    return { msg: "Authorized" };
  } catch (error) {
    console.log(error);
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/login",
      });
      ctx.res.end();
    }
  }
};

export default withRouter(Pool);
