import axios from "axios";
import React from "react";
import Layout from "../components/Layout.component";

import HeaderComponent from "../components/essentials/Header.component";
import ProfileTypeComponent from "../components/ProfileType.component";

import { withRouter } from "next/router";

const Profile = (props) => {
  console.log(props.userId);

  return (
    <Layout>
      <HeaderComponent />
      <ProfileTypeComponent userId={props.userId} />
    </Layout>
  );
};

Profile.getInitialProps = async (ctx) => {
  try {
    let cookieName = "super-session=s%3A";
    let cookie = ctx.req.headers.cookie.substr(
      ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
      32
    );
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/type/${cookie}`
    );
    if (
      response.data.profileType != "developer" &&
      response.data.profileType != "client"
    ) {
      return { userId: response.data.userId };
    } else {
      // console.log(error);
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: "/pool",
        });
        ctx.res.end();
      }
    }
  } catch (error) {
    // console.log(error);
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/login",
      });
      ctx.res.end();
    }
  }
};

export default withRouter(Profile);
