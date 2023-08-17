import { AddTweetArea } from "../components/AddTweetArea/AddTweetArea";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Popular from "../components/Popular/Popular";
import Searchbar from "../components/Searchbar/Searchbar";
import ProfileRefernece from "../components/ProfilesReference/ProfileRefernece";
import { useContext } from "react";
import { TweetsContext } from "../context/Tweet'sState";

const Home = () => {
  const filteredItems = useContext(TweetsContext);

  return (
    <>
      <ProfileRefernece />
      <Header name={"Główna"} />
      <AddTweetArea />
      <Feed mapData={filteredItems} />
      <Navbar />
      <Searchbar />
      <Popular />
    </>
  );
};

export default Home;
