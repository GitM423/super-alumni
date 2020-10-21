import axios from "axios";
import React from "react";
import Layout from "../../../components/Layout.component";

import HeaderComponent from "../../../components/essentials/Header.component";
import ProfileInfoComponent from "../../../components/profile/ProfileInfo.component";

import { withRouter } from "next/router";

const ProfileInfo = (props) => {
  return (
    <Layout>
      <HeaderComponent />
      <ProfileInfoComponent
        profile={props.user}
        activeUser={props.activeUser}
      />
    </Layout>
  );
};

ProfileInfo.getInitialProps = async (ctx) => {
  try {
    let cookieName = await "super-session=s%3A";
    let cookie = await ctx.req.headers.cookie.substr(
      ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
      32
    );
    let sessionResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${cookie}`
    );
    console.log(sessionResponse.data);
    let response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/alumni/${ctx.query.pid}`
    );
    console.log(response.data);
    if (ctx.query.pid === sessionResponse.data.userId) {
      return { user: response.data, activeUser: true };
    } else {
      return { user: response.data, activeUser: false };
    }
  } catch (error) {
    console.log(error);
    ctx.res.writeHead(302, {
      Location: "/login",
    });
    ctx.res.end();
  }
};

export default withRouter(ProfileInfo);
