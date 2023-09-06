import { AddTweetArea } from "../components/AddTweetArea/AddTweetArea";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Popular from "../components/Popular/Popular";
import Searchbar from "../components/Searchbar/Searchbar";
import ProfileReference from "../components/ProfileReference/ProfileReference";
import useResetFilter from "../hooks/useResetFilter";
import ReturnArrow from "../components/ReturnArrow/returnArrow";
import { useTweetContext } from "../hooks/useTweetContext";

const Home = () => {
  useResetFilter();

  const { isUserLogged } = useTweetContext();

  return (
    <div className='home-wrapper'>
      <ProfileReference />
      <Header name={"Główna"} />
      <ReturnArrow returnTo='/' />
      {isUserLogged && <AddTweetArea />}
      <Feed />
      <Navbar />
      <Searchbar />
      <Popular />
    </div>
  );
};

export default Home;
