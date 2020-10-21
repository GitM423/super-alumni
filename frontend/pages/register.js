import React from "react";
import Layout from "../components/Layout.component";

import { withRouter } from "next/router";

import Header from "../components/essentials/Header.component";

import RegisterComp from "../components/Home/Register.component";

const Register = () => {
  return (
    <Layout>
      <Header />
      <RegisterComp />
    </Layout>
  );
};

export default withRouter(Register);
