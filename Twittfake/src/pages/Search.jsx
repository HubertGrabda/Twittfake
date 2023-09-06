import Header from "../components/Header/Header";
import HomeButton from "../components/HomeButton/HomeButton";
import Navbar from "../components/Navbar/Navbar";
import SearchbarMobile from "../components/SearchbarMobile/SearchbarMobile";
import PopularMobile from "../components/PopularMobile/PopularMobile";
import useRedirect from "../hooks/useRedirect";
import ProfileReference from "../components/ProfileReference/ProfileReference";

const Search = () => {
  useRedirect();

  return (
    <>
      <Header name='Wyszukaj' />
      <ProfileReference />
      <HomeButton />
      <SearchbarMobile />
      <PopularMobile />
      <Navbar />
    </>
  );
};

export default Search;
