import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Popular from "../components/Popular/Popular";
import Searchbar from "../components/Searchbar/Searchbar";
import ProfileReference from "../components/ProfileReference/ProfileReference";
import useResetFilter from "../hooks/useResetFilter";
import ThemeChangeButton from "../components/ThemeChangeButton/ThemeChangeButton";
import ReturnArrow from "../components/ReturnArrow/ReturnArrow";
import ReturnToTopButton from "../components/ReturnToTopButton/ReturnToTopButton";
import { AddTweetAreaContainer } from "../components/AddTweetArea/AddTweetAreaContainer";
import AccountService from "../services/AccountService";
import { useTweetContext } from "../hooks/useTweetContext";

const Home = () => {
  useResetFilter();

  const { userLogged } = useTweetContext();

  return (
    <>
      <ProfileReference />
      <Header pageTitle={"Główna"} />
      <ReturnToTopButton />
      <ReturnArrow returnTo='' />
      <ThemeChangeButton />
      {userLogged && <AddTweetAreaContainer />}
      <Feed />
      <Navbar />
      <Searchbar />
      <Popular />
    </>
  );
};

export default Home;
