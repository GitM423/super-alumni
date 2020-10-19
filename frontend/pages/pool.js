import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import PoolComponent from "../components/Pool.component";

const Pool = () => {
  return (
    <Layout>
      <PoolComponent />
    </Layout>
  );
};

export default withRouter(Pool);
