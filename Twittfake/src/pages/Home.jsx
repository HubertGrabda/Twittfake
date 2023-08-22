import { AddTweetArea } from "../components/AddTweetArea/AddTweetArea";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Popular from "../components/Popular/Popular";
import Searchbar from "../components/Searchbar/Searchbar";
import ProfileRefernece from "../components/ProfilesReference/ProfileRefernece";
import useResetFilter from "../hooks/ResetFilter";
import ReturnButton from "../components/ReturnButton/returnArrow";

const Home = () => {
  useResetFilter();
  return (
    <>
      <ProfileRefernece />
      <Header name={"Główna"} />
      <ReturnButton returnTo={""} />
      <AddTweetArea />
      <Feed />
      <Navbar />
      <Searchbar />
      <Popular />
    </>
  );
};

export default Home;
