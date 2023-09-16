import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import HomeButton from "../components/HomeButton/HomeButton";

const Profile = () => (
  <>
    <HomeButton />
    <Header name={"Profil"} />
    <ProfileView />
    <Feed />
    <Navbar />
  </>
);

export default Profile;
