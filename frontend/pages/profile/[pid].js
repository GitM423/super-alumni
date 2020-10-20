import axios from "axios";
import React from "react";
import Layout from "../../components/Layout.component";
import ProfileComponent from "../../components/Profile.component";
import HeaderComponent from "../../components/essentials/Header.component";

import { withRouter } from "next/router";

const Profile = ({ profile, profileOption }) => {
  if (!profile) {
    profileOption = "selection";
  } else if (profile && profileOption != "edit") {
    profileOption = "info";
  }

  return (
    <Layout>
      <HeaderComponent />
      <ProfileComponent profile={profile} profileOption={profileOption} />
    </Layout>
  );
};

Profile.getInitialProps = async (ctx) => {
  try {
    // console.log(ctx);
    console.log(ctx.query);
    const pid = "5f8d8c6d1b5f44f128115bbb";
    // console.log(query);

    const { profileOption } = ctx.query;
    // console.log(profileOption);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/${ctx.query.pid}`
    );
    return { profile: response.data, profileOption: profileOption };
  } catch (error) {
    // console.log(error);
    // if (ctx.res) {
    //   ctx.res.writeHead(302, {
    //     Location: "/login",
    //   });
    //   ctx.res.end();
    // }
  }
};

export default withRouter(Profile);
