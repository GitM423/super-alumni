import axios from "axios";
import React from "react";
import Layout from "../../../components/Layout.component";

import { withRouter } from "next/router";

import HeaderComponent from "../../../components/essentials/Header.component";

import ProfileEditComponent from "../../../components/profile/ProfileEdit.component";

const ProfileEdit = (props) => {
  if (props.user === "Unauthorized") {
    let reload = window.location.reload(false);
    return reload;
  } else {
    return (
      <Layout>
        <HeaderComponent />
        <ProfileEditComponent profile={props.user} />
      </Layout>
    );
  }
};

ProfileEdit.getInitialProps = async (ctx) => {
  try {
    // console.log("test");

    let cookieName = "super-session=s%3A";
    let cookie = ctx.req.headers.cookie.substr(
      ctx.req.headers.cookie.indexOf(cookieName) + cookieName.length,
      32
    );
    // console.log(cookie);
    let sessionResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${cookie}`
    );
    // console.log("edit session res: ", sessionResponse.data);
    if (ctx.query.pid === sessionResponse.data.userId) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/${cookie}`
      );
      // console.log("edit user res: ", response);
      return { user: response.data.user };
    } else {
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: `/profile/info/${ctx.query.user}`,
        });
        ctx.res.end();
      }
      return { user: "Unauthorized" };
    }
  } catch (error) {
    console.log(error);
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/login",
      });
      ctx.res.end();
    }
    return { user: "Unauthorized" };
  }
};

export default withRouter(ProfileEdit);
