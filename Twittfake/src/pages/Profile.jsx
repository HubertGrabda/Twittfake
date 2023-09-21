import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import HomeButton from "../components/HomeButton/HomeButton";
import LogOutButton from "../components/LogOutButton/LogOutButton";
import { useTweetContext } from "../hooks/useTweetContext";

const Profile = () => {
  const { profileToDisplay, userLogged } = useTweetContext();
  const isMobileScreen = window.innerWidth < 1024;

  return (
    <>
      {userLogged === profileToDisplay && isMobileScreen && <LogOutButton />}
      <HomeButton />
      <Header name={"Profil"} />
      <ProfileView />
      <Feed />
      <Navbar />
    </>
  );
};
export default Profile;
