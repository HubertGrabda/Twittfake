import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import SearchbarMobile from "../components/SearchbarMobile/SearchbarMobile";
import ReturnButton from "../components/ReturnButton/returnArrow";
import HomeButton from "../components/HomeButton/HomeButton";
import useRedirect from "../hooks/useRedirect";

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
