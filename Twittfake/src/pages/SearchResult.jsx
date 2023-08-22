import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import SearchbarMobile from "../components/SearchbarMobile/SearchbarMobile";
import useRedirect from "../hooks/handleResize";
import ReturnButton from "../components/ReturnButton/returnArrow";
import HomeButton from "../components/HomeButton/HomeButton";

const SearchResult = () => {
  useRedirect();
  return (
    <>
      <Header name='Wyniki' />
      <ReturnButton returnTo={"Search"} />
      <HomeButton />
      <SearchbarMobile />
      <Feed />
    </>
  );
};

export default SearchResult;
