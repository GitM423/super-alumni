import React from "react";
import Layout from "../components/Layout.component";

import ContactComp from "../components/home/contact.component";

import HeaderComponent from "../components/essentials/Header.component";

const Contact = () => {
  return (
    <Layout>
      <HeaderComponent />
      <ContactComp />
    </Layout>
  );
};

export default Contact;
