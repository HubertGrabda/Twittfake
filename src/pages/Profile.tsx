import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import HomeButton from "../components/HomeButton/HomeButton";
import LogOutButton from "../components/LogOutButton/LogOutButton";

const Profile = () => {

  return (
    <>
      <LogOutButton />
      <HomeButton />
      <Header pageTitle={"Profil"} />
      <ProfileView />
      <Feed />
      <Navbar />
    </>
  );
};
export default Profile;
