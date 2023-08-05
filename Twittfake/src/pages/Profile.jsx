import Header from "../assets/Header/Header";
import ProfileView from "../assets/ProfileView/ProfileView";
import Navbar from "../assets/Navbar/Navbar";
import Feed from "../assets/Feed/Feed";
import HomeButton from "../assets/HomeButton/HomeButton";
import EditButton from "../assets/EditButton/EditButton";

const Profile = () => {
  return (
    <>
      <HomeButton />
      <EditButton />
      <Header name={"Profil"} />
      <ProfileView />
      <Feed />
      <Navbar />
    </>
  );
};

export default Profile;
