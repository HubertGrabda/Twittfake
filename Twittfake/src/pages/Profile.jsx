import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import HomeButton from "../components/HomeButton/HomeButton";
import { useContext } from "react";
import { TweetsContext } from "../context/TweetContext";
import ThemeChangeButton from "../components/ThemeChangeButton/ThemeChangeButton";

const Profile = () => {
  const { profileToDisplay } = useTweetContext();

  return (
    <>
      <ThemeChangeButton></ThemeChangeButton>
      <HomeButton />
      <Header name={"Profil"} />
      <ProfileView username={profileToDisplay} />
      <Feed />
      <Navbar />
    </>
  );
};

export default Profile;
