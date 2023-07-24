import { AddTweetArea } from "../assets/AddTweetArea/AddTweetArea";
import Feed from "../assets/Feed/Feed";
import Header from "../assets/Header/Header";
import Navbar from "../assets/Navbar/Navbar";
import ProfileRefernece from "../assets/ProfilesReference/ProfileRefernece";
import RightSidebar from "../assets/RightSidebar/RightSidebar";

const Home = () => {
  return (
    <>
      <ProfileRefernece />
      <Header name={"Główna"} />
      <AddTweetArea />
      <Feed />
      <Navbar />
      <RightSidebar />
    </>
  );
};

export default Home;
