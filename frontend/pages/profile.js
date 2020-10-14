import ProfileInfo from "../components/profile/ProfileInfo.component";
import ProfileEdit from "../components/profile/ProfileEdit.component";

class Profile extends React.Component {
  state = { profileOption: "selection" };
  render() {
    return (
      <main id="profile">
        {this.state.profileOption === "selection" ? (
          <div>
            <button>Entwickler</button>
            <button>Kunde</button>
          </div>
        ) : this.state.profileOption === "info" ? (
          <ProfileInfo />
        ) : this.state.profileOption === "edit" ? (
          <ProfileEdit />
        ) : (
          <div>Error</div>
        )}
      </main>
    );
  }
}

export default Profile;
