import axios from "axios";
import React from "react";
import Layout from "../components/Layout.component";
import ProfileComponent from "../components/Profile.component";

const Profile = ({ profile }) => {
  let profileOption = "selection";
  if (profile != null) {
    profileOption = "info"
  }

  return (
    <Layout>
      <ProfileComponent profile={profile} profileOption={profileOption} />
    </Layout>
  );
};

Profile.getInitialProps = async (ctx) => {
  try {
    const response = await axios.get("http://localhost:5000/api/profiles/asd@asd3.com");
    console.log(response);
    return { profile: response.data }
  } catch (error) {
    console.error(error);
  }
}

export default Profile;
