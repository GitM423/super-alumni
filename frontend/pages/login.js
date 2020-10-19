import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import LoginComp from "../components/Home/Login.component";

const Pool = () => {
  return (
    <Layout>
      <LoginComp />
    </Layout>
  );
};

export default withRouter(Pool);
