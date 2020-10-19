import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import RegisterComp from "../components/Home/Register.component";

const Pool = () => {
  return (
    <Layout>
      <RegisterComp />
    </Layout>
  );
};

export default withRouter(Pool);
