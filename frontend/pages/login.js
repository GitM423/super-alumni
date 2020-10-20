import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import LoginComp from "../components/Home/Login.component";

import Header from "../components/essentials/Header.component";

const Pool = () => {
  return (
    <Layout>
      <Header />
      <LoginComp />
    </Layout>
  );
};

export default withRouter(Pool);
