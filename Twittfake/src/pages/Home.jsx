import { AddTweetArea } from "../components/AddTweetArea/AddTweetArea";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import ProfileRefernece from "../components/ProfilesReference/ProfileRefernece";
import RightSidebar from "../components/RightSidebar/RightSidebar";

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
