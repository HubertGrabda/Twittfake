import Header from "../components/Header/Header";
import ProfileView from "../components/ProfileView/ProfileView";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feed/Feed";
import HomeButton from "../components/HomeButton/HomeButton";
import { useContext } from "react";
import { TweetsContext } from "../context/Tweet'sState";

const Profile = () => {
  const { whosProfileToDisplay } = useContext(TweetsContext);

  return (
    <>
      <HomeButton />
      <Header name={"Profil"} />
      <ProfileView username={whosProfileToDisplay} />
      <Feed />
      <Navbar />
    </>
  );
};

export default Profile;
