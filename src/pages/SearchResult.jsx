import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import HomeButton from "../components/HomeButton/HomeButton";
import useRedirect from "../hooks/useRedirect";
import ReturnArrow from "../components/ReturnArrow/ReturnArrow";
import ReturnToTopButton from "../components/ReturnToTopButton/ReturnToTopButton";
import SearchBarMobile from "../components/SearchbarMobile/SearchbarMobile";
import { searchRoute } from "../const/routing";

const SearchResult = () => {
  useRedirect();

  return (
    <>
      <Header pageTitle='Wyniki' />
      <ReturnToTopButton />
      <ReturnArrow returnTo={searchRoute} />
      <HomeButton />
      <SearchBarMobile />
      <Feed />
    </>
  );
};

export default SearchResult;
