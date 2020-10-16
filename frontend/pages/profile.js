// import ProfileInfo from "../components/profile/ProfileInfo.component";
// import ProfileEdit from "../components/profile/ProfileEdit.component";
// import ProfileChoice from "../components/profile/ProfileChoice.component";

// class Profile extends React.Component {
//   state = { profileOption: "selection" };
//   render() {
//     return (

//       <main id="profile">
//         {this.state.profileOption === "selection" ? (
//           <div>
//             <button>Entwickler</button>
//             <button>Kunde</button>
//           </div>
//         ) : this.state.profileOption === "info" ? (
//           <ProfileInfo />
//         ) : this.state.profileOption === "edit" ? (
//           <ProfileEdit />
//         ) : (
//           <div>Error</div>
//         )}
//       </main>
//     );
//   }
// }

// export default Profile;

import React from "react";
import Layout from "../components/Layout.component";

import ProfileComponent from "../components/Profile.component";

const Profile = () => {
  return (
    <Layout>
      <ProfileComponent />
    </Layout>
  );
};

export default Profile;
