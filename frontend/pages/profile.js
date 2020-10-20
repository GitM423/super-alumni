import axios from "axios";
import React from "react";
import Layout from "../components/Layout.component";
import ProfileComponent from "../components/Profile.component";
import HeaderComponent from "../components/essentials/Header.component";

import { useRouter } from "next/router";

const Profile = ({ profile, profileOption }) => {
  if (!profile) {
    profileOption = "selection";
  } else if (profile && profileOption != "edit") {
    profileOption = "info";
  }
  const router = useRouter();
  const { pid } = router.query;
  // console.log(pid);

  return (
    <Layout>
      <HeaderComponent />
      <ProfileComponent profile={profile} profileOption={profileOption} />
    </Layout>
  );
};

Profile.getInitialProps = async ({ query }) => {
  try {
    const { profileOption } = query;
    // console.log(query);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/cody@cody.cody`
    );
    return { profile: response.data, profileOption: profileOption };
  } catch (error) {
    // console.error(error);
  }
};

export default Profile;