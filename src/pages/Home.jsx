import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Popular from "../components/Popular/Popular";
import ProfileReference from "../components/ProfileReference/ProfileReference";
import useResetFilter from "../hooks/useResetFilter";
import ThemeChangeButton from "../components/ThemeChangeButton/ThemeChangeButton";
import ReturnArrow from "../components/ReturnArrow/ReturnArrow";
import ReturnToTopButton from "../components/ReturnToTopButton/ReturnToTopButton";
import { AddTweetAreaContainer } from "../components/AddTweetArea/AddTweetAreaContainer";
import SearchBar from "../components/Searchbar/Searchbar";
import { homePageRoute } from "../const/routing";


const Home = () => {
  useResetFilter();

  return (
    <>
      <ProfileReference />
      <Header pageTitle={"Główna"} />
      <ReturnToTopButton />
      <ReturnArrow returnTo={homePageRoute} />
      <ThemeChangeButton />
      <AddTweetAreaContainer />
      <Feed />
      <Navbar />
      <SearchBar />
      <Popular />
    </>
  );
};

export default Home;
