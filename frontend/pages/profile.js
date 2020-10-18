import axios from "axios";
import React from "react";
import Layout from "../components/Layout.component";
import ProfileComponent from "../components/Profile.component";

const Profile = ({ profile, profileOption }) => {
  if (!profile) {
    profileOption = "selection";
  } else if (profile && profileOption != "edit") { 
    profileOption = "info"
  }

  return (
    <Layout>
      <ProfileComponent profile={profile} profileOption={profileOption} />
    </Layout>
  );
};

Profile.getInitialProps = async ({ query }) => {
  try {
    const { profileOption } = query
    console.log(process.env)
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profiles/asd@asd.com`);
    return { profile: response.data, profileOption: profileOption }
  } catch (error) {
    console.error(error);
  }
}

export default Profile;
