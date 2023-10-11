import Header from "../components/Header/Header";
import HomeButton from "../components/HomeButton/HomeButton";
import Navbar from "../components/Navbar/Navbar";
import PopularMobile from "../components/PopularMobile/PopularMobile";
import useRedirect from "../hooks/useRedirect";
import ProfileReference from "../components/ProfileReference/ProfileReference";
import SearchBarMobile from "../components/SearchbarMobile/SearchbarMobile";

const Search = () => {
  useRedirect();

  return (
    <>
      <Header pageTitle='Wyszukaj' />
      <ProfileReference />
      <HomeButton />
      <SearchBarMobile/>
      <PopularMobile />
      <Navbar />
    </>
  );
};

export default Search;
