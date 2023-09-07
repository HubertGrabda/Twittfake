import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import HomeButton from "../components/HomeButton/HomeButton";
import { useTweetContext } from "../hooks/useTweetContext";

const Profile = () => {
  const { profileToDisplay } = useTweetContext();

  return (
    <>
      <HomeButton />
      <Header name={"Profil"} />
      <ProfileView username={profileToDisplay} />
      <Feed />
      <Navbar />
    </>
  );
};

export default Profile;
