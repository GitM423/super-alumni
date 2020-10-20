import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import PoolComponent from "../components/Pool.component";
import HeaderComponent from "../components/essentials/Header.component";

const Pool = () => {
  return (
    <Layout>
       <HeaderComponent/>
      <PoolComponent />
    </Layout>
  );
};

export default withRouter(Pool);
