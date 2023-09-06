import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import SearchbarMobile from "../components/SearchbarMobile/SearchbarMobile";
import HomeButton from "../components/HomeButton/HomeButton";
import useRedirect from "../hooks/useRedirect";
import ReturnArrow from "../components/ReturnArrow/returnArrow";

const SearchResult = () => {
  useRedirect();
  return (
    <>
      <Header name='Wyniki' />
      <ReturnArrow returnTo={"Search"} />
      <HomeButton />
      <SearchbarMobile />
      <Feed />
    </>
  );
};

export default SearchResult;
