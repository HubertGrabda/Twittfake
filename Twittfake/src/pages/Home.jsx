import { AddTweetArea } from "../components/AddTweetArea/AddTweetArea";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Popular from "../components/Popular/Popular";
import Searchbar from "../components/Searchbar/Searchbar";
import ReturnButton from "../components/ReturnButton/returnArrow";
import ProfileRefernece from "../components/ProfilesReference/ProfileRefernece";
import useResetFilter from "../hooks/useResetFilter";

const Home = () => {
  useResetFilter()
  return (
    <div className='home-wrapper'>
      <ProfileRefernece />
      <Header name={"Główna"} />
      <ReturnButton returnTo={""} />
      <AddTweetArea />
      <Feed />
      <Navbar />
      <Searchbar />
      <Popular />
    </div>
  );
};

export default Home;
