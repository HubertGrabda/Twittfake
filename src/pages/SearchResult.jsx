import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import SearchbarMobile from "../components/SearchbarMobile/SearchbarMobile";
import HomeButton from "../components/HomeButton/HomeButton";
import useRedirect from "../hooks/useRedirect";
import ReturnArrow from "../components/ReturnArrow/ReturnArrow";
import ReturnToTopButton from "../components/ReturnToTopButton/ReturnToTopButton";

const SearchResult = () => {
  useRedirect();

  return (
    <>
      <Header pageTitle='Wyniki' />
      <ReturnToTopButton />
      <ReturnArrow returnTo={"Search"} />
      <HomeButton />
      <SearchbarMobile />
      <Feed />
    </>
  );
};

export default SearchResult;
